import React from 'react';
import Searcher from './index';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { testStore } from './../../Utils/TestUtils';
import { Provider } from 'react-redux';


configure({adapter: new Adapter()});


const setUp = (initialState={}, props={}) => {
    const store = testStore(initialState);
    const wrapper = mount( <Provider store={store}><Searcher /></Provider> )
    return wrapper;
};


describe('Header Component', () => {


    it('Should render entire component', () => {
        const wrapper = setUp({}, {});
        expect(wrapper.length).toBe(1);
    });


});













