import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, url, darkMode} = this.props;
    return (
      <div className="my-3" style={{textAlign: "-webkit-center"}} >
        <div className={`card text-${darkMode ? 'light' : 'black'} bg-${darkMode ? 'dark' : 'white'}` } style={{width: "20rem", height: "30rem" }}>
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvKB_eY0mCqpsAAMjGMIEqgX05oVTG9kHbQ&s":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-primary" >Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
