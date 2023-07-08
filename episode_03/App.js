 import React from "react";
 import ReactDOM from "react-dom/client";

 // ReactElement is an object =>ReactDOM converts object to HTML Element(Render)
 //jsx (Transpiles before reaches at js engine) -parcel ->Babel

 //JSX=> React.createelement-> js object ->HTML(browser)
 const jsxheading = (
 <h1 className="head" id="heading">React_1.0</h1>);

 //functional Component
const Jsxheading =()=> (
      <h1 className="head" id="heading">This is JSX heading</h1>
      );

 //Functional Component
 const Heading =()=>(
    <>
    <div className="container">
        {<h2>hi</h2>}
        {jsxheading}
        <Jsxheading/>
        <h1>This is a Functional Component</h1>
    </div>
    <div id="container2"></div>
    </>
 );

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<Heading/>);
 
 