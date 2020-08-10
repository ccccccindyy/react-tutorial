import React, {Component} from 'react';
import ReactDOM, {render}from 'react-dom';
import './index.css';
import './App'
import * as serviceWorker from './serviceWorker';

let bookList = [
    {title: "t1", author: "a1", pages:300},
    {title: "t2", author: "a2", "pages":300},
    {title: "t3", author: "a3", "pages":300},
    {title: "4", author: "a4", "pages":300},
    {title: "b5", author: "a5", "pages":300},
    {title: "b6", author: "a6", "pages":300}
]


    const Book = ({title = "t", author =" a", pages = 55, freeBookmark}) => {

    return (
        <section>
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>Free bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
    }

    const Hiring = ({number}) => {
    return (
           <p> The library is hiring {number} people, Go to www.c for more</p>
    )

    }

const NotHiring = () => {
    return (
        <p> The library is not hiring, fuck you</p>
    )

}

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
class Library extends Component {

    static defaultProps = {
        books: [{"title": "Tahoe Tiles", "author": "a"}]

    }
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    state = {open: false, freeBookmark: true, data:[], hiring: true, loading: false}

    toggleLibrary=() => {
        this.setState(previousState => ({
            open: !previousState.open
        }))
    }
    toggleFreeBookMark =() => {
       this.setState(previousState => ({
               freeBookmark: !previousState.freeBookmark
           }
       ))
    }
    changeHiringStatus = () => {
       this.setState( previousState => ({
           hiring: !previousState.hiring
       }))
    }
    render() {
        const {books} = this.props
        return (
            <section>
                <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                {this.state.hiring ? <Hiring number={5}/> : <NotHiring/>}
                {this.state.loading ?  <h1 key="loading">"loading..." </h1>: <div>{
                    this.state.data.map(product => {
                        return (
                            <div key = {product.id}>
                                <h3>Library Product of the week!</h3>
                                <h4>{product.name}</h4>
                                <img alt = {product.name} src = {product.image} height={100}/>
                            </div>
                        )
                    })
                }</div>}
                <button onClick={this.toggleLibrary}>Change Status</button>
                <button onClick={this.changeHiringStatus}>Change HiringStatus</button>
                {books.map((book, i ) => (<><Book key = {i} title = {book.title} author={book.author} pages={book.pages}
                freeBookmark = {this.state.freeBookmark}/>
                    <button onClick={this.toggleFreeBookMark}>freebookmark?</button>
                </>))
                }

            </section>
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