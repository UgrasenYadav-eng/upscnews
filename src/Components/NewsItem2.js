import React, { Component } from 'react'

export default class NewsItem2 extends Component {
  render() {
    return (
      <div>
            <div div className="card" style= {{width: "18rem"}}>
                    <img src={imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}... </p>
                        <p>Source-{Source}</p>
                        <a href={Detail} className="btn btn-primary">Detail...</a>
                        <p>Source_Two-{Source_Two}</p>
                        <a href={Detail_Two} className="btn btn-primary">Detail_Two...</a>
                    </div>
            </div>
        
      </div>
    )
  }
}
