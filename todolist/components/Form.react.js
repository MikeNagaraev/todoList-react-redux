import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Form extends React.Component {
    getInputValue(id) {
        return $('#' + id).val();
    }

    getTaskInfo() {
        var info = { name: this.getInputValue('name-field'),
                     desc: this.getInputValue('desc-field'),
                     hours: this.getInputValue('hours-field')};
        this.clearForm();
        return info;
    }

    clearForm() {
      $('.form-list input').val('')
    }

    render() {
        return (
            <FormGroup className="form-list">
                <ControlLabel>Имя задания:</ControlLabel>
                <FormControl id="name-field" type="text" label="Text" placeholder="Enter name"/>
                <ControlLabel>Описание:</ControlLabel>
                <FormControl id="desc-field" type="text" label="Text" placeholder="Enter description"/>
                <ControlLabel>Время на выполнение:</ControlLabel>
                <FormControl id="hours-field" type="number" label="Text" placeholder="Enter hours" min="0"/>
                <Button type="submit" bsStyle="success" className="add-button" onClick={() => this.props.addToDo(this.getTaskInfo())}>
                    Submit
                </Button>
            </FormGroup>
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
