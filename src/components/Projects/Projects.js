import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import port from '../../Assets/Projects/portfolio.webp'
import sih from '../../Assets/Projects/SIH.webp'
import medi from '../../Assets/Projects/medihelp.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sih}
              isBlog={false}
              title="VoCo App"
              description="A web/app based solution required for vocational training for persons with visual impairment. It would have greater accessibility support and a better user interface. The mobile app will have features such as to improve the vocal speech of the user, enhance subject knowledge, interactive live session with expert or bot and fun interactive games to train their mind. The app has very easy to use layout setup with voice powered in-app navigation support. "
              link="https://github.com/PkThunderBolt/Voco_App"
              liveLink="https://youtu.be/JdDHJDz9RwU?si=SUJR5rvz4pCKn43h"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medi}
              isBlog={false}
              title="MediHelp"
              description="We are a team of dedicated healthcare professionals committed to providing top-quality medical care to our patients. Our team includes experienced doctors, nurses, and support staff who work together to ensure that you receive the best possible treatment."
              link="https://github.com/PkThunderBolt/MediHelp"
              liveLink="https://pkthunderbolt.github.io/MediHelp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="#"
              liveLink="https://pkprashant.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects
