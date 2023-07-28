import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./styles.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// // import "./styles.css";
// // import React, { useState } from "react";

// // export default function App() {
// //   const [name, setName] = useState({});
// //   var pr;
// //   const [per, setPer] = useState("0");

// //   const [inputStyle, setInputStyle] = useState({
// //     border: "1px solid black", // default style
// //     backgroundColor: "white"
// //   });

// //   const handleTextChange = (event) => {
// //     pr = document.getElementById("per").value;
// //     setPer(pr);
// //     setInputStyle({
// //       display: "none"
// //     });
// //   };
// //   let i = 0;
// //   const adPer = (event) => {
// //     var nm = document.getElementById("nm").value;

// //     const { id, nme } = nm;
// //     setName((prevState) => ({ ...prevState, [i++]: nme }));
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Bills</h1>
// //       <h2>Enter number of Persons</h2>
// //       <input type="number" name="pers" id="per" style={inputStyle} />
// //       <input
// //         type="submit"
// //         value="Enter"
// //         onClick={handleTextChange}
// //         style={inputStyle}
// //       />
// //       <p>Total number of persons is: {per}</p>
// //       <div>
// //         <h3>Enter persons Name:</h3>
// //         <input type="text" name="names" id="nm" />
// //         <input type="submit" value="Add" onClick={adPer} />
// //         <table>
// //           <tr>
// //             {name.map((id, nme) => (
// //               <li key={id}>{name.nme}</li>
// //             ))}
// //           </tr>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // import "./styles.css";
// // import React, { useReducer, useState } from "react";

// // export default function App() {
// //   const [name, setName] = useState([]);
// //   const [amt, setAmt] = useState([0]);
// //   const [prs, setPrs] = useState([]);

// //   // var pr;
// //   const [paidBy, setpaidBy] = useState("");
// //   const [amnt, setAmnt] = useState(0);

// //   // const [inputStyle, setInputStyle] = useState({
// //   //   border: "1px solid black", // default style
// //   //   backgroundColor: "white"
// //   // });

// //   // const handleTextChange = (event) => {
// //   //   pr = document.getElementById("per").value;
// //   //   setPer(pr);
// //   //   setInputStyle({
// //   //     display: "none"
// //   //   });
// //   // };
// //   var i = 1,
// //     j = 1;

// //   const adPer = (event) => {
// //     var nm = document.getElementById("nm").value;

// //     setName((prevState) => [...prevState, nm]);
// //     document.getElementById("nm").value = "";
// //   };

// //   let pa;
// //   let at;
// //   const split = (event) => {
// //     at = parseInt(document.getElementById("amt").value);
// //     pa = document.getElementById("who").value;
// //     console.log(at);
// //     // var c=number(at);
// //     setpaidBy(pa);
// //     setAmnt(at);
// //   };
// //   console.log(at);

// //   var k = 0;
// //   const chck = (event) => {
// //     const value = event.target.value;
// //     console.log(prs);
// //     if (event.target.checked) {
// //       setPrs([...prs, value]);
// //     } else {
// //       setPrs(prs.filter((val) => val !== value));
// //     }
// //   };

// //   // const chck = (event) => {
// //   //   const value = event.target.value;
// //   //   if (event.target.checked) {
// //   //     setPrs([...prs, value]);
// //   //   } else {
// //   //     setPrs(prs.filter((val) => val !== value));
// //   //   }
// //   // };
// //   let ln = prs.length;

// //   const splitExpense = (paidBy, amnt, prs) => {
// //     // var amnt = document.getElementById("amt").value;
// //     // var paidBy = document.getElementById("who").value;
// //     const share = amnt / ln;
// //     console.log(amnt);
// //     console.log(share);
// //     var mt = (amt[name.indexOf(prs)] += share);
// //     setAmt(
// //       mt
// //       // return prs.reduce(
// //       // (amt, prs) => {
// //       //   if (prs !== paidBy) {
// //       //   }
// //       //   return amt;
// //       // },
// //       //   [...prevAmt];
// //       // );
// //     );
// //     console.log(mt);
// //     j += 1;
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Bills</h1>
// //       <h2>Add Persons</h2>
// //       {/* <input type="number" name="pers" id="per" style={inputStyle} />
// //       <input
// //         type="submit"
// //         value="Enter"
// //         onClick={handleTextChange}
// //         style={inputStyle}
// //       />
// //       <p>Total number of persons is: {per}</p> */}
// //       <div>
// //         <h3>Enter persons Name:</h3>
// //         <input type="text" name="names" id="nm" />
// //         <input type="submit" value="Add" onClick={adPer} />
// //         <table>
// //           <tbody>
// //             {name.map((nme, index) => (
// //               <tr key={index}>
// //                 <td>
// //                   {i++}. {nme}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //       <div>
// //         <h2>Expenses: {j}</h2>
// //         <h5>Ammount:</h5>
// //         <input type="number" name="amount" id="amt" onChange={split} />
// //         {/* <br /> */}
// //         <h4>Whos paid this</h4>
// //         <select value={paidBy} id="who" onChange={split}>
// //           {name.map((nme, index) => (
// //             <option key={index} value={nme}>
// //               {nme}
// //             </option>
// //           ))}
// //         </select>
// //         <div>
// //           <h4>Who was available during this expense:</h4>
// //           {name.map((nme, index) => (
// //             <label key={index}>
// //               <input type="checkbox" value={nme} onChange={chck} />
// //               {nme}
// //             </label>
// //           ))}
// //           <h3>available persons were:</h3>
// //           {name
// //             .filter((nme) => prs.includes(nme))
// //             .map((prso, index) => (
// //               <p key={index}>{prso}</p>
// //             ))}
// //         </div>
// //         <input
// //           type="submit"
// //           name="sbt"
// //           id="sbmt"
// //           value="Split"
// //           onClick={splitExpense}
// //         />
// //         {amt &&
// //           amt.map((amt, index) => (
// //             <p>
// //               <label key={index}>{amt}</label>
// //               <br />
// //             </p>
// //           ))}
// //         {/* <p> {pr}</p> */}
// //       </div>
// //     </div>
// //   );
// // }

// // import "./styles.css";
// // import React, { useState } from "react";

// // export default function App() {
// //   const [name, setName] = useState({});
// //   var pr;
// //   const [per, setPer] = useState("0");

// //   const [inputStyle, setInputStyle] = useState({
// //     border: "1px solid black", // default style
// //     backgroundColor: "white"
// //   });

// //   const handleTextChange = (event) => {
// //     pr = document.getElementById("per").value;
// //     setPer(pr);
// //     setInputStyle({
// //       display: "none"
// //     });
// //   };
// //   let i = 0;
// //   const adPer = (event) => {
// //     var nm = document.getElementById("nm").value;

// //     const { id, nme } = nm;
// //     setName((prevState) => ({ ...prevState, [i++]: nme }));
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Bills</h1>
// //       <h2>Enter number of Persons</h2>
// //       <input type="number" name="pers" id="per" style={inputStyle} />
// //       <input
// //         type="submit"
// //         value="Enter"
// //         onClick={handleTextChange}
// //         style={inputStyle}
// //       />
// //       <p>Total number of persons is: {per}</p>
// //       <div>
// //         <h3>Enter persons Name:</h3>
// //         <input type="text" name="names" id="nm" />
// //         <input type="submit" value="Add" onClick={adPer} />
// //         <table>
// //           <tr>
// //             {name.map((id, nme) => (
// //               <li key={id}>{name.nme}</li>
// //             ))}
// //           </tr>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // import "./styles.css";
// // // import React, { useReducer, useState } from "react";
// // import Main from "./main";

// // export default function App() {
// //   // const [name, setName] = useState([]);
// //   // var [amt, setAmt] = useState([0]);
// //   // const [prs, setPrs] = useState([]);

// //   // // var pr;
// //   // const [paidBy, setpaidBy] = useState("");
// //   // const [amnt, setAmnt] = useState(0);

// //   // // const [inputStyle, setInputStyle] = useState({
// //   // //   border: "1px solid black", // default style
// //   // //   backgroundColor: "white"
// //   // // });

// //   // // const handleTextChange = (event) => {
// //   // //   pr = document.getElementById("per").value;
// //   // //   setPer(pr);
// //   // //   setInputStyle({
// //   // //     display: "none"
// //   // //   });
// //   // // };
// //   // var i = 1,
// //   //   j = 1;

// //   // const adPer = (event) => {
// //   //   var nm = document.getElementById("nm").value;

// //   //   setName((prevState) => [...prevState, nm]);
// //   //   document.getElementById("nm").value = "";
// //   // };

// //   // let pa;
// //   // var at;
// //   // const split = (event) => {
// //   //   at = parseInt(document.getElementById("amt").value);
// //   //   pa = document.getElementById("who").value;
// //   //   console.log(typeof at);
// //   //   // var c=number(at);
// //   //   setpaidBy(pa);
// //   //   setAmnt(at);
// //   // };

// //   // var k = 0;
// //   // const chck = (event) => {
// //   //   const value = event.target.value;
// //   //   console.log(prs);
// //   //   if (event.target.checked) {
// //   //     setPrs([...prs, value]);
// //   //   } else {
// //   //     setPrs(prs.filter((val) => val !== value));
// //   //   }
// //   // };

// //   // // const chck = (event) => {
// //   // //   const value = event.target.value;
// //   // //   if (event.target.checked) {
// //   // //     setPrs([...prs, value]);
// //   // //   } else {
// //   // //     setPrs(prs.filter((val) => val !== value));
// //   // //   }
// //   // // };
// //   // let ln = prs.length;

// //   // const splitExpense = () => {
// //   //   var amnt = document.getElementById("amt").value;
// //   //   var paidBy = document.getElementById("who").value;
// //   //   const share = amnt / ln;
// //   //   var mt = [{ prs: paidBy, amt: (amt += share * (ln - 1)) }];
// //   //   // console.log(prs);
// //   //   prs.forEach((per) => {
// //   //     if (per !== paidBy) {
// //   //       mt = [...mt, { prs: per, amt: (amt += -share) }];
// //   //     }
// //   //   });
// //   //   setAmt(mt);
// //   //   console.log(mt);
// //   //   j += 1;
// //   // };

// //   // return (
// //   //   <div className="App">
// //   //     <h1>Bills</h1>
// //   //     <h2>Add Persons</h2>
// //   //     {/* <input type="number" name="pers" id="per" style={inputStyle} />
// //   //     <input
// //   //       type="submit"
// //   //       value="Enter"
// //   //       onClick={handleTextChange}
// //   //       style={inputStyle}
// //   //     />
// //   //     <p>Total number of persons is: {per}</p> */}
// //   //     <div>
// //   //       <h3>Enter persons Name:</h3>
// //   //       <input type="text" name="names" id="nm" />
// //   //       <input type="submit" value="Add" onClick={adPer} />
// //   //       <table>
// //   //         <tbody>
// //   //           {name.map((nme, index) => (
// //   //             <tr key={index}>
// //   //               <td>
// //   //                 {i++}. {nme}
// //   //               </td>
// //   //             </tr>
// //   //           ))}
// //   //         </tbody>
// //   //       </table>
// //   //     </div>
// //   //     <div>
// //   //       <h2>Expenses: {j}</h2>
// //   //       <h5>Ammount:</h5>
// //   //       <input type="number" name="amount" id="amt" onChange={split} />
// //   //       {/* <br /> */}
// //   //       <h4>Whos paid this</h4>
// //   //       <select id="who">
// //   //         {name.map((nme, index) => (
// //   //           <option key={index}>{nme}</option>
// //   //         ))}
// //   //       </select>
// //   //       <div>
// //   //         <h4>Who was available during this expense:</h4>
// //   //         {name.map((nme, index) => (
// //   //           <label key={index}>
// //   //             <input type="checkbox" value={nme} onChange={chck} />
// //   //             {nme}
// //   //           </label>
// //   //         ))}
// //   //         <h3>available persons were:</h3>
// //   //         {name
// //   //           .filter((nme) => prs.includes(nme))
// //   //           .map((prso, index) => (
// //   //             <p key={index}>{prso}</p>
// //   //           ))}
// //   //       </div>
// //   //       <input
// //   //         type="submit"
// //   //         name="sbt"
// //   //         id="sbmt"
// //   //         value="Split"
// //   //         onClick={splitExpense}
// //   //       />
// //   //       {amt &&
// //   //         amt.map((amt) => (
// //   //           <p>
// //   //             <label>
// //   //               {amt.prs} {amt.amt}
// //   //             </label>
// //   //             <br />
// //   //           </p>
// //   //         ))}
// //   //       {/* <p> {pr}</p> */}
// //   //     </div>
// //   //   </div>
// //   // );
// //   <Main />;
// // }

// import React, { useState } from "react";

// function Main() {
//   const [names, setNames] = useState([]);
//   const [expenses, setExpenses] = useState([]);

//   const handleAddPerson = () => {
//     const name = document.getElementById("name").value;
//     setNames([...names, name]);
//     document.getElementById("name").value = "";
//   };

//   const handleAddExpense = () => {
//     const amount = parseFloat(document.getElementById("amount").value);
//     const paidBy = document.getElementById("paidBy").value;
//     const participants = names.filter(
//       (name) => document.getElementById(name).checked
//     );
//     const share = amount / participants.length;
//     const newExpenses = [...expenses];
//     participants.forEach((participant) => {
//       const index = names.indexOf(participant);
//       newExpenses[index] = (newExpenses[index] || 0) + share;
//     });
//     setExpenses(newExpenses);
//   };

//   return (
//     <div>
//       <h1>Bills</h1>
//       <div>
//         <h2>Add Persons</h2>
//         <div>
//           <h3>Enter person's name:</h3>
//           <input type="text" id="name" />
//           <button onClick={handleAddPerson}>Add</button>
//         </div>
//         <ul>
//           {names.map((name, index) => (
//             <li key={index}>{name}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Expenses</h2>
//         <div>
//           <h3>Enter expense amount:</h3>
//           <input type="number" id="amount" />
//         </div>
//         <div>
//           <h3>Paid by:</h3>
//           <select id="paidBy">
//             {names.map((name, index) => (
//               <option key={index}>{name}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <h3>Participants:</h3>
//           {names.map((name, index) => (
//             <label key={index}>
//               <input type="checkbox" id={name} />
//               {name}
//             </label>
//           ))}
//         </div>
//         <button onClick={handleAddExpense}>Add Expense</button>
//       </div>
//       <div>
//         <h2>Expenses Summary</h2>
//         <ul>
//           {names.map((name, index) => (
//             <li key={index}>
//               {name}: {expenses[index] || 0}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Main;
