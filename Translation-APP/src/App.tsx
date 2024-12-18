import "./App.css";
import Text from "./components/Text";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen justify-center flex flex-col">
        <div className="top-0 z-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-800 absolute"></div>
        <Text />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
