import React, { Component } from 'react'
// import Discovery from '../Discovery/Discovery'
// import Review from '../Review/Review'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="Home_page">
                <main className="main">
                    <div className="Home_page-discovery">
                        <Link to='/discovery'>Discovery</Link>
                    </div>
                    <div className="Home_page-review">
                        <Link to='/reviews'>Review</Link>
                    </div>
                </main>
            </div>
        )
    }
}