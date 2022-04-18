import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Alart from "./components/Alart";
import TastF from "./components/TastF";
import Travel from "./Travel/App";
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = React.useState(true);
  const [alt, setalart] = React.useState(null);
  const [bcolor, setcolor] = React.useState(null);
  const [color, setcolorc] = React.useState("black");
  function showa(massage, type) {
    setalart({
      msg: massage,
      ty: type,
    });
    setTimeout(() => {
      setalart(null);
    }, 1000);
  }

  function dl(cls) {
    console.log(document.body.classList);
    if (mode === true) {
      setmode(false);
      document.body.style.backgroundColor = "#0c0c17";
      showa("dark", "danger");
      setcolor("#212529");
      setcolorc("white");
      document.title = "learning - dark";
    } else {
      setmode(true);
      document.body.style.backgroundColor = "white";
      showa("light", "success");
      setcolor("white");
      setcolorc("black");
    }
  }
  // function gM(){
  //     setcolor('green')
  //     setcolorc('black')
  //     showa('green','success')
  //     document.body.style.backgroundColor = 'orange'
  // }
  // function bM(){
  //   setcolor('yellow')
  //   document.body.style.backgroundColor = 'blue'
  //   setcolorc('blue')
  //   showa('blue','success')
  // }

  return (
    <div>
      <HashRouter>
        <Navbar toggle={mode} funT={dl} colorSet={bcolor} colorSett={color} />
        <Alart alart={alt} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <h1>This is Home page</h1>
              </div>
            }
          />
          <Route exact path="/about" element={<TastF />} />
          <Route exact path="/Travel" element={<Travel />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
