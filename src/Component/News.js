import React, { Component } from 'react'
import Newsitems from './Newsitems'


export class News extends Component {

 articles = [];

  constructor(){
    super();

    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4229f7ae4d6b4331bb0413575f5f9c2e&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})
  }

   handlePrevious = async () =>{
    console.log('previous');
     let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4229f7ae4d6b4331bb0413575f5f9c2e&page=1";
     let data = await fetch(url);
     let parsedData = await data.json();

     this.setState({
         page: this.state.page - 1,
         articles: parsedData.articles
     })
  }

  handleNext = async () => {
    console.log('Next');
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4229f7ae4d6b4331bb0413575f5f9c2e&page=2`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
      <marquee bgcolor="rosybrown" loop="-1" scrollamount="5" width="93%" color='red'>This is Our Top-Headlines Here.You can click the <span>ReadMore button</span> to see the details of that news.</marquee>
       
       <div className="row">
       {this.state.articles.map((element)=>{

        return <div className='col-md-4' key={element.url}>
        <Newsitems title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
       })}
        </div>
        <div className="container2 d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePrevious}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News