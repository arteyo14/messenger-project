import { useState, useEffect } from "react";

//components
import NavComponent from "./components/Nav/index";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer/index";

//data
import userData from "./components/userdata/index";

//assets
import "./App.css";

function App() {
  const [showData, setShowData] = useState(userData);
  const [keyWord, setKeyWord] = useState("");

  const onKeyWordChanged = (event) => {
    setKeyWord(event.target.value);
  };

  useEffect(() => {
    let newData = userData.filter((item) => {
      return item.first_name
        .concat(` ${item.last_name}`)
        .toLowerCase()
        .includes(keyWord.toLocaleLowerCase());
    });
    setShowData(newData);
  }, [keyWord]);

  return (
    <div className="App">
      <NavComponent
        data={userData}
        keyWord={keyWord}
        setKeyWord={onKeyWordChanged}
      />
      <div className="content">
        <ContentComponent showData={showData} />
      </div>
      <footer className="footer__container">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
