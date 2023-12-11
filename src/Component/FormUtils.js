import React, {useState} from 'react'

export default function FormUtils(props) {
    const [text, setText] = useState('enter text here');
    const [serachText, setSerachText] = useState('enter search word');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase has been enabled","success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("lower has been enabled","success")
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("clear text area has been enabled","success")
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleSearchChange = (event)=>{
        setSerachText(event.target.value);
    }

    const handleWordCountClick = ()=>{
        let i = 0;
        let arr = text.split(" ");
        arr.forEach(element => {
            if(serachText == element){
                i++;
            }
        });
        setSerachText(i);
        
    }

    const linkColor = {
        color: props.mode=="light" && props.redMode=="light"?"black": props.redMode=="danger" ? "white" : "white"
    }
    
  return (
    <>
    <h1 style={linkColor}>Summary to analyze the text</h1>
    <div>
    <textarea name="textarea" value={text} id="textarea" onChange={handleOnChange} cols="100" rows="8" style={{color: props.mode=="light" && props.redMode=="light"?"black": props.redMode=="danger" ? "white" : "white", backgroundColor: props.mode=="light" && props.redMode=="light"?"white": props.redMode=="danger" ? "grey" : "grey", border: props.mode=="dark"?"2px solid white":"2px solid black"}}></textarea>
    </div>
    <button onClick={handleUpClick} className={`btn ${props.mode=="light" && props.redMode=="light"?"btn-primary": props.redMode=="danger" ? "btn-danger" : "btn-dark"} mx-2`}>convert to upperCase</button>
    <button onClick={handleLoClick} className={`btn ${props.mode=="light" && props.redMode=="light"?"btn-primary": props.redMode=="danger" ? "btn-danger" : "btn-dark"} mx-2`}>convert to lowerCase</button>
    <button onClick={handleClearClick} className={`btn ${props.mode=="light" && props.redMode=="light"?"btn-primary": props.redMode=="danger" ? "btn-danger" : "btn-dark"} mx-2`}>Clear</button>
    <input type="text" name="specificWordCount" value={serachText} onChange={handleSearchChange} id="search" style={{padding: "5px", margin: "10px", color: props.mode=="black"?"white":"black"}} />
    <button onClick={handleWordCountClick} className={`btn ${props.mode=="light" && props.redMode=="light"?"btn-primary": props.redMode=="danger" ? "btn-danger" : "btn-dark"} mx-2`}>specificWordCount</button>
    <div style={linkColor}>
        {text.split(" ").length} words and {text.length} characteres
    </div>
    <div style={linkColor}>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
