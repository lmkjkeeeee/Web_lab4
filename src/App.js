import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'Привіт, це повідомлення з React!',
            isVisible: false,
        };
    }

    toggleMessage = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible,
        }));
    };

    render() {
        return (
            <div className="container">
                <h2>Лабораторна робота №4</h2>
                <button className="btn" onClick={this.toggleMessage}>
                    {this.state.isVisible ? 'Приховати текст' : 'Показати текст'}
                </button>
                {this.state.isVisible && <p className="message">{this.state.text}</p>}
            </div>
        );
    }
}

export default App;
