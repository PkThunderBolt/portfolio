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
            <h3 className="resume-title">WORK EXPERIENCE</h3>
            <Resumecontent
              title="Greenbhumi an initiative by toptrove foundation.
                          ( Graphic Designer intern)             "
              date=" Dec, 2023 - Mar, 2024"
              content={[
                'A project aims to promote planting trees through graphic designing posters and banners',
              ]}
            />
            <Resumecontent
              title="North Bihar Power Distribution Co. Ltd.  ( Database Admin. Trainee)              "
              date=" Jan, 2023 - Mar, 2023"
              content={[
                'Project:- Electricity Bill management system using HTML, CSS and SQL',
              ]}
            />
            <Resumecontent
              title="Suven Consultants and Technology Pvt.Ltd.               "
              date=" May, 2022 - Jun, 2022"
              content={[
                'Completed an intensive 4-week internship at Suven Consultants & Technology Pvt Ltd, gaining hands-on experience in front-end web development using Bootstrap framework.',
              ]}
            />
            <Resumecontent
              title="Training & Placement Cell Student COORDINATOR              "
              date=" 2023 - present"
              content={[
                'Bakhtiyarpur College of Engineering',
              ]}
            />
            <Resumecontent
              title="Google Cloud Facilitator              "
              date="Nov 2022 - Jan 2023"
              content={[
                '@ GDSC BCE Patna                ',

              ]}
            />
            <Resumecontent
              title="Techx Talk Coordinator "
              
              content={[
                'Organised Technical Events and Workshops in College on National Technology Day 2022.',

              ]}
            />
            <h3 className="resume-title">LEADERSHIP ROLES</h3>
            <Resumecontent
              title="Natyaksh CLUB COORDINATOR"
              date=" Present"
              content={[
                'Natyaksh is an official Art and Cultural Club of Bakhtiyarpur college of Engineering ',
              ]}
            />
            <Resumecontent
              title="Fluxmation CLUB COORDINATOR "
              date="Present"
              content={[
                'Fluxmation is an official Designing & Branding club of Bakhtiyarpur college of Engineering.',
              ]}
            />
            <Resumecontent
              title="Creative and Outreach Lead "
              date="July 2022 - April 2023"
              content={[
                '@GDSC BCE Patna.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">EDUCATION</h3>
            <Resumecontent
              title="BACHELOR OF TECHNOLOGY "
              date="2020 - 2024"
              content={[
                `B.Tech in Computer Science & Engineering `,
                'I am parsung my bachelor degree from Bakhtiyarpur College of Engineering, Patna.',
                '(GPA : 7.8)',
              ]}
            />
            <Resumecontent
              title="INTERMEDIATE "
              date="2018 - 2020"
              content={[
                'From Gulabchand +2 High School Govindpur bairka, gaya ',
                ' (Grade - 73%)',
              ]}
            />
            <Resumecontent
              title="MATRICULATION (CBSE)
              "
              date="2017"
              content={[
                'From Hansraj Public School Kharanti, BodhGaya ',
                '(CGPA : 9.0)',
              ]}
            />



            <h3 className="resume-title"> ACHIEVEMENTS</h3>
            <Resumecontent
              title="SIH WINNER, 23 (12/2023)"
              content={[
                `Smart India Hackathon Conducted by the GOI & MoE. Worked under Ministry of Textiles`,
              ]}
            />
            <Resumecontent
              title="SIH WINNER, 22 (08/2022)"
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
            <Resumecontent
              title="Flipkart GRID 5.0     "
              content={[
                `Cleared Level 1: E-Commerce & Tech Quiz of the Flipkart GRiD 5.0 - Information Security Challenge organised by the Flipkart`,               
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
