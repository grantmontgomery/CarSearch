import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ""}
    }

    inputChange(event){
    }
    inputClick(){
    }
    onFormSubmit(event){
        event.preventDefault()
        this.props.onSubmit(this.state.term)

    }
    render() { 
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                    <label htmlFor="">Image Search</label>
                    <input type="text" onClick = {this.inputClick} value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
          );
    }
}
 
export default SearchBar;