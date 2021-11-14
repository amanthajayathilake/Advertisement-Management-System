import './App.css';
import axios from "axios";
import {useEffect,useState} from "react";

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response)=>{
      setListOfPosts(response.data);
    });
  }, []);

  return <div className="App">
    {listOfPosts.map((value,key) => {
      return (
      <div classname="post">
        <div className="post-title"> {value.title}  </div>
        <div className="post-body"> {value.postText} </div>
        <div className="post-footer"> {value.username} </div>
      </div>);
    })}
  </div>
}

export default App;
