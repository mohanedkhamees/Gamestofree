import { useState } from 'react'
import {Configuration,OpenAIApi} from "openai"
import './App.css'
import { InputBox } from './InputBox'



function App() {
  const [userPromot, setUserPromot] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

const configuration = new Configuration({
 
  apiKey: import.meta.env.VITE_OPEN_AI_Key,
   
});

const openai = new OpenAIApi(configuration);

const generateimage = async ()=> {
  const res =await openai.createImage({
    prompt: "cat",
    n: 1,
    size: "256x256",
  
  })
  
  const urlData = res.data.data[0].url;
  console.log(urlData);
}
  return (
    <main className="App">  
      <div className='Title'>
        <h1>Mohaned AI</h1>
        <h2>Image Genreate</h2>
        {imageUrl && <img src={imageUrl} className='image' alt='ai image'></img>}
      </div>
      <InputBox label={'Des '} setprops={setUserPromot}/>
      <InputBox label={'amount '} setprops={setNumber}/>
      <InputBox label={'Size '} setprops={setSize}/>
     <button className='main-button' onClick={generateimage}>Genrate</button>
      
      </main>
      
    
  )
}

export default App
