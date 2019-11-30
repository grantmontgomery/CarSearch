import React, { Component } from 'react';


class Image extends Component {
    constructor(props){
        super(props)
        this.state = {spans: 0}
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height/150)

        this.setState({spans})

    }

    render() { 
        const {url, alt} = this.props
        return ( 
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src= {url} alt={alt}/>
            </div>
         );
    }
}
 
export default Image;