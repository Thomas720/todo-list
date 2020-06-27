import React from "react";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";
import "./styles/styles.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ToDo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
