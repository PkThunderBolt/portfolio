import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Resume.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Training & Placement Cell Student COORDINATOR              "
              date=" 2023 - present"
              content={[
                'Bakhtiyarpur College of Engineering',
              ]}
            />
            <Resumecontent
              title="Google Cloud Facilitator & Creative and Outreach Lead              "
              date="July 2022 - April 2023"
              content={[
                '@ GDSC BCE Patna                ',

              ]}
            />
            <Resumecontent
              title="SIH WINNER         "
              date="August 2022"
              content={[
                'Conducted by Government Of India & Ministry of Education              ',
                'Futter based Application under Ministry of Social Justice & Empowerment        ',

              ]}
            />
            <Resumecontent
              title="Fluxmation & Natyaksh CLUB COORDINATOR   "
              
              content={[
                'Fluxmation is an official Designing & Branding club of our College ',
                'Natyaksh is an official Art and Cultural Club of our college ',

              ]}
            />
            <Resumecontent
              title="Creating 500 designs in canva  "
              
              content={[
                '@Canva ',

              ]}
            />
            <Resumecontent
              title="Techx Talk Coordinator "
              
              content={[
                'Organised Technical Events and Workshops in College on National Technology Day 2022.',

              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Natyaksh CLUB COORDINATOR"
              date=" 2022"
              content={[
                'Natyaksh is an official Art and Cultural Club of Bakhtiyarpur college of Engineering ',
              ]}
            />
            <Resumecontent
              title="Fluxmation CLUB COORDINATOR "
              date="2022"
              content={[
                'Fluxmation is an official Designing & Branding club of Bakhtiyarpur college of Engineering.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BACHELOR OF TECHNOLOGY "
              date="2020 - 2024"
              content={[
                `B.Tech in Computer Science & Engineering `,
                'I am parsung my bachelor degree fron Bakhtiyarpur College of Engineering, Patna.',
              ]}
            />
            <Resumecontent
              title="INTERMEDIATE "
              date="2018 - 2020"
              content={[
                'From Gulabchand +2 High School Govindpur bairka, gaya',
              ]}
            />
            <Resumecontent
              title="MATRICULATION (CBSE)
              "
              date="2017"
              content={[
                'From Hansraj Public School Kharanti, BodhGaya',
              ]}
            />



            <h3 className="resume-title"> Achivements</h3>
            <Resumecontent
              title="SIH WINNER (08/2022)"
              content={[
                `Smart India Hackathon Conducted by the GOI & MoE. Worked under Ministry of Social Empowerment & Justice`,
              ]}
            />
            <Resumecontent
              title="National Inter-College Crossword Expedition-NICE22     "
              content={[
                `Conducted by AICTE & UGC with the support of EXTRA-C`,
                `Qualified for the East Zonal Finals organised by AICTE & UGC`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
