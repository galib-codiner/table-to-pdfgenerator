import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExportPdfComponent from "./ExportPdfComponent ";

class App extends Component {

  render() {
    return (
      <div className="App container">
        <ExportPdfComponent/>
      </div>
    );
  }
}
export default App;