import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/mypic.webp'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              I am a passionate software engineer with a strong interest in 
              <i>
                <b className="purple"> &nbsp; Web technologies, Application development, and Graphic design. </b>
              </i>
              <br />
              <br />I am fluent in a variety of programming languages and technologies, including
              <i>
                <b className="purple"> &nbsp;&nbsp; C, C++, HTML, CSS, Javascript, Python, Canva, Node.js and React.js. </b>
              </i>
              <br />
              <br />
              I am always looking for new challenges and opportunities to <span className="purple">learn and grow </span> . I am excited to use my skills and knowledge to develop innovative and user-friendly products.
              <i>
                <b className="purple">
                  {' '}
                </b>{' '}
                 <b className="purple"></b>
              </i>
              <br />
              <br />
              I am also a strong advocate for diversity and inclusion in the tech industry. I believe that everyone should have the opportunity to  <span className="purple">learn and succeed </span>, regardless of their background or experience. <b className="purple"></b> 
              <i>
                <b className="purple">
                  {' '}
                  {/* Modern Javascript Library and Frameworks */}
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PkThunderBolt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prashant-kumar-426775213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:pkprashant566@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BiLogoGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_prashant_._pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
