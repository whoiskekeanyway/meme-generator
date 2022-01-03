import "./App.css";

// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

// import Try from "./components/Try";

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Meme />
      <Footer />
    </div>
  );
}

export default App;
