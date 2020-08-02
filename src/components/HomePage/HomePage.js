import React, { Component } from 'react'
// import Discovery from '../Discovery/Discovery'
// import Review from '../Review/Review'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="Home_page">
                <main className="main">
                    <Link to='/discovery'>Discovery</Link>
                    <Link to='/review'>Review</Link>
                </main>
            </div>
        )
    }
}