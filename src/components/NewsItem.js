// import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date,  } = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <img
//             src={
//               !imageUrl
//                 ? "https://images.axios.com/VwJ4dNyrrL8L9Ozb4xVcFU558ng=/0x0:8192x4608/1366x768/2025/06/12/1749768228577.jpg"
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h4 className="card-title">
//               {title}
//               <h5>
//                 Example heading <span className="badge text-bg-secondary">New</span>
//               </h5>
//             </h4>
//             <p className="card-text">{description}</p>
//             <p className="card-text">
//               <small className="text-muted">
//                 By {!author ? "Unknown" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;


import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date,  } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://images.axios.com/VwJ4dNyrrL8L9Ozb4xVcFU558ng=/0x0:8192x4608/1366x768/2025/06/12/1749768228577.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">
              {title}
              <h5>
                Example heading <span className="badge text-bg-secondary">New</span>
              </h5>
            </h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
