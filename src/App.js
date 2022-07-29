import GallaryReact from "./components/GallaryReact";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GallaryReact />
    </BrowserRouter>
  );
}

export default App;
