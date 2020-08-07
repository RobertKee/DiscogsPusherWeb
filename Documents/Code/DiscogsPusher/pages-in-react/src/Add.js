import React, {useState} from 'react';
import './App.css';

function Add() {
    const [inputSent, setInputSent] = useState(false)
    const [matchFound, setMatchFound] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

return (
    <div>
        <p>You can enter the ID number of the record or the whole discogs URL here.</p>
<input
      type="text"
      // value={this.state.value}
      // onChange={this.handleAddChange}
   />
   <br />
   <br />
   <button onClick={handleButtonClick}>Add</button>

{modalOpen && 
    <div className="Modal Header">
    <h1>Add to Alert List?</h1>
    <p>ARTIST NAME</p>
    <p>ALBUM NAME</p>
    <p>ALBUM ART</p>
    <button onClick={() => setModalOpen(false)}>YES</button>
    <button onClick={() => setModalOpen(false)}>NO</button>
  </div>
  }
    </div>
)

function handleButtonClick() {
    //check for discogs id
    //check if url
    //parse url
    
    //bad input
    //throw up reject screen

    //send id
    setInputSent(true)
    //go to api return function
    apiHandler(readyId)
}

function apiHandler(readyId) {
    console.log(readyId)
}

}

export default Add