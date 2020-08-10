import React, {Component} from 'react';
import './index.css';
import './App'
import {Library} from "./Library";
import ReactDOM, {render}from 'react-dom';

let bookList =
     [{title: "t1", author: "a1", pages: 300},
        {title: "t2", author: "a2", "pages": 300},
        {title: "t3", author: "a3", "pages": 300},
        {title: "4", author: "a4", "pages": 300},
        {title: "b5", author: "a5", "pages": 300},
        {title: "b6", author: "a6", "pages": 300}]


class FavoriteColorForm extends Component {
    state = {value: ''}
    newColor = e => this.setState({
        value: e.target.value
    })

    submit = e  => {
        console.log(`new Color: ${this.state.value}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Color:
                <input type="color" onChange={this.newColor}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}


render(

   <Library books = {bookList}/>,
   //  <FavoriteColorForm/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();