import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import {AsyncLoadingStore, CollectionFetchReader} from 'mflux';
import {AsyncLoadingStoreHolderComponent} from 'react-mflux';

export default class AsyncLoadingTable extends AsyncLoadingStoreHolderComponent {

    constructor(props) {
        super(props);

        this.store = new AsyncLoadingStore({
            reader: new CollectionFetchReader()
        });
    }

    render() {

        let {
            columns
        } = this.props;

        console.log('columns');

        console.log(columns);

        const {
            loading,
            data,
            error 
        } = this.store.state;

        if (loading) {

            return (<div>loading ...</div>);

        } else if (data) {

            if (!columns) {

                console.log('building columns');

                columns = this.buildColumns(data);
            }

            return (<Table
                columns={columns}
                data={data.payload}
            />);

        } else if (error) {

            return (<div>error: {error}</div>);
        }
        
        // Not loaded yet 
        return (<div>not loaded</div>);
    }

    buildColumns(data) {
        const {
            headers,
            payload
        } = data;

        console.log(headers);

        let hdr = headers.get('Meta-Record');

        if (hdr) {
            let d = JSON.parse(hdr);
        } else {
            throw new Error('Not implemented');
        }
    }

    buildReaderParams() {
        return {
            url: this.url
        };
    }
};
