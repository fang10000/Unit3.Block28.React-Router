import React from 'react';
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Footer from './Footer';
import './App.css';


function App() {

  return (
    <>
      <div id="container">
        <Navbar />
        <MainContainer />
        <Footer />
      </div>
      
    </>
  )
}

export default App


// function App() {

//   return (
//     <>
//       <div id="container">
//         <div id="navbar">
//          <Link to="/"> Home </Link>
//          <Link to="/blue"> Blue </Link>
//          <Link to="/red"> Red </Link>
//         </div>
//         <div id="main-section">
//           <Routes>
//             <Route path="/blue" element={<Blue />} />
//             <Route path="/red" element={<Red />} />
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   )
// }
