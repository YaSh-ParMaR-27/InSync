import React from 'react'

//icons
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFaceSmile } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";

//css
import './Cards.css'

export default function Cards() {
  return (
    <>
        <div className="cards_container">
            <div className="cards">
                <AiFillSafetyCertificate size={'30px'} color='rgb(69, 127, 201)'/>
                <h2>Safe</h2>
                <p>Rest assured and relax. <br /> All your PDF files are encrypted and stored securely on our servers.</p>
            </div>

            <div className="cards special">
                <FaFaceSmile size={'30px'} color='#017547b1'/>
                <h2>Easy</h2>
                <p>No need to be a computer wiz to use Edit PDFs, our editing tools are easy and accessible to everyone.</p>
            </div>

            <div className="cards">
                <BsTools size={'30px'} color='orange'/>
                <h2>All in One</h2>
                <p>All the tools you need, in one place. Say goodbye to unnecessary back-and-forths and save precious time.</p>
            </div>
        </div>
    </>
  )
}
