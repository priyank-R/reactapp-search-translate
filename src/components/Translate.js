import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const Translate = ()=>{

    const options = [
        {
          label: "Afrikaans",
          value: "af",
        },
        {
          label: "Arabic",
          value: "ar",
        },
        {
          label: "Hindi",
          value: "hi",
        },
      ];
    const [inputText, setInputText ] = useState('hello there!')
    const [Language, setLanguage] = useState(options[0]);


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} ></input>
            </div>
            </div>

            <br></br>

            <Dropdown selected={Language} onSelectedChange={setLanguage} options={options}></Dropdown>

            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={Language} text={inputText}></Convert>
            </div>
    )
}

export default Translate