import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/Flipkart_1.jpg'
import jsomBlog from '../../Assets/Projects/Canva 500 Design.webp'
import taskify from '../../Assets/Projects/SIH-winner.webp'
import aA from '../../Assets/Projects/Web Development ihub.jpg'
import easyCode from '../../Assets/Projects/NICE 22.png'
import tech from '../../Assets/Projects/techX talk.webp'
import nukkad from '../../Assets/Projects/Nukkad natak.webp'
import rep from '../../Assets/Projects/Republica.webp'
import go from '../../Assets/Projects/Google cloud Prashant Kumar (1).png'
import py from '../../Assets/Projects/python Prashant Kumarcertificate.webp'
import sih from '../../Assets/Projects/SIH23Winner.jpg'
import cretive from '../../Assets/Projects/Creative.jpg'
import sales from '../../Assets/Projects/Salesforce Certificate.jpg'
import graph from '../../Assets/Projects/Greenbhumi certificate.jpg'

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
              title="SIH Winner, 22"
              description="Smart India Hackathon Conducted by the GOI & MoE. Worked under Ministry of Social Empowerment & Justice. "
              link="https://alumniapi.mic.gov.in/api/certificates/8187/39860"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sih}
              isBlog={false}
              title="SIH Winner, 23"
              description="Smart India Hackathon Conducted by the GOI & MoE. Worked under Ministry of Textiles. "
              link="https://alumniapi.mic.gov.in/api/certificates/10436/39860"
              
            />
          </Col>



          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Salesforce Developer Virtual Internship"
              description="For successfully completing the Salesforce Trailhead modules during the 8-week Virtual Internship (December 2023 - January 2024)"
              link="https://smartinternz.com/internships/salesforce_certificates/c921300a38c8b7176a4cda6845a6cb1d"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Graphic Designer Internship"
              description="
              For the successful completion of the 3-month Graphic Design Internship at Greenbhumi Toptrove Foundation"
              link="https://drive.google.com/file/d/1JUsthr18r6__ur6dctjBIYjkZ8w1zd1N/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Flipkart GRID 5.0"
              description="Cleared Level 1: E-Commerce & Tech Quiz of the Flipkart GRiD 5.0 - Information Security Challenge organised by the Flipkart .."
              link="https://unstop.com/certificate-preview/9f6c0498-7549-462d-b8fb-c74432c46bfb"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Web Development"
              description="
              For successfully completing the Fundamentals of Web Development conducted by iHUB Divya Sampark, IIT Roorkee in association with science, Technology and Technical Education Department, Bihar."
              link="https://drive.google.com/file/d/1gtHjuzPN7buR4rgQUXHNBFnh21Q13Z6M/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="National Inter-College Crossword Expedition-22"
              description="NICE 22 Qualified for the East Zonal Finals organised by AICTE &
              UGC."
              link="https://drive.google.com/file/d/1k8vN0v2NPEGdGdDAyWZisQHUl2PAXnLs/view?usp=sharing"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={go}
              isBlog={false}
              title="Google Cloud Program 2021"
              description="
              for Completing Cloud Engineering Track and Data Science & Machine Learning Track in 30 Days of Google Cloud Program 2021."
              link="https://drive.google.com/file/d/1Sc5yfYKKmMchtUPBMnDAYR57ft9HmLfD/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="Python (Data Science)"
              description="
              Online Training Program on Industry Demanded Course an Python (Data Science) Conducted for Aryabhatta Knowledge University, Patna, Bihar By Softpro India Computer Technologies (P) Limited,Lucknow."
              link="https://drive.google.com/file/d/1V9YOFuwJxdHNRNDPqLD0ChSvEiM-ztxS/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cretive}
              isBlog={false}
              title="Creative & Outreach lead @GDSC BCE Patna"
              description="
              Creative & Outreach Lead at Google Developer Student Club Bakhtiyarpur College of Engineering, Patna."
              link="https://drive.google.com/file/d/1NTw6MLwRZCEy45XXUeqpwRFoxWtcFZhA/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Canva 500 Design Milestone Badge"
              description="I have successfully created more than 500+ designs on Canva, showcasing my commitment and proficiency in graphic design."
              link="https://drive.google.com/file/d/1F0u-mzTTe1wc8XRL2nbDGzdVXCdZdCh7/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="techX talk Coordinator"
              description="Successfully conducted Techxtalk 2022 as the coordinator on the eve of National Technology day in my college."
              link="https://drive.google.com/file/d/1WcMXBYnnpx9KvybI7TMF-rOTJprXaa6y/view?usp=sharing"
              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nukkad}
              isBlog={false}
              title="Nukkad Natak"
              description="I participated in a Nukkad Natak on World Environment Day to raise awareness about environmental conservation. I played the role of a young person who is passionate about protecting the environment and urged the audience to take action to reduce their environmental impact."
              link="https://drive.google.com/file/d/1nztPvVtA8kXXOIIqAEZPWXGybVy3VkcT/view?usp=sharing"
              
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={rep}
              isBlog={false}
              title="Republica Event"
              description="My participation in REPÜBLICA 23 under the Natyaksh Club, an event held on Republic Day 2023, included a role in a drama performance.The drama performance that depicted the soldier's hardships and victories during India's fight for independence."
              link="https://drive.google.com/file/d/1gN4UJHVNJ3yOE-6BFzEjO9hqLamVBdfp/view?usp=sharing"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Achievements
