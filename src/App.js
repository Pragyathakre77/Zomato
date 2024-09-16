// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import { BrowserRouter } from 'react-router-dom';
// import{Route,Routes} from 'react-router-dom'
// import Login from './Login'
// import Signin from './Signin';
// import Cards from './Cards';
// import Collection from './Collection';
// import Grid from './Grid'
// import Getapp from './Getapp';
// import Explore from './Explore'

// function App() {
//   return (
//   <>
//    <div>   
//     <Routes>
//         <Route path='/' element={<Header/>} />
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/signin' element={<Signin/>}/>
//       </Routes>
//    </div>

//    <Cards/>
//    <Collection/>
//    <Grid/>
//    <Getapp/>
//    <Explore/>
//   </>   
//   );
// }

// export default App;




import React from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Collection from './Components/Collections/Collection'
import City from './Components/Cities/City'
import Cta from './Components/CTA/Cta'
import Accordian from './Components/Accordian/Accordian'
import Footer from './Components/Footer/Footer'
// import Login from './Login'


const App = () => {
  return (
    <div className='App'>
        <Header/>
        <Card/>
        <Collection/>
        <City/>
        <Cta/>
        <Accordian/>
        <Footer/>
    </div>
  )
}

export default App





