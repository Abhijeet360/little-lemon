import React from 'react'

const Main = () => {
  return (
    <>
      <section>
        <main className="hero">
          <div className="discription">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='btn'>Reserve a Table</button>
          </div>
          <div className="image-secion">
            <img src="assets/restauranfood.jpg" alt="error" />
          </div>
        </main>
      </section>
      <section className="highlights">
        <div className="spacial">
          <h1>Spacial</h1>
          <button className='btn btn2'>Online Menu</button>
        </div>
        <div className="card-section">
          <div className="card">
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;