import React from "react";

const Cardtype2 = (props) => {
  return (
    <div className="card2">
      <span className="title">
        <span style={{color: "#041846",fontWeight:'bold',fontFamily:'Cantarell',fontSize: '20px',lineHeight: '35px'}}>Project : {props.index}</span>
        <span>{props.text}</span>
        <span style={{color: "maroon",fontSize: '16px',lineHeight: '25px'}}>{props.lang}</span>
      </span>
      
    </div>
  );
};

export default Cardtype2;
