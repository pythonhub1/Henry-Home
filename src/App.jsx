
import './App.css'

import React from "react";

function App() {

  return (

        <html>
        <head>
            <title>Henry F - Electrical Engineer</title>
            <style>
                {`
            body {
              font-family: Arial, sans-serif;
              background-color: lightblue;
              margin: 0;
              padding: 0;
            }
            header {
              text-align: center;
              padding: 20px;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .project {
              border: 1px solid #ddd;
              padding: 10px;
              margin-bottom: 20px;
            }
            footer {
              text-align: center;
              padding: 10px;
            }
          `}
            </style>
        </head>
        <body>
        <header>
            <h1>Henry Forman</h1>
            <p>Electrical Engineer | Inventor</p>
            <img src="./assets/react.svg"  alt="hi"/>
        </header>

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

export default App
