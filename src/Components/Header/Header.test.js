import React from 'react';
import Header from './index';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { testStore } from './../../Utils/TestUtils';
import { Provider } from 'react-redux';

configure({adapter: new Adapter()});

// const setUp = (props={}) => {
//     const component = shallow(<Header {...props} />);
//     return component;
// };


const setUp = (initialState={}, props={}) => {
    const store = testStore(initialState);
    const wrapper = mount( <Provider store={store}><Header /></Provider> )
    //const wrapper = shallow(<Header {...props} store={store} />);
    return wrapper;
};


describe('Header Component', () => {


    
   

    it('Should render entire component', () => {
        const wrapper = setUp({}, {});
        expect(wrapper.length).toBe(1);
    });

    /*it('Should render one div', () => {
        const wrapper = setUp({}, {});
        expect(wrapper.find('div').length).toBe(1);
    });

    it('Should render one input', () => {
        const wrapper = setUp({}, {});
        expect(wrapper.find('input').length).toBe(1);
    });*/


    /*it('Should render true value on input from props', () => {
        const props = {placeholder: 'test', value: 'test value'};
        const wrapper = setUp({}, props);
        expect(wrapper.find('input').prop('value')).toBe(props.value);
    });

    it('Should render true placeHolder on input from props', () => {
        const props = {placeholder: 'test', value: 'test value'};
        const wrapper = setUp({}, props);
        expect(wrapper.find('input').prop('placeholder')).toBe(props.placeholder);
    });*/


    /*
    it('Should work function setActiveClass and set new state', () => {
        const props = {placeholder: 'test', value: 'test value'};
        const className = 'active';
        const wrapper = setUp({}, props);

        expect(wrapper.state('classActive')).toBe('');
        expect(wrapper.find('input').prop('className')).toBe('');

        wrapper.instance().setActiveClass(className);

        expect(wrapper.state('classActive')).toBe(className);
        expect(wrapper.find('input').prop('className')).toBe(className);
    });

    it('Should work function inputChange and set new state', () => {
        const props = {placeholder: 'test', value: 'test value'};
        const className = 'active';
        const wrapper = setUp({}, props);

        expect(wrapper.state('classActive')).toBe('');
        expect(wrapper.find('input').prop('className')).toBe('');

        wrapper.instance().inputChange({target: {value: className}});

        expect(wrapper.state('classActive')).toBe(className);
        expect(wrapper.find('input').prop('className')).toBe(className);
    });
    */



 
});
