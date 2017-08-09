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

        const {
            loading,
            data,
            error 
        } = this.store.state;

        if (loading) {
            return (<div>loading ...</div>);
        } else if (data) {

            let {
                columns
            } = this.props;

            if (!columns) {
                columns = this.buildColumns(data);
            }

            return (<Table>
                columns={columns}
                data={data.payload}
            </Table>);
        }
        return (<div>error: {error}</div>);     
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
