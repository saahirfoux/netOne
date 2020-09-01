import React from 'react';
 
function SubText() {
  return <Body />;
}
 
function Body() {
  const footer = '*Please provide at least 4 of the 7 documents listed. The more documents provided, the better your chances of being qualified as an IC.';
 
  return <span className="footer">{footer}</span>;
}

export default SubText;