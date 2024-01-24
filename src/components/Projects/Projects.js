import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import port from '../../Assets/Projects/portfolio.webp'
import sih from '../../Assets/Projects/SIH.webp'
import knif from '../../Assets/Projects/KniftKraft.png'
import bro from '../../Assets/Projects/PLACEMENT BROCHURE  .png'

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
              title= <u>VoCo App</u> 
              description="A SIH Winning Project, 22 VoCo web/app based solution required for vocational training for persons with visual impairment. It would have greater accessibility support and a better user interface. The mobile app will have features such as to improve the vocal speech of the user, enhance subject knowledge, interactive live session with expert or bot and fun interactive games to train their mind. The app has very easy to use layout setup with voice powered in-app navigation support.    "
              link="https://github.com/PkThunderBolt/Voco_App"
              liveLink="https://youtu.be/JdDHJDz9RwU?si=SUJR5rvz4pCKn43h"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knif}
              isBlog={false}
              title=<u>KniftKraft App</u>
              description="A SIH Winning Project, 23 KniftKraft the All-In-One Mobile App for Farmers. Our new mobile application KniftKraft is designed to help farmers with everything they need. From monitoring wool production to tracking the product through the supply chain to tracking the final product through to the fabric our app has you covered. Our app also allows farmers to monitor the health and wellbeing of their livestock,ensuring that they are always in optimal condition.  "
              link="#"
              liveLink="https://knitkraft.onrender.com/farmer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title=<u>Portfolio</u>
              description="Introducing My Personal Portfolio, Prashant. My portfolio showcases my technical skills, as well as some of my popular GitHub projects and my resume. In building this site, I utilized a variety of tech stacks, including React.js, Node.js, Express.js, and CSS.
              I wanted my portfolio to reflect my personality and interests. Therefore, I included a section about my hobbies and a brief introduction about myself. I believe this helps potential employers or clients get to know me better beyond just my technical skills."
              link="https://github.com/PkThunderBolt/portfolio"
              liveLink="https://pkprashant.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bro}
              isBlog={false}
              title=<u>Placement Brochure</u>
              description="In 2024, I took on the task of designing the placement brochure for my college.Crafting a visually appealing and easily understandable brochure was essential, and I ensured that the final product effectively communicated a clear and concise message, emphasizing the unique features and benefits of my college. The experience not only honed my design skills but also contributed to enhancing the overall representation of my college in the professional world."
              link="https://drive.google.com/file/d/1ebXo6cJTiJ2_6-U8yeoTgYPl5u8hLgNG/view?usp=sharing"
              liveLink="https://www.linkedin.com/posts/training-and-placement-cell-bce-bakhtiyarpur_placement-brochure-2023-2024-activity-7151120274967388161-VWEx?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects
