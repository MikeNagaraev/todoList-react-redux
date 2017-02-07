import React from 'react'
import Form from './Form'
import {Modal, Button} from 'react-bootstrap'
import './css/header.css'

const Header = React.createClass({
    getInitialState() {
        return {show: false};
    },

    showModal() {
        this.setState({show: true});
    },

    hideModal() {
        this.setState({show: false});
    },

    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h1>
                        Create your first ToDo list!
                    </h1>
                    <div className="header-bottom">
                        <p>
                            <button className="button-add" onClick={this.showModal}>
                                Add todo
                            </button>
                        </p>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title bsClass="text-center">Describe your task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default Header
