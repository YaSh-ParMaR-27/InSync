import React from 'react'
import './StartPoint.css'
import uploadImg from '../assets/FileUploadDesign_blue.svg'

export default function StartPoint() {

  let changeText = ()=>{
    document.getElementById('Inpbtn').click();
  }

  return (
    <>
        <div className="hometop_container">

            <div className="uploadbox">
                <h1>Your files remain private, secure and safe with Us.</h1>
                <p>Upload your files quickly</p>
                <button  className="btn" onClick={changeText}>Upload a File</button>
                <input id='Inpbtn' type="file"  style={{display:"none"}}/>
            </div>

            <div className="Uploadimg">
                <img src={uploadImg} alt="" />
            </div>
        </div>
    </>
  )
}
