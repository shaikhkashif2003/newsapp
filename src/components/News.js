import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps={
    county: 'in',
    pageSize: 3,
    category: 'general',
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1    //articles contents on page set default at page 1 
    }
  }

  async componentDidMount(){
    console.log("Hello in DidMount from News Component");
    let url=`https://newsapi.org/v2/top-headlines?county=${this.props.county}&category=${this.props.category}&apiKey=7cceb152b90f4af98b415c5a3334a10a&page=1&pageSize=${this.props.pageSize}`; //api url
    this.setState({loading: true});
    let data = await fetch(url);  //fetching api
    let parsedData = await data.json(); // data converted into json file
    console.log(parsedData)
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults, 
      loading: false})    //adding data with article array from the fatch api and total resuls of data
  }
  //previous Button Logic
  handlePrevClick = async ()=>{
    console.log("Previous")
    let url=`https://newsapi.org/v2/top-headlines?county=${this.props.county}&category=${this.props.category}&apiKey=7cceb152b90f4af98b415c5a3334a10a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});  //changing state of loading too show spinner until data fatched from api server 
    let data = await fetch(url);  //fetching api
    let parsedData = await data.json(); // data converted into json file
    this.setState({     //Changing page state
      page: this.state.page - 1, //changing page
      articles: parsedData.articles,   //setting article State
      loading: false
    })
  }

  //Next Button Logic
  handleNextClick = async ()=>{

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {      //how many pages required to show the data 
      // console.log("No More Pages");
      let url=`https://newsapi.org/v2/top-headlines?county=${this.props.county}&category=${this.props.category}&apiKey=7cceb152b90f4af98b415c5a3334a10a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});  //changing state of loading too show spinner until data fatched from api server 
      let data = await fetch(url);  //fetching api
      let parsedData = await data.json(); // data converted into json file
      
      this.setState({     //Changing page state
        page: this.state.page + 1, //changing page
        articles: parsedData.articles, //setting article State
        loading: false
      })
  }
}


  render() {

    const {darkMode} = this.props;
    
    return (
      <div className={`container my-3 text-${darkMode ?'light':'black'}`} >
        <h1 className="text-center" style={{margin: "30px 0px"}} >NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{    //if loading is true so dont display the data on page
          return(
          <div className="col-md-4" key={element.url} >
              <NewsItem darkMode={darkMode} title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url} />
          </div>
        )
      })}
      </div>
      <div className="container d-flex justify-content-between ">
      <button type="button" disabled={this.state.page<=1} className="btn btn-secondary mx-3" onClick={this.handlePrevClick} >&larr; Previous</button>
      <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} className="btn btn-primary mx-3" onClick={this.handleNextClick} >Next &rarr; </button>
      </div>
      </div>
    )
  }
}

export default News
