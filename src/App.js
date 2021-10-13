import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

// fs.writeFile('/test.txt', 'Cool, I can do this in the browser!', function(err) {
//   fs.readFile('/test.txt', function(err, contents) {
//     console.log(contents.toString());
//   });
// });


export default App;
