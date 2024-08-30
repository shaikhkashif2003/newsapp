import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capatilizedFirstLetter(props.category)}-NewsMonkey `;

  const capatilizedFirstLetter = (string) => {
    return props.category.charAt(0).toUpperCase() + props.category.slice(1);
  }



  const updateNews = async () => {
    props.setProgress(10); //initial value of progress for top loader 
    let url = `https://newsapi.org/v2/top-headlines?county=${props.county}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; //api url
    setLoading(true);
    let data = await fetch(url);  //fetching api
    props.setProgress(30);
    let parsedData = await data.json(); // data converted into json file
    console.log(parsedData)   //data will be shown on console log after maping from api 
    props.setProgress(70);
    setArticles(parsedData.articles);   //adding data with article array from the fatch api and total resuls of data
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);  //value of progress for top loader after data fatched 
  }

  useEffect(() => {
    updateNews();
  }, [])

  // //previous Button Logic
  // const handlePrevClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // }

  // //Next Button Logic
  // const handleNextClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // }

  //fatching data with url in infinite scroll
  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?county=${props.county}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; //api url
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const { darkMode } = props;

  return (
    <div className={`container my-3 text-${darkMode==='dark' ? 'light' : 'black'}`} >
      <h1 className="text-center" style={{ margin: "30px 0px" }} >NewsMonkey - Top {capatilizedFirstLetter(props.category)} Headlines</h1>
      {/* {loading && <Spinner />} */}

      <InfiniteScroll     //setup infinite scrolling 
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}>

        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {    //if loading is true so dont display the data on page
              return (
                <div className="col-md-4" key={element.url} >
                  <NewsItem darkMode={props.darkMode} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name} author={element.author} />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between ">
          <button type="button" disabled={page <= 1} className="btn btn-secondary mx-3" onClick={handlePrevClick} >&larr; Previous</button>
          <button type="button" disabled={(state.page + 1 > Math.ceil(state.totalResults / props.pageSize))} className="btn btn-primary mx-3" onClick={handleNextClick} >Next &rarr; </button>
        </div> */}
    </div>
  )
}

News.defaultProps = {
  county: 'in',
  pageSize: 3,
  category: 'general',
  totalResults: 0,
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
