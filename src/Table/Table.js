import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.Component {

  render() {

    const {
      columns,
      data,
      style
    } = this.props;

    return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" style={style}>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>);
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default Table;
