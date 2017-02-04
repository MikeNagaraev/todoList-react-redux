import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo.react'

export default class Todos extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="todo-column">
                    {this.props.tasks[0].map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="inprogress-column">
                    {this.props.tasks[1].map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="testing-column">
                    {this.props.tasks[2].map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="done-column">
                    {this.props.tasks[3].map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
            </div>
        )
    }
}
