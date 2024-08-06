import React from 'react';
import './HostingQuestions.css'; // Assuming you will use a separate CSS file for styling

const HostingQuestions = () => {
  return (
    <div className="hosting-questions" style={{position:"relative"}}>
        <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"#00000058"}}></div>
      <div className="text-container">
        <p>Questions</p>
        <p>about</p>
        <p>hosting?</p>
        <button>Ask a Superhost</button>
      </div>
    </div>
  );
};

export default HostingQuestions;
