import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import './css/form.css'

class Form extends React.Component {
    getInputValue(id) {
        return document.getElementById(id).value;
    }

    getTaskInfo() {
        var info = {
            name: this.getInputValue('name-field'),
            desc: this.getInputValue('desc-field'),
            hours: this.getInputValue('hours-field')
        };
        this.clearForm();
        return info;
    }

    clearForm() {
        var inputs = document.querySelectorAll('.form-list input');
        document.querySelectorAll('.form-list input').forEach(function(val) {
            val.value = '';
        });
    }

    render() {
        return (
            <div className="form-list">
                <FormGroup>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl id="name-field" type="text" label="Text" placeholder="Enter name..."/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Description:</ControlLabel>
                    <FormControl id="desc-field" type="text" label="Text" placeholder="Enter description..."/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Time for complete:</ControlLabel>
                    <FormControl id="hours-field" type="number" label="Text" placeholder="Enter hours..." min="0"/>
                </FormGroup>
                <Button type="submit" bsStyle="success" className="add-button" onClick={() => this.props.addToDo(this.getTaskInfo())}>
                    Submit
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = dispatch => {
    return {
        addToDo(payload) {
            dispatch(addTodo(payload))
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Form)
