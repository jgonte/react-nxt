import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {

  render() {
    return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" style={this.props.style}>
        <TableHeader columns={this.props.columns} />
        <TableBody columns={this.props.columns} data={this.props.data} />
      </table>);
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  load: PropTypes.func.isRequired,
  autoLoad: PropTypes.bool
};

Table.defaultProps = {
  autoLoad: true
};

export default Table;
