import React from 'react'
import {connect} from 'react-redux'
import './css/todos.css'
import Todo from './Todo'
import statuses from '../statuses'

export default class Todos extends React.Component {
    findByStatus(status) {
        let tasksByStatus = [];
        this.props.tasks.get('tasksList').forEach(task => {
            if (task.get('status') === status) {
                tasksByStatus.push(task)
            }
        })
        return tasksByStatus;
    }

    render() {
        return (
            <div className="table-container">
                <ul className="todo-column">
                    {this.findByStatus(statuses[0]).map(task => <Todo key={task.get('id')} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="inprogress-column">
                    {this.findByStatus(statuses[1]).map(task => <Todo key={task.get('id')} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="testing-column">
                    {this.findByStatus(statuses[2]).map(task => <Todo key={task.get('id')} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="done-column">
                    {this.findByStatus(statuses[3]).map(task => <Todo key={task.get('id')} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
            </div>
        )
    }
}
