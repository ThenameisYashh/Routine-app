import React, { useState } from "react";

function main() {
  const [Task1, setTask1] = useState();
  const [Task2, setTask2] = useState();
  const [Task3, setTask3] = useState();

  let [Value, setValue] = useState(false);
  let [Value2, setValue2] = useState(false);
  let [Value3, setValue3] = useState(false);

  let allValue = [Value,Value2,Value3]

  if (allValue[0,1,2] == true) {
    setTimeout(()=>{
      alert("You Have Completed All Tasks")
      localStorage.clear()
      setValue(false),setValue2(false),setValue3(false)
   },1000)
  }

  return (
    <main>
      <nav>
        <h1>Today</h1>
        <img id="logo" src="https://i.postimg.cc/m2rBLNSf/Sun-1.png" />
      </nav>
      <p className="txtTheme">Raise the bar by completing your goals!</p>
      <div className="progressBar">
        <div id={Value ? "fragment1" : ""} className="fragments" >1</div>
        <div id={Value2 ? "fragment2" : ""} className="fragments">2</div>
        <div id={Value3 ? "fragment3" : ""} className="fragments">3</div>
      </div>
      <div className="tasksContainer">
        <div className="tbContainer">
          <div
            className="tbRadio"
            onClick={() => {
              if (Value == false ) {
                setValue(true);
              } else {
                setValue(false);
              }
            }}
          >
            <img
              src="https://i.postimg.cc/Gp3NbnNx/green-check-mark-icon-in-round-shape-design-png.webp"
              alt="Green Tick Image"
              style={{ display: Value ? "block" : "none" }}
            />
          </div>
          <div
            className="inptWr tbTaskInpt"
            onClick={() => {
              let t1 = prompt("Enter Your 1st Task");
              t1 ? null : (t1 = "Please Enter Your Goal");
              localStorage.setItem(1, t1);
              setTask1(t1);
            }}
          >
            <p className={Value ? "completed" : ""}>{localStorage[1]}</p>
          </div>
        </div>
        <div className="tbContainer">
          <div
            className="tbRadio"
            onClick={() => {
              if (Value2 == false) {
                setValue2(true);
              } else {
                setValue2(false);
              }
            }}
          >
            <img
              src="https://i.postimg.cc/Gp3NbnNx/green-check-mark-icon-in-round-shape-design-png.webp"
              alt="Green Tick Image"
              style={{ display: Value2 ? "block" : "none" }}
            />
          </div>
          <div
            className="inptWr tbTaskInpt"
            onClick={() => {
              let t2 = prompt(`Enter Your 2nd Task`);
              t2 ? null : (t2 = "Please Enter Your Goal");
              localStorage.setItem(2, t2);
              setTask2(t2);
            }}
          >
            <p className={Value2 ? "completed" : ""}>{localStorage[2]}</p>
          </div>
        </div>
        <div className="tbContainer">
          <div
            className="tbRadio"
            onClick={() => {
              if (Value3 == false) {
                setValue3(true);  
              } else {
                setValue3(false);
              }
            }}
          >
            <img
              src="https://i.postimg.cc/Gp3NbnNx/green-check-mark-icon-in-round-shape-design-png.webp"
              alt="Green Tick Image"
              style={{ display: Value3 ? "block" : "none" }}
            />
          </div>
          <div
            className="inptWr tbTaskInpt"
            onClick={() => {
              let t3 = prompt(`Enter Your 3rd Task`);
              t3 ? null : (t3 = "Please Enter Your Goal");
              localStorage.setItem(3, t3);
              setTask3(t3);
            }}
          >
            <p className={Value3 ? "completed" : ""}>{localStorage[3]}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default main;
