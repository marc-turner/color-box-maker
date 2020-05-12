import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const newBox = { ...this.state, id: uuidv4() };
        this.props.createBox(newBox);
        this.setState({
            width: '',
            height: '',
            color: '',
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='width'>Width</label>
                <input
                    type='number'
                    id='width'
                    name='width'
                    style={inputStyle}
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor='height'>Height</label>
                <input
                    type='number'
                    id='height'
                    name='height'
                    style={inputStyle}
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor='color'>Color</label>
                <input
                    type='text'
                    id='color'
                    name='color'
                    style={inputStyle}
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <br></br>
                <button>ADD BOX</button>
            </form>
        );
    }
}

const inputStyle = {
    margin: '5px',
};

export default NewBoxForm;
