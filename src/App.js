import Footer from "./components/footers/footer";
import Header from "./components/headers/header";
import Middle from "./components/middle/middle";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Middle />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
