import './App.css';
import About from './components/about';
import Brand from './components/brand';
import Company from './components/company';
import Contact from './components/contact';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import House from './components/house';
import Navbar from './components/navbar';
import Service from './components/service';
import Today from './components/today';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Service/>
      <Today/>
      <Content/>
      <House/>
      <About/>
      <Company/>
      <Brand/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
