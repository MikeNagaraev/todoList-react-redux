import React from 'react'
import Form from './Form.react'

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h1> Welcome to TODO List</h1>
        </div>
        <Form/>
      </div>
    )
  }
}
