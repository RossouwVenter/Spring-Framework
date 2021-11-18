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
                    initialValues={{description ,targetDate }}>
                        onSubmit={this.onSubmit}
                        {
                            (props) => (
                                <Form>
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