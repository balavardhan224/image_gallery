import React,{useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App=()=>{
  const[search,setSearch]=useState("");
  const[data,setData]=useState([]);

  const changeHandler = e=>{
    setSearch(e.target.value);
  }


  const submitHandler=e=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).
    then(res=>setData(res.data.photos.photo))
   
  }

  return (
    <div>
      <center>
        <br/>
        <h1>Image gallery</h1>
       <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={changeHandler}/> <br/> <br/>
        <input type="submit"  name='search'/>
       </form>
       {data.length>1?<Gallery data={data}/>:<h1>no data</h1>}
     </center>
    </div>
  );
}

export default App;
