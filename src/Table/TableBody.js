import React from 'react';

export default class TableBody extends React.Component {

  generateRows() {

    const { 
      columns,
      data
     } = this.props;

    return data.map(row => {

      const cells = columns.map(column => {

        const value = row[column.name];

        if (column.renderer) {
          return (<td className="mdl-data-table__cell--non-numeric" key={column.name}>
            {column.renderer(value)}
          </td>);
        }

        return (<td className="mdl-data-table__cell--non-numeric" key={column.name}>
          {value}
        </td>);
      });

      return (<tr key={row.id}>
        {cells}
      </tr>);
    });
  }

  render() {
    return (<tbody>
        {this.generateRows()}
      </tbody>);
  }
}
