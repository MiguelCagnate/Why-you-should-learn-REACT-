import "./App.css";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Input from "./Input";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />     
      <Input/>
      <Footer />      
    </div>
  );
}

export default App;
