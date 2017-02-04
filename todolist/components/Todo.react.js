import React from 'react';
import {connect} from 'react-redux'
import {addTodo, moveLeft, moveRight} from '../actions'

class Todo extends React.Component {
    render() {
        const todo = this.props.todo
        return (
            <li>
                <div className="component">
                    <div className="task-content">
                        <h3 className="task-name">{todo.name}</h3>
                        <p className="task-description">
                            {todo.desc}
                        </p>
                        <p className="task-hour">
                            Hours : {todo.hours}
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

const mapStateToProps = state => {
  return state;
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

export default connect(mapStateToProps, mapActionsToProps)(Todo);
