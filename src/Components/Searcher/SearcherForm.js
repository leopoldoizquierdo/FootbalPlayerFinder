import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { isAlphabetic, isInteger } from './../../Utils'; 


const inputValidations = (props) => {
    if(!props.meta.error){
        return null;
    }
    return (
        <div>
            <br/>
            <div className="alert alert-danger" role="alert">
                {props.meta.error}
            </div>
        </div>
    );
}
const textInputField = (props) => {
    return (
        <div className="form-group">
            <input id={props.name} 
            className="form-control"
            onChange={props.input.onChange} 
            placeholder={props.ph}
            value={props.input.value} />
            {inputValidations(props)}
        </div>
    );
}

const selectInputField = (props) => {
    let options = [];
    if(props.options){
        options = props.options;
    }
    return (
        <div className="form-group">
            <select className="custom-select"
            onChange={props.input.onChange} 
            value={props.input.value} >
                <option value="">{props.defaultText}</option>
                {options.map((elem, index) => (
                    <option key={index} value={elem.value}>{elem.text}</option>
                ))}
            </select>
            {inputValidations(props)}
        </div>
    );
}



const validate = (values) => {
    const errors = {};
    if(!values.playerName){
        //errors.playerName = 'this field is required';
    }
    else if(!isAlphabetic(values.playerName)){
        errors.playerName = 'this field should only contains letters and spaces';
    }

    if(!values.position){
        //errors.position = 'this field is required';
    }


    if(!values.age){
        //errors.age = 'this field is required';
    }
    else if(!isInteger(values.age)){
        errors.age = 'this field should an integer number';
    }
    else if(parseInt(values.age) < 18){
        errors.age = 'the age should be greater or equals than 18';
    }
    else if(parseInt(values.age) > 40){
        errors.age = 'the age should be smaller or equals than 40';
    }
    
    return errors;
}; 



const SearcherForm = (props) => {
    const { listActionFilterPlayers, display_button_loader } = props;
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-3'>
                    <Field name='playerName' component={textInputField} ph='Player Name'/>
                </div>
                <div className='col-md-3'>
                    <Field name='position' 
                    component={selectInputField} 
                    defaultText={'Position'}
                    options={[
                        {value: 'Attacking Midfield', text: 'Attacking Midfield'},
                        {value: 'Central Midfield', text: 'Central Midfield'},
                        {value: 'Centre-Back', text: 'Centre-Back'},
                        {value: 'Centre-Forward', text: 'Centre-Forward'},
                        {value: 'Defensive Midfield', text: 'Defensive Midfield'},
                        {value: 'Keeper', text: 'Keeper'},
                        {value: 'Left Midfield', text: 'Left Midfield'},
                        {value: 'Left Wing', text: 'Left Wing'},
                        {value: 'Left-Back', text: 'Left-Back'},
                        {value: 'Right-Back', text: 'Right-Back'}
                    ]}/>
                </div>
                <div className='col-md-3'>
                    <Field name='age' component={textInputField} ph='Age'/>
                </div>
                <div className='col-md-3'>
                    <button 
                        disabled={!props.valid}
                        onClick={
                            props.handleSubmit((values) => {
                                listActionFilterPlayers(values.playerName, values.position, values.age)
                            })
                        }
                
                        type="button" style={{width: 'auto'}} className="btn btn-primary">
                            {
                                display_button_loader &&
                                <span className="spinner-border spinner-border-sm" 
                                style={{display: 'inline-block', marginRight: '10px'}}></span>
                            }
                            
                            <span style={{display: 'inline-block'}}>Search</span>
                    </button>

                    
                </div>
            </div>   
        </div>
    );
}


export default reduxForm({form: 'SearcherForm', validate})(SearcherForm);