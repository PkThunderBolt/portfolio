import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Prashant Kumar </span>
            from <span className="purple">  Gaya, Bihar India.</span> 
            <br/>
            <br />&diams;  I am 3rd Year undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering at <span className="purple">Bakhtiyarpur College of Engineering, Patna. 🎓 </span> 
            <br />
            <br />&diams; I am proficient in HTML, CSS, js & C++ Language and has a keen interest in UI/UX development, animation, and graphic design. 🌈
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Posters, Banner,etc
            </li>
            <li className="about-activity">
              <ImPointRight /> Drama, Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "“It does not matter how slowly you go as long as you do not stop.  -Confucius.”"
          </p>
          {/* <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
