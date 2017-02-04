import React from 'react';
import Header from './Header.react';
import MainContainer from './MainContainer.react'
import Footer from './Footer.react';
import Todos from './Todos.react'
import {connect} from 'react-redux'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainContainer/>
                <Todos tasks={this.props.tasks}/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { tasks: state.tasks};
}

export default connect(mapStateToProps)(App);
