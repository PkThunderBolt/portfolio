import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/Flipkartgrid.png'
import jsomBlog from '../../Assets/Projects/Canva 500 Design.webp'
import taskify from '../../Assets/Projects/SIH-winner.webp'
import aA from '../../Assets/Projects/C CERTIFICATE.webp'
import easyCode from '../../Assets/Projects/NICE 22.png'
import tech from '../../Assets/Projects/techX talk.webp'
import nukkad from '../../Assets/Projects/Nukkad natak.webp'
import rep from '../../Assets/Projects/Republica.webp'
import go from '../../Assets/Projects/Google cloud Prashant Kumar (1).png'
import py from '../../Assets/Projects/python Prashant Kumarcertificate.webp'

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Certificates </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few Certificates I've on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="SIH Winner"
              description="Smart India Hackathon Conducted by the GOI & MoE. Worked under Ministry of Social Empowerment & Justice. "
              link="https://drive.google.com/file/d/1mmORTYerSwx26FwNR1-_s-4O92hMKdBZ/view?usp=sharing"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="National Inter-College Crossword Expedition-22"
              description="NICE 22 Qualified for the East Zonal Finals organised by AICTE &
              UGC."
              link="https://drive.google.com/file/d/1VtwHpzgVR0G1yH5oMcxzQfNeIy3Ak4fI/view?usp=sharing"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Flipkart GRID 5.0"
              description="Cleared Level 1: E-Commerce & Tech Quiz of the Flipkart GRiD 5.0 - Information Security Challenge organised by the Flipkart .."
              link="https://drive.google.com/file/d/1r35zEQz2kte9CFY3rLwSm9MRbX_tnvLi/view?usp=sharing"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Canva 500 Design Milestone Badge"
              description="creating 500 designs in Canva Another big achievement in our design journey."
              link="https://drive.google.com/file/d/1KcI7n9a13ED1tdMe3obCTAJJ7Tiu_Fv4/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="techX talk Coordinator"
              description="As the Coordinator for the techX talk '22 event on National Technology Day 2022, I am responsible for organizing and overseeing all aspects of the event. I am excited to organize this event and to provide a platform for people to learn about and discuss the latest trends and innovations in technology."
              link="https://drive.google.com/file/d/1DvC-m-OqYlMIs_qiPo601E3W5_aVvunq/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nukkad}
              isBlog={false}
              title="Nukkad Natak"
              description="I participated in a Nukkad Natak on World Environment Day to raise awareness about environmental conservation. I played the role of a young person who is passionate about protecting the environment and urged the audience to take action to reduce their environmental impact."
              link="https://drive.google.com/file/d/1DFDqlriSacAsiTNnosweVE4zS4C466xz/view?usp=sharing"
              
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={rep}
              isBlog={false}
              title="Republica Event"
              description="We are grateful for your dedication and participation in the NATYAKSH Club on Republic Day 2023, under the Event REPÜBLICA 23. Your outstanding performance was a significant contribution to the success of the event"
              link="https://drive.google.com/file/d/1SquFmkQHql3koXAF-jkSVzGrXeuiWKSN/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="C Certificate"
              description="
              For successfully completing the course Problem Solving Through Programming in C from IIT Kharagpur.Your success in this course demonstrates that you have a strong foundation in programming in C. This is a valuable skill that will serve you well in our future endeavors."
              link="https://drive.google.com/file/d/1af-YzuqqhHfTX_-oTN5Cs_xOWm6urJQp/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={go}
              isBlog={false}
              title="Google Cloud Program 2021"
              description="
              for Completing Cloud Engineering Track and Data Science & Machine Learning Track in 30 Days of Google Cloud Program 2021."
              link="https://drive.google.com/file/d/1AQ-RAMq5sFJxMrqOCl2fpr_uDGvDnh-J/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="Python (Data Science)"
              description="
              Online Training Program on Industry Demanded Course an Python (Data Science) Conducted for Aryabhatta Knowledge University, Patna, Bihar By Softpro India Computer Technologies (P) Limited,Lucknow."
              link="https://drive.google.com/file/d/1lkAO8vL52ZS6QZb87j8OiVFD4LaR3gZc/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="Creative & Outreach lead @GDSC BCE Patna"
              description="
              Creative & Outreach Lead at Google Developer Student Club Bakhtiyarpur College of Engineering, Patna."
              link="https://drive.google.com/file/d/1lkAO8vL52ZS6QZb87j8OiVFD4LaR3gZc/view?usp=sharing"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Achievements
