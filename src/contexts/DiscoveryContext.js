import React, { Component } from 'react';

const DiscoveryContext = React.createContext({
    questions: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setList: () => { },

})
export default DiscoveryContext;

export class DiscoveryProvider extends Component {
    state = {
        questions: [],
        error: null,
    };
    setList = questions => {
        this.setState({ questions })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }
    render() {
        const value = {
            questions: this.state.questions,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setList: this.setList,
        }
        return (
            <DiscoveryContext.Provider value={value}>
                {this.props.children}
            </DiscoveryContext.Provider>
        )
    }
};