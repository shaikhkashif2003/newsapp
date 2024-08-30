import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, date, author, source, darkMode } = props;

    return (
      <div className="my-3"  >
        <div className={`card text-${darkMode==='dark'? 'light' : 'black'} bg-${darkMode==='dark' ? 'dark' : 'white'}`} style={{ width: "20rem", height: "30rem" }}>
            <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }} >
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvKB_eY0mCqpsAAMjGMIEqgX05oVTG9kHbQ&s" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-primary" >Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
