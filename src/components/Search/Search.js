 import React, { Component} from 'react'
 import {request} from "../../helper"
 import './Search.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    handleInputChange(e){
    
      this.setState({searchValue: e.target.value})
    }
    
    onFormSubmit(e){
        e.preventDefault()
        request({url:`user/search/${this.state.searchValue}`})
        .then((res)=>console.log(res.data))
    }
    
render(){
    return(
        <form className="search-form" onSubmit={this.onFormSubmit.bind(this)}>
            <input className="search-input" type="text" onChange={this.handleInputChange.bind(this)} id="search"/>
            <button className="submit" hidden>Submit</button>
        </form>
    )
    }
}

export default Search