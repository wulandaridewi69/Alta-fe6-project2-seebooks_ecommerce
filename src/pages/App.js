// import '../style';
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from '../components/Button';
import Passed from "../components/Passed";

const App = () => {

  const handleClick = (Event) => {
    console.log(Event);
  }

  return (
    <>
    <div className="App">
    <Header/>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button color='primary' onClick={handleClick}>PRIMARY</Button> &nbsp;
    <Button color='transparent' onClick={handleClick}>LOGIN</Button> &nbsp;
    <Button color='green' onClick={handleClick}>Buy</Button>
    <Footer/>
    </div>
    <Passed/>
    </>
  );
}

export default App;
