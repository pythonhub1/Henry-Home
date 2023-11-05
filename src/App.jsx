
import './App.css'
import logo from './leams1.jpeg';
import ApBar from './ApBar.jsx'
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'
function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setLoggedIn(true)
                // ...
                console.log("uid", uid)
            } else {
                // User is signed out
                // ...

                console.log("user is logged out")
                setLoggedIn(false)
                navigate('/Henry-Home/login');
            }
        });


    }, [])


  if (loggedIn) {
      return (
          <html>
          <head>
              <title>Henry F - Electrical Engineer</title>
              <style>
                  {`
            body {
              font-family: Arial, sans-serif;
              background-color: lightblue;
              `}
              </style>
          </head>
          <body>
          <div>
              <center><h1>Henry Forman</h1></center>
              <center><p>Electrical Engineer | Inventor</p></center>
              <center><img src={logo}  alt="hi" width="300" height="200"/></center>
          </div>

          <div className="container">
              <section id="about">
                  <h2>About Me</h2>
                  <p>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Welcome to my personal webpage! I'm passionate about electronics and engineering, and I love inventing new things that push the boundaries of technology.
                  </p>

              </section>


              <section id="contact">
                  <h2>Contact Me</h2>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p>If you're interested in my inventions or have any inquiries, feel free to reach out to me:</p>
                  <p>Email: pythontester20142@gmail.com</p>
                  <p>Phone: (415) 254-0183</p>
              </section>
          </div>

          <footer>
          </footer>
          </body>
          </html>
      )
  }

  else {
      <>
      </>
  }


}

export default App
