import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

function Registry() {
  const [registryData,setRegistryData]=useState([])
  var [textInput,setTextInput]=useState("")
  const [error,setError]=useState(false);

  useEffect(()=>{
    if(textInput.length>10) setError(true);
    else setError(false);
  },[textInput])

  const addItem=(e)=>{
    e.preventDefault();

    const tempData=[...registryData];
    tempData.push(textInput);
    setRegistryData(tempData);
    setTextInput="";
  }

  const removeItem=(index)=>{
    const data=[...registryData];
    data.splice(index,1);
    setRegistryData(data);
  }

  const editItem=(index)=>{
    if(error)return;
    let dataSet=[...registryData];
    dataSet[index]=textInput;
    setRegistryData(dataSet);
  }
    

  return (
    <div className='registeration'>
        <h2>Registry</h2>
        <Link to="/" style={{
          color: "white",
        }}>Click here to go Home</Link>
        <form onSubmit={addItem}>
          <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value)} />
          <input type="submit" value="submit" />
        </form>
        {error?<span style={{color: "red"}}>Error occured.</span>:null}
        {
          registryData.map((item,index)=>{
            return <li key={index}> {item} <span><button onClick={()=>removeItem(index)}>Remove</button><button onClick={()=>editItem(index)}>Update</button></span></li>
          })
        }
    </div>
  )
}

export default Registry