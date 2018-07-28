import React, { Component } from 'react';

// We need to import react into all components that use JSX
// React components can show other components
// This is a FUNCTIONAL component
// There's also CLASS components
// Every class must have a render function
// Always return JSX
// Classes give added functionality


// Make Event Handler
// Pass Event Handler to DOM
// Handlers are called on____ or handle____ and then name of the DOM element
// All html elements have an onChange event
// We always wrap JSX variables in curly braces when passing to DOM element
// All elements have an event object


// State
// Plain javascript object used to record and react to user events
// Every class has a different state object
// If it changes, forces its children to rerender
// So if the searchbar state object changes, it recalls render
// To init state, we add it to the init function
// Only class based components have state

// Controlled form element
// Value is set by state. Rather than set other way around
// App starts. Renders search bar.
// New Instance created of Search bar. Run constructor
// Initial value of term is empty
// When user inputs state, this.state.terminal
// Then we change the Value
// Rerenders
// Value of the input is always = to state. If we update the state
// We also read the value out much easier
// We can operate with states, this.state.term as always being the value

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Create new object and assign it to the property state
        // We also list what we want to record
        // We only manipulate state inside constructor. Otherwise we use this.setState
        // We never want to do this.state.term = asdfasdf
        // Using set state allows continuity with the State object
        this.state = { term: ''};
    }

    render() {
        return (
            <div className = "search-bar">
                <input
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// We only want to export this function
export default SearchBar;
