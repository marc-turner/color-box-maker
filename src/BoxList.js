import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    render() {
        return (
            <div>
                FROM BOXLIST
                <Box />
                <NewBoxForm />
            </div>
        );
    }
}

export default BoxList;
