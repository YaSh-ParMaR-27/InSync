import React from 'react'
import './SmallTextDesign.css'
import LeftImage from '../assets/sidedesign.svg'
import { FaCheckCircle } from "react-icons/fa";

export default function SmallTextDesign() {
  return (
    <>
        <div className="smallTextDesignContainer">
            <div className="leftImg">
                <img src={LeftImage} alt="" />
            </div>

            <div className="centerText">
                <div className="textwithicon_container">
                    <div className='textwithicon'>
                        <FaCheckCircle size={20} color='green'/>
                        <h2>Quick</h2>
                    </div>
                    <div className='textwithicon'>
                        <FaCheckCircle size={20} color='green'/>
                        <h2>Safe</h2>
                    </div>
                    <div className='textwithicon'>
                        <FaCheckCircle size={20} color='green'/>
                        <h2>Easy</h2>
                    </div>
                    <div className='textwithicon longtext'>
                        <FaCheckCircle size={20} color='green'/>
                        <h2>No engagement</h2>
                    </div>
                </div>
                <p>Your files remain private, secure and can be deleted instantly from your personal page.</p>
            </div>
        </div>
    </>
  )
}
