import React from 'react';
import {connect} from 'react-redux'
import {addTodo, moveLeft, moveRight} from '../actions'
import './css/todo.css'

class Todo extends React.Component {
    render() {
        return (
            <li>
                <div className="component">
                    <div className="task-content">
                        <h3 className="task-name">{this.props.todo.get('name')}</h3>
                        <p className="task-description">
                            {this.props.todo.get('desc')}
                        </p>
                        <p className="task-hour">
                            Hours : {this.props.todo.get('hours')}
                        </p>
                    </div>
                    <div className="navigation">
                        <div className="arrow arrow-left" onClick= {() => this.props.left(todo)}></div>
                        <div className="arrow arrow-right" onClick= {() => this.props.right(todo)}></div>
                    </div>
                </div>
            </li>
        )
    }
}

const mapActionsToProps = dispatch => {
  return {
    left(payload) {
      dispatch(moveLeft(payload))
    },
    right(payload) {
      dispatch(moveRight(payload))
    }
  }
}

export default connect(mapActionsToProps)(Todo);
