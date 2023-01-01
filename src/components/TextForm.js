import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleDownClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    
    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }

    const handleOnChange = (event) => {
        // console.log("Uppercase was clicked");
        setText(event.target.value)
    }

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/); //regex in JS
        setText(newtext.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1 className="my-4">{props.heading}</h1>
           <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'#13466e':'white', color : props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
           </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}> Convert to LowerCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra spaces </button>

        </div>
        <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  {text.length} charaters</p>
            <h2>Preview</h2>
            <p> {text.length>0?text:"Write something to preview"} </p>
        </div>
        </>
    )
}

