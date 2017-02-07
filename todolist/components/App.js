import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer'
import Footer from './Footer';
import Todos from './Todos'
import {connect} from 'react-redux'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {console.log('component app props', this.props.tasks)}
                <MainContainer tasks={this.props.tasks}/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
  window.state = state;
  console.log('state', state)
  return { tasks: state.tasks};
}

export default connect(mapStateToProps)(App);
