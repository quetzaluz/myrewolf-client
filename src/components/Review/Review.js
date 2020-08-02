import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import { Button, Textarea } from '../Utils/Utils';
import './Review.css'

export default class Review extends Component {


    handleSubmit = ev => {
        ev.preventDefault()
        const { text, rating } = ev.target

        ApiService.postReview(text.value, Number(rating.value))
            .then(() => {
                text.value = ''
            })
            .catch(this.context.setError)
    }

    render() {
        return (
            <form
                className='ReviewForm'
                onSubmit={this.handleSubmit} >
                <div className='text'>
                    <Textarea
                        required
                        aria-label='Type a review...'
                        name='text'
                        id='text'
                        cols='30'
                        rows='3'
                        placeholder='Type review...'>
                    </Textarea>
                </div>

                <div className="select">
                    <label htmlFor='rating' >Rate our services!</label>
                    <select
                        required
                        aria-label='Rate our services!'
                        name='rating'
                        id='rating'>
                        <option value='1'>1 Star</option>
                        <option value='2'>2 Stars</option>
                        <option value='3'>3 Stars</option>
                        <option value='4'>4 Stars</option>
                        <option value='5'>5 Stars</option>
                    </select>
                </div>

                <Button type='submit'>Review Rewolf!</Button>


            </form>

        )
    }
}