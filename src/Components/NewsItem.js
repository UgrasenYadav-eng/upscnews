import React, { Component } from 'react'

export class NewsIteam extends Component {
    render() {
        let {title, discription, imageURL, Source, Detail}= this.props;
        return(
        
                <div div className="card" style= {{width: "18rem"}}>
                    <img src={imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}... </p>
                        <p>Source-{Source}</p>
                        <a href={Detail} className="btn btn-primary">Detail...</a>
                    </div>
                    </div>
                    
        )
    }
}
export default NewsIteam

