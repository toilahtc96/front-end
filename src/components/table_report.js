import React, { Component } from 'react';
import ReactTable from 'react-table'
import _ from 'lodash';
export default class PriceTestContainer extends Component {
    render() {
        
        return (<ReactTable
            // data={this.props.data}
            columns={this.props.columns}
            data={this.props.data == undefined ? [] : this.props.data.data}
            defaultPageSize={5}
            className="-striped -highlight"
        />
        );
    }
}