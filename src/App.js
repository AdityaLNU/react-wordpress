
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {

  const [data, setData] = useState();

  const apiCalling = async () => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_API_URL
    }
    const res = await axios.request(options);
    setData(res.data.posts);
    console.log(res.data.posts)

  }

  useEffect(() => {
    apiCalling();
  }, [])
  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1> React WordPress example </h1>
      {data ? data.map(e => {
        return (
          <div style={{ margin: "20px", borderBottom:"2px solid grey", paddingBottom:"10px", width:"50%" }}>
            <span style={{ margin: "10px" }}>{e.title}</span>
            <span><em>by {e.author.name}</em> </span><br/><br/>
            <button style={{ border: "1.5px solid black", borderRadius:"3px", backgroundColor: "white" }}><a target="_blank" href={`${e.URL}`} style={{textDecoration: "none", color: "black"}}><b>Read More</b></a></button>

          </div>
        )
      }) : "Yet to recieve"}
    </div>
  );
}

export default App;
