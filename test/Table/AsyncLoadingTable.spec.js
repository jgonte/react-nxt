import React from 'react';
import {componentManager} from 'react-mflux';
import {AsyncLoadingTable} from '../../dist/index.js';
import {expect} from 'chai';
import renderer from 'react-test-renderer';

describe('AsyncLoadingTable tests', function () {

    it('renders the component with an asynchronous request', function (done) {

        const columns = [
            { name: 'name', label: 'Name' },
            { name: 'full_name', label: 'Full Name' }
        ];

        const element = renderer.create(
            <AsyncLoadingTable
            id='asyncLoadingTable1'
            autoLoad = {false}
            columns={columns}
            url='https://api.github.com/users/jgonte/repos'
        />);

        console.log(element);

        const component = componentManager.getComponent('asyncLoadingTable1');

        component.store.subscribe(state => {
            if (state.loading) {
                console.log(element.toJSON());
                
            } else {

                done(); // Only the second call is asynchoronous
                console.log(element.toJSON());
            }
        });

        component.load();
    });

});
