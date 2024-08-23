import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "Darius Visser: Samoan cricketer sets new Twenty20 International record with 39 runs in a single over",
        "description": "Samoan cricketer Darius Visser sets a new men's Twenty20 International record when he hit 39 runs in a single over during a 2026 T20 World Cup regional qualifier on Tuesday.",
        "url": "http://www.bbc.co.uk/sport/cricket/articles/ce8dzp5566mo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/3ade/live/d66fee50-5ec6-11ef-b43e-6916dcba5cbf.jpg",
        "publishedAt": "2024-08-20T08:07:23.6869161Z",
        "content": "Samoan cricketer Darius Visser set a new men's T20 International record when he hit 39 runs in a single over during a 2026 T20 World Cup regional qualifier on Tuesday. \r\nThe 28-year-old faced Vanuatu… [+868 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(props) {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    console.log("Hello in DidMount from News Component");
    let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7cceb152b90f4af98b415c5a3334a10a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3" >
        <h1 className="text my-3">NewsMonkey Top Headlines</h1>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return(
          <div className="col-md-4" key={element.url} >
              <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url} />
          </div>
        )
      })}
      </div>
      </div>
    )
  }
}

export default News
