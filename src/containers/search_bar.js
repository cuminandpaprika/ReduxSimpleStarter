import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
constructor(props) {
    super(props);

    this.state = {term: ''};

    // We bind the this object for the function call
    // Need this when we pass around callback that uses this inside
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
}

onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

}

    render() {
return (
    <form onSubmit = {this.onFormSubmit} className="input-group" >
        <input
            placeholder = "Get a five-day forecast in your city"
            className = "form-control"
            value={this.state.term}
            onChange={this.onInputChange}
        />
        <span className = "input-group-btn">
            <button type = "submit" className = "btn btn-secondary">Submit</button>
        </span>
    </form>
);

    };
}

// We don't want the form to Submit. All html submits whn you press enter
// We're using form because of the free functionality from enter
//


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
