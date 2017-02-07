import React from 'react'
import '../index.css';
import {Table} from 'react-bootstrap';
import Todos from './Todos'
import './css/maincontainer.css'

export default class ClassName extends React.Component {
    render() {
        return (
          <div className="main-container">
            <Table>
                <thead className="table-header">
                    <tr>
                        <th>TODO</th>
                        <th>
                            InProgres
                        </th>
                        <th>Testing</th>
                        <th>Done</th>
                    </tr>
                </thead>
            </Table>
            <Todos tasks={this.props.tasks}/>
          </div>
        )
    }
}
