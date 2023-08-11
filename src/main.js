import React, { useState } from "react";
import { useRef } from "react";
import "./styles.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

function Main() {
  const [names, setNames] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [inputs, setInputs] = useState({
    amount: "",
    paidBy: "",
    participants: []
  });
  const [e, setE] = useState(1);

  var amtRef = useRef(null);
  var pdRef = useRef(null);


  const handleAddPerson = () => {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
      setNames([...names, name]);
    }
    document.getElementById("name").value = "";
    setIsAddPrsDisabled(true);
  };

  const handleInputChange = (event) => {
    const { id, value, type } = event.target;
    if (type === "checkbox") {
      const participants = [...inputs.participants];
      if (event.target.checked) {
        participants.push(id);
      } else {
        participants.splice(participants.indexOf(id), 1);
      }
      setInputs({ ...inputs, participants });
    } else {
      setInputs({ ...inputs, [id]: value });
    }
  };
  // var e = 1;
  const handleAddExpense = () => {
    const { amount, paidBy, participants } = inputs;
    if (
      amount &&
      paidBy &&
      participants.length > 0 &&
      participants.includes(paidBy)
    ) {
      const amountValue = parseFloat(amount);
      amtRef.current.value = amountValue;
      pdRef.current.value = paidBy;
      const share = (amountValue / participants.length).toFixed(2);
      const newExpenses = [...expenses];
      participants.forEach((participant) => {
        const index = names.indexOf(participant);
        if (participant === paidBy) {
          newExpenses[index] =
            (newExpenses[index] || 0) + share * (participants.length - 1);
        } else {
          newExpenses[index] = (newExpenses[index] || 0) - share;
        }
      });
      setExpenses(newExpenses);
      setE((preve) => preve + 1);
      clr();
    } else {
      alert("Please enter valid values first");
    }
  };

  const clr = () => {
    setInputs({ amount: "", paidBy: "", participants: [] });
    amtRef.current.value = "";
    pdRef.current.value = "";
  };

  const [isAddPrsDisabled, setIsAddPrsDisabled] = useState(true);

  const handleIChange = (event) => {
    const newName = event.target.value;
    // setName(newName);
    setIsAddPrsDisabled(newName.trim() === ""); // Update disabled state
  };

  const isAddExpenseDisabled = !(
    inputs.amount &&
    inputs.paidBy &&
    inputs.participants.length > 0 &&
    inputs.participants.includes(inputs.paidBy)
  );

  const [activeDiv, setActiveDiv] = useState("adperson");

  const handleButtonClick = (id) => {
    setActiveDiv(id);
  };

  return (
    <>
      <div className="main">
        {/* <Container>
        <Row>
          <Col sm={6}> */}

        {/* </Col>
        </Row>
      </Container> */}
        <div className={`divs ${activeDiv === "adperson" ? "active" : ""}`}>
          <h1>Bills</h1>
          <h2>Add Persons</h2>
          <div>
            <h3>Enter person's name:</h3>
            <input type="text" id="name" placeholder="Enter Person Name" onChange={handleIChange}/>
            <br />
            <br />
            <button className={`btns ${isAddPrsDisabled ? "disable":""}`} onClick={handleAddPerson}>
              Add
            </button>
          </div>
          <ol>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ol>
        </div>
        <div className={`divs ${activeDiv === "expenses" ? "active" : ""}`}>
          <h2>Expenses {e}</h2>
          <div>
            <h3>Enter expense amount:</h3>
            <input
              type="number"
              id="amount"
              value={inputs.amount}
              onChange={handleInputChange}
              ref={amtRef}
              placeholder="Enter Ammount:"
            />
          </div>
          <div>
            <h3>Paid by:</h3>
            <select
              id="paidBy"
              value={inputs.paidBy}
              onChange={handleInputChange}
              ref={pdRef}
            >
              <option value="">-- Select --</option>
              {names.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3>Participating persons:</h3>
            {names.map((name, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={name}
                  checked={inputs.participants.includes(name)}
                  onChange={handleInputChange}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            ))}
          </div>
          <button
            className={`btnst ${isAddExpenseDisabled ? "disable":""}`}
            onClick={handleAddExpense}
            disabled={isAddExpenseDisabled}
          >
            Add Expense
          </button>
          {/* <button onClick={clr}>Clear</button> */}
        </div>
        <div className={`divs ${activeDiv === "summary" ? "active" : ""}`}>
          <h2>Summary</h2>
          <ol>
            {names.map((name, index) => (
              <li key={index}>
                {name}: {expenses[index] || 0}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mnbtn">
        <div className="btnm">
          <button
            className="btns"
            onClick={() => handleButtonClick("adperson")}
          >
            Add Person
          </button>
          {/* </Col>
          <Col sm={6}> */}
          <button
            className="btns"
            onClick={() => handleButtonClick("expenses")}
          >
            Expenses
          </button>
          {/* </Col>
          <Col sm={6}> */}
          <button className="btns" onClick={() => handleButtonClick("summary")}>
            Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;

// import React, { useState } from "react";
// import { useRef } from "react";

// function Main() {
//   const [names, setNames] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   // const [aaa, setAaa] = useState();
//   // const [pd, setPd] = useState();

//   var amtRef = useRef(null);
//   var pdRef = useRef(null);

//   const handleAddPerson = () => {
//     const name = document.getElementById("name").value;
//     setNames([...names, name]);
//     document.getElementById("name").value = "";
//   };
//   const handleAddExpense = () => {
//     // if (amtRef != null && pdRef != null) {
//     const amount = parseFloat(document.getElementById("amount").value);
//     const paidBy = document.getElementById("paidBy").value;
//     // setAaa(amount);
//     // setPd(paidBy);
//     amtRef.current.value = amount;
//     pdRef.current.value = pdRef;
//     const participants = names.filter(
//       (name) => document.getElementById(name).checked
//     );
//     const share = (amount / participants.length).toFixed(2);
//     const newExpenses = [...expenses];
//     participants.forEach((participant) => {
//       const index = names.indexOf(participant);
//       if (participant == paidBy) {
//         newExpenses[index] =
//           (newExpenses[index] || 0) + share * (participants.length - 1);
//       } else {
//         newExpenses[index] = (newExpenses[index] || 0) - share;
//       }
//     });
//     setExpenses(newExpenses);
//     clr();
//     // } else {
//     //   alert("Please enter values first");
//     // }
//     // setAaa("");
//     // setPd("");
//     // participants = "";
//   };
//   const clr = () => {
//     amtRef.current.value = "";
//     pdRef.current.value = "";
//     names.forEach((name) => {
//       document.getElementById(name).checked = false;
//     });
//     console.log("clear function executed.");
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
//           <input type="number" id="amount" ref={amtRef} />
//         </div>
//         <div>
//           <h3>Paid by:</h3>
//           <select id="paidBy" ref={pdRef}>
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
