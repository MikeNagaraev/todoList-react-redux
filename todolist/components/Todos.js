import React from 'react'
import {connect} from 'react-redux'
import './css/todos.css'
import Todo from './Todo'
import statuses from '../statuses'

export default class Todos extends React.Component {
    findByStatus(status) {
        let tasksByStatus = [];
        console.log('component todos props', this.props.tasks)
        this.props.tasks.get('tasksList').forEach(task => {
            console.log('task',task)
            if (task.status === status) {
                tasksByStatus.push(task)
            }
        })
        return tasksByStatus;
    }

    render() {
        return (
            <div className="table-container">
                <ul className="todo-column">
                    {console.log('component todos1 props', this.props.tasks)}
                    {this.findByStatus(statuses.TODO).map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="inprogress-column">
                    {this.findByStatus(statuses.IN_PROGRES).map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="testing-column">
                    {this.findByStatus(statuses.TESTING).map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
                <ul className="done-column">
                    {this.findByStatus(statuses.DONE).map(task => <Todo key={task.id} todo={task}>
                        {task}
                    </Todo>)}
                </ul>
            </div>
        )
    }
}
