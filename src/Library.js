import React, {Component} from "react";
import {NotHiring} from "./NotHiring";
import {Hiring} from "./Hiring";
import {Book} from "./Book";
import ReactDOM, {render}from 'react-dom';

export class Library extends Component {

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
                        <div key = {product.id}>}
                                <h3>Library Product of the week!</h3>}
                                <h4>{product.name}</h4>}
                                <img alt = {product.name} src = {product.image} height={100}/>}
                           </div>)}
                    )}
                </div>}}
                <button onClick={this.toggleLibrary}>Change Status</button>
                 <button onClick={this.changeHiringStatus}>Change HiringStatus</button>
                {books.map(book => {
                   return (<div><Book title={book.title} author = {book.author}  pages={book.pages} freeBookmark={ this.state.freeBookmark}/>
                   <button onClick={this.toggleFreeBookMark}>Free Book Mark?</button>
                   </div>  )})
                }

            </section>
        )
    }
}

