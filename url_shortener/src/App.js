import './style/App.css'
import React, {useState, useEffect, useRef} from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Statistics from './Statistics/Statistics';
import Footer from './Footer/Footer';
import logo from './images/logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [navShow, setnavShow] = useState(true) // toggle navbar
  const onShow = () => setnavShow(!navShow)

   //hide navbar when anywhere on the screen is clicked
   let btnRef = useRef();

   useEffect(() => {
     let hideNav = (e)=>{
       if(!btnRef.current.contains(e.target)){
         setnavShow(true);
       }      
     };
 
     document.addEventListener("click", hideNav);
     
     return() =>{
       document.removeEventListener("click", hideNav);
     }
   }, []);

   // AOS initalization 
   useEffect(() => {
    AOS.init();
   }, [])

  return (
    <div>
      <NavBar img={logo} onShow={onShow} btnRef={btnRef} navShow={navShow}/>
      <Header />
      <Statistics />
      <Footer img={logo}/>
    </div>
  );
}

export default App;
