import React, {Component} from "react";
import moment from 'moment'
import {Fromik, Form} from 'formik'

class TodoComponent extends Component {

    constructor(props){

        super(props)
        this.state = {
            id : 1,
            description : 'Learn Forms Now',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        } else if( values.description.length<5){
            errors.description  = 'Enter at least 5 Characters in Descrpition'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid target date'
        }
        return errors;
    }
    onSubmit(values){
        console.log(values);
    }

    render(){
        let {description,targetDate} = this.state
        // let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Fromik
                        initialValues={{description ,targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnCHange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" Component="div" 
                                                                className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" Component="div" 
                                                                className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Descrpition</label>
                                        <Field className="form-control" type="text" name="descrpition"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Fromik>
                </div>
            </div>
        )
        
            

        return <div>Todo Component for id -{this.props.match.params.id}</div>
    }
}

export default TodoComponent