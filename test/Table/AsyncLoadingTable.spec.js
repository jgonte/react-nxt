import React, {Component} from 'react';
import {AsyncLoadingStore, CollectionFetchReader, storeManager} from 'mflux';
import {AsyncLoadingTable} from '../../dist/index.js';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

describe('AsyncLoadingTable tests', function () {

    it('renders the component with an asynchronous request', function (done) {

        const columns = [
            { name: 'name', label: 'Name' },
            { name: 'full_name', label: 'Full Name' }
        ];

        const wrapper = mount(<AsyncLoadingTable
            columns={columns}
            url='https://api.github.com/users/jgonte/repos'
        />);

        expect(wrapper.text()).to.equal('loading ...');

        done();
    });

});
