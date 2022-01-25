import logo from './logo.svg';
import './App.css';
import Coustomer from './page/Coustomer';
import Footer from './page/Footer';
import MeetBanner from './page/MeetBanner';
import OurDeveloper from './page/OurDeveloper';
import Book from './page/Book';
import Visitor from './page/Visitor';
import Menubar from './page/Menubar';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Home />
      <Visitor />
      <Book />
      <OurDeveloper /> 
      <Coustomer />
      <MeetBanner />
      <Footer />
    </div>
  );
}

export default App;
