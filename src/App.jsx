import { useState, useEffect } from "react";
import NavComponent from "./components/Nav/index";
import userData from "./components/userdata/index";
import "./App.css";

function App() {
  const [showData, setShowData] = useState(userData);
  const [keyWord, setKeyword] = useState("");

  return (
    <div className="App">
      <NavComponent data={userData} />
    </div>
  );
}

export default App;
