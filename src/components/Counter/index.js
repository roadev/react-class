import React, { Component } from 'react';
import Button from '../Button';

class Counter extends Component {
    state = {
        count: 0,
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>Counter is: {count}</p>
                <Button
                    onClick={this.onClick}
                    buttonStyle={{ 
                        color: '#ffffff',
                        backgroundColor: 'blue'
                    }}
                >
                    Click me
                    asd
                    <h1>asdas</h1>
                </Button>
            </div>
        );
    }
}

// function Counter() {
//     return (
//         <div>
//             Counter
//         </div>
//     )
// }

// const Counter = () => {
//     return (
//         <div>
//             Counter
//         </div>
//     ) 
// }

// const Counter = () => (
//     <div>
//         Counter
//     </div>
// );

export default Counter;
