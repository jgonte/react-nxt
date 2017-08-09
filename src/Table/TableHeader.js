import React, {Component} from 'react';

export default class TableHeader extends Component {

  shouldComponentUpdate(newProps, newState) {
    return false;
  }

  generateColumns() {
    return this.props.columns.map(column =>
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
