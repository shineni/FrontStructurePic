import React, { Component } from 'react'
import './header.less'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className= "logo">Shine Ni</div>
                <ul className= "tabs">
                    <li>JS Code Segment</li>
                    <li>JS Skills</li>
                    <li>CSS Code Segment</li>
                </ul>
            </div>
        )
    }
}