import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import BookingPage from './BookingPage';
import './style.css';

const App = () => {
  return (
    <>
      {/* <BookingPage/> */}
      <div class="container">
        <Header />
        <Nav />
      </div>
      <Main />
    </>
  )
}

export default App;