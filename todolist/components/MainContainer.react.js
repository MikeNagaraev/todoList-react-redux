import React from 'react'
import '../index.css';
import {Table} from 'react-bootstrap';

export default class ClassName extends React.Component {
    render() {
        return (
            <Table bordered>
                <thead className="header">
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
        )
    }
}
