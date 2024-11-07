import { useState } from "react";
import "./App.css";
import LanguageSelect from "./components/LanguageSelect";
import Text from "./components/Text";
import Navbar from "./navbar/Navbar";

function App() {
  const [langFrom, setLangFrom] = useState("Indonesian");
  const [langTo, setLangTo] = useState("English");
  return (
    <>
      <Navbar />
      <div className="w-screen justify-center flex flex-col">
        <div className="top-0 z-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-800 absolute"></div>
        <LanguageSelect langTo={langTo} langFrom={langFrom} />
        <Text text={""} translatedtext={""} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
