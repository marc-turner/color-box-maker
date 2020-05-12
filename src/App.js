import React from 'react';
import BoxList from './BoxList';

function App() {
    return (
        <div style={appStyle}>
            <BoxList />
        </div>
    );
}

const appStyle = {
    textAlign: 'center',
};

export default App;
