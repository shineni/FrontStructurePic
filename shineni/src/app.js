import React, { Component } from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import './app.less'

class App extends Component {
    render() {
        return (<div className= "app">
            <Header className = "header"/>
            <Main className = "main"/>
            <Footer className = "footer"/>
        </div>)
    }
}
export default App