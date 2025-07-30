import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">

        {/* Background Video directly in App.js */}
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source src="/bg-video.mp4" type="video/mp4" />
            <source src="/path/to/your/video.webm" type="video/webm" />
          </video>
        </div>

        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
