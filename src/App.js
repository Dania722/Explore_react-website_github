import logo from './logo.svg';

import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Upcoming from './components/upcoming';
import Explore from './components/explore';
import Tour from './components/tour';
import Feedback from './components/suggestion';
import Footer from './components/footer';
import Sug  from "./components/dumy/d"; 
import Top from './components/top';

function App() {
  return (
<>
<div className="App">

       <Navbar/> 
    <Header/>
     <Upcoming/>
      <Explore/>
      <Tour/>
      <Top/>
        <Footer/> 
    </div>
</>
  );
}

export default App;
