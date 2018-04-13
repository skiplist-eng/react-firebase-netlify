import React, { Component } from 'react';

class ChordEditor extends Component {
    constructor(props) {
        super(props);
        this.state =  { year: new Date().getFullYear() };
    }

    render() {
        return (
            <h3>Editor</h3>
        );
    }
}

export default ChordEditor;
