import React from 'react';
import {Table} from '../../dist/index.js';
import renderer from 'react-test-renderer';
import {expect} from 'chai';

describe('Table', () => {

    const columns = [
        { name: 'name', label: 'Name' },
        { name: 'full_name', label: 'Full Name' }
    ];

    const data = [
        { id: 'mflux', name: 'mflux', 'full_name': 'mflux'}
    ];

    it('renders correctly', () => {
        const element = renderer.create(
            <Table
            columns={columns}
            data={data}
        />).toJSON();

        console.log(element);
    });
});
