// import React from "react";
// import ReactDOM from "react-dom/client";
// console.log("Abhishek Mhara");
// var data = [1, 2, 4, 5, 3, 2, 3, 354, 4443, 3466];
// var triple = data.map((item) => item * 3);
// console.log(triple);

// const parent = React.createElement("div", { id: "parnt" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I am an element"), ("h2", {}, "I am a h2 element")]),
// React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am child2 h1"), ("h2", {}, "I am child2 h2")])
// ])
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const jsxElement= <h1 id="heading">This is a jsx element</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement);

//Functional component
// const FunctionalComponent=()=>{
//    return (<h1>Namaste Funtional component</h1>);
// }
// const FunctionalComponent=()=>(
//     <h1 className="heading" >Namaste React Functional component</h1>
// )

// const title =(
//     <h1 className="title" tabIndex="4">This is title component</h1>
// )
// const Title1 =()=>{
//     return <div>
//         <h1 className="title" tabIndex="4">This is title component</h1>
//     </div>
// }
// const Titali=() =>(
//     <h1 className="titali" tabIndex="4">This is titali component</h1>
// )
//when 1 or more components are inside the other components that is called component composition
// const FunctionalComponent=()=>{
//     return (
//     <><h1>Namaste Funtional component</h1>;
//      <title/>
//      </>
//     );
//  }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunctionalComponent />);

//  writing jsx inside jsx
// const span=<span>This is span</span>
// const FunctionalComponent = () => {
//   return (
//   <div className="functional">
//  {Titali()}
//  {title}
//   <Title1/>
//   <h1>{2323+43523-5320}</h1> 
//   {span}
//   </div>
// )
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunctionalComponent />);
//both are valid syntax
