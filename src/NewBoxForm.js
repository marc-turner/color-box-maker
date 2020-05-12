import React, { Component } from 'react';

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
            <div>
                FROM NEWBOXFORM
                <form>
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
            </div>
        );
    }
}

const inputStyle = {
    margin: '5px',
};

export default NewBoxForm;
