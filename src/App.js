
// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   // render method means to run 
//   // render method is livecycle method . when react loads an component than some series of methods run
//   pageSize = 6;
//   apiKey = process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }
//   setProgress =(progress)=>{
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//      <Navbar />
//      <LoadingBar
//      height={3}
//         color="#f11946"
//         progress={this.state.progress}
//       />
//      {/* <News pageSize={this.pageSize} country="us" category="general" /> */}
//      < Routes>
//             <Route exact path='/' element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
//             <Route exact path='/business' element ={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
//             <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
//             <Route exact path='/general' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
//             <Route exact path='/health' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="us" category="health" />} />
//             <Route exact path='/science' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="us" category="science" />} />
//             <Route exact path='/sports' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
//             <Route exact path='/technology' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          

//       </ Routes> 
//      </Router>
//       </div>
//     )
//   }
// }







import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  // render method means to run 
  // render method is livecycle method . when react loads an component than some series of methods run


    const [progress, setProgress] = useState(0)
    
    const [pageSize] = useState(6)
    const [apiKey] = useState(process.env.REACT_APP_NEWS_API)
    
    // setProgress(progress)
  
  
    return (
      <div>
        <Router>
     <Navbar />
     <LoadingBar
     height={3}
        color="#f11946"
        progress={progress}
      />
     {/* <News pageSize={pageSize} country="us" category="general" /> */}
     < Routes>
            <Route exact path='/' element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/business' element ={<News  setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path='/entertainment' element={<News  setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path='/general' element={<News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path='/health' element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route exact path='/science' element={<News  setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route exact path='/sports' element={<News  setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path='/technology' element={<News  setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="us" category="technology" />} />
          

      </ Routes> 
     </Router>
      </div>
    )
  }

export default App