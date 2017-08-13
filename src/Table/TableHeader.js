import React from 'react';

export default class TableHeader extends React.Component {

  shouldComponentUpdate(newProps, newState) {
    return false;
  }

  generateColumns() {

    const { columns } = this.props;

    return columns.map(column =>
      <th className="mdl-data-table__cell--non-numeric mdl-data-table__header--sorted-descending" key={column.name}>
        {column.label}
      </th>);
  }

  render() {
    return (
      <thead>
        <tr>
          {this.generateColumns()}
        </tr>
      </thead>
    );
  }

}
