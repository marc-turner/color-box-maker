import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {
                    width: '',
                    height: '',
                    color: '',
                    id: '',
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <div
                    style={{
                        height: `${this.props.height}px`,
                        width: `${this.props.width}px`,
                        backgroundColor: `${this.props.color}`,
                    }}
                ></div>
                <button onClick={this.props.removeBox}>DELETE BOX</button>
            </div>
        );
    }
}

export default Box;
