// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 8,
//     category: "general ",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   captializeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     // this is state method in class based component
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.captializeFirstLetter(
//       props.category
//     )} - NowPress`;
//   }

//   UpdateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//      props.setProgress(30);
//     let parsedData = await data.json();
//      props.setProgress(70);

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100);
//   };

//   async componentDidMount() {
//     //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84b9c2be9f454c28bfd22e618784fccf&pageSize=${props.pageSize}`;
//     //  this.setState({loading: true});
//     //  let data = await fetch(url);
//     //  let parsedData = await data.json()
//     //  console.log(parsedData);
//     //  this.setState({articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //     loading: false})

//     this.UpdateNews();
//   }

//   // handlepreviousClick = async () => {
//   //     console.log("prev")
//   //          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84b9c2be9f454c28bfd22e618784fccf&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//   //             this.setState({loading: true});
//   //    let data = await fetch(url);
//   //    let parsedData = await data.json()
//   //    console.log(parsedData);

//   //     this.setState({
//   //       page: this.state.page - 1,
//   //       articles: parsedData.articles,
//   //       loading: false

//   //     })
//   //   this.setState({ page: this.state.page - 1 });
//   //   this.UpdateNews();
//   // };
//   // handleNextClick = async () => {
//   //     console.log("next")
//   //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

//   //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=84b9c2be9f454c28bfd22e618784fccf&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//   //     this.setState({loading: true});
//   //    let data = await fetch(url);
//   //    let parsedData = await data.json()

//   //     this.setState({
//   //       page: this.state.page + 1,
//   //       articles: parsedData.articles,
//   //       loading: false
//   //     })
//   //      }
//   //   this.setState({ page: this.state.page + 1 });
//   //   this.UpdateNews();
//   // };

//   fetchMoreData = async () => {

//     this.setState({page: this.state.page + 1})
//    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center">
//           NowPress - Top {this.captializeFirstLetter(props.category)}{" "}
//           Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">

        
//           <div className="row">
//             {this.state.articles.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title.slice(0, 45) : ""}
//                     description={
//                       element.description
//                         ? element.description.slice(0, 88)
//                         : ""
//                     }
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//             </div>
//         </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlepreviousClick}
//           >
//             {" "}
//             &larr; previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       </>
//     );
//   }
// }

// export default News;








import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const captializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const UpdateNews = async  () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
   
    setLoading(true)
    let data = await fetch(url);
     props.setProgress(30);
    let parsedData = await data.json();
     props.setProgress(70);

     setArticles(parsedData.articles)
     setTotalResults(parsedData.totalResults)
     setLoading(false)

    props.setProgress(100);
  };


  useEffect(()=>{   
    document.title = `${captializeFirstLetter(props.category)} - NowPress`;
    UpdateNews();
    // eslint-disable-next-line
  }, [])

  



  const fetchMoreData = async () => {

     
 
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center"> NowPress - Top {captializeFirstLetter(props.category)}Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
            </div>
        </InfiniteScroll>
        
      </>
    );
  
}

  News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general ",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
