import '@coreui/coreui/dist/css/coreui.min.css';
import Project from './Components/Project';
import Navbaar from '../Nav';
import 'animate.css';
import React from 'react';
import picture from './ExternalFiles/picture.jpg';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import ecommercepic from './ExternalFiles/ecommercepic.png';
import blogpic from './ExternalFiles/blogpic.png';
import linear from './ExternalFiles/linearreg.png';
import ocrwtp from './ExternalFiles/ocrwtp.jpg';
import weatherapp from './ExternalFiles/weatherapp.png';
import CardFade from './Components/cardfade';
import SkillCard from './Components/skillcard';
import html from './ExternalFiles/html.png';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {



    function handleclickLinear() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/ipynb_files';
    }

    function handleclickWeather() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/weatherProject'
    }

    function handleclickecommerce() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/ecommerce'
    }

    function handleclickBlog() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/bloging'
    }

    function handleclickOCR() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/ocrwtp';
    }

    function handleclickchat() {
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/chatproject'
    }



    const margintop = {
        marginTop: '10%',
        paddingLeft: '10%',
        textAlign: 'center',
        maxWidth: '90%',
        width: '100%'
    }

    const marginto = {
        marginTop: '10%',
        paddingRight: '10%',
        textAlign: 'center',
        maxWidth: '90%',
        width: '100%'
    }
    const martp = {
        marginTop: '16%',
        float: 'none',
        maxWidth: '100%',
    }

    const right = { marginTop: '15%', marginLeft: '1%', marginRight: '10%', paddingLeft: '10%', float: 'none', textAlign: 'center', maxWidth: '89%' }
    return (
        <>
            <div style={{ backgroundColor: 'hsla(240,0%,100%,1)', backgroundImage: 'radial-gradient(at 100% 100%, hsla(166,63%,59%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(314,58%,54%,1) 0px, transparent 50%),radial-gradient(at 1% 2%, hsla(233,35%,50%,1) 0px, transparent 50%),radial-gradient(at 100% 0%, hsla(0,74%,87%,1) 0px, transparent 50%)' }}>
                <section class="homeSection" style={{ height: window.innerHeight }} >
                    <Navbaar />
                    <Card style={{ marginLeft: '15%', marginRight: '15%', marginTop: '10%', position: 'relative', height: window.innerHeight < 700 ? ('65%') : ('50%'), boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
                        <div class="centerleft" style={(window.innerWidth > 425 ? (window.innerWidth > 770 ? (window.innerWidth > 1000 ? { marginTop: '15%', marginLeft: '10%' } : { marginTop: '40%', marginLeft: '15%' }) : margintop) : martp)}>
                            <h1 class="animate__animated animate__fadeInLeft" style={{ letterSpacing: window.innerWidth < 768 ? '2px' : '7px', textAlign: 'center', maxWidth: '100%', width: '100%' }}> Mahesh Narayanabhatla</h1>
                        </div>
                        <div class="centerright" style={window.innerWidth > 425 ? window.innerWidth > 770 ? window.innerWidth > 1000 ? { marginTop: '10%', marginRight: '10%' } : { marginTop: '15%', marginRight: '25%' } : marginto : right}>
                            <div class="littlemiddle" style={window.innerWidth > 1000 ? { paddingLeft: '5%' } : { paddingLeft: '10%', paddingRight: '20%' }}>
                                <Avatar src={picture} sx={
                                    { width: window.innerWidth > 768 ? 150 : 40, height: window.innerWidth > 768 ? 150 : 40, marginRight: window.innerWidth > 765 ? '5%' : window.innerWidth < 350 ? '10%' : '20%', marginLeft: window.innerWidth > 765 ? window.innerWidth > 900 ? '20%' : '50%' : '50%' }
                                } />
                            </div>
                            <h4>
                                <ul style={{ fontSize: '20px', listStyleType: 'none', paddingLeft: window.innerWidth < 770 ? '5%' : 'inherit' }}>
                                    <li>Web Developer</li>
                                    <li>Software Developer</li>
                                    <li>Mobile App Developer</li>
                                    <li>Data Scientist</li>
                                    <li>Machine Learning Engineer</li>
                                    <li>Full Stack Developer</li>
                                </ul>
                            </h4>
                        </div>
                    </Card>
                </section>

                <section class='skills' style={{ position: 'relative', alignItems: 'center' }}>
                    
                    <div style={{
                        height: window.innerHeight, dislpay: 'flex', backgroundColor: 'hsla(0,0%,100%,1)',
                        backgroundImage: 'radial-gradient(at 80% 100%, hsla(64,69%,71%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(340,23%,81%,1) 0px, transparent 50%)'
                    }}><div style={{height:'10%'}} ></div>
                        <Card className="alignItemsCenter" style={{
                            Top: '25%', maxWidth: '65%', margin: 'auto',backgroundColor: 'rgba(255, 255, 255, 0.6)' ,
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
                        }}>
                            <div style={{ margin: 'auto', }} >
                                <Container>
                                    <Row>
                                        <Col>
                                            <SkillCard skill="Spring Boot" level='75%' />
                                            <SkillCard skill="SQL" level='80%' />
                                        </Col>
                                        <Col>
                                            <SkillCard skill="Html" level='60%' />
                                            <SkillCard skill="Java" level='60%' />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <SkillCard skill="Python" level='50%' />
                                            <SkillCard skill="Git" level='60%' />
                                        </Col>
                                        <Col>
                                            <SkillCard skill="ML" level='80%' />
                                            <SkillCard skill="Deep Learning" level='50%' />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <SkillCard skill="Django" level='50%' />
                                        </Col>
                                        <Col>
                                            <SkillCard skill="Scikit Learn" level='70%' />
                                        </Col>
                                    </Row>
                                </Container>


                            </div>
                        </Card>

                    </div>
                </section>

                <section class="projectsSection" style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 style={{ fontSize: 34, textAlign: 'center', paddingBottom: 150 }}>My Projects</h2>

                    <section class="leftsection"  >
                        <div class="givespace" >
                            <div onClick={handleclickLinear}>
                                <Project name={"Linear Regression"} /></div></div>

                        <div onClick={handleclickLinear}>
                            <CardFade image={weatherapp} text='weather app'  ></CardFade>
                        </div>

                        <div class="givespace"  >
                            <div onClick={handleclickecommerce}>
                                <Project name={"ecommerce website"} /></div></div>

                        <div onClick={handleclickBlog}>
                            <CardFade image={blogpic} text="django bootstrap, include backend" ></CardFade>
                        </div>

                        <div class="givespace" >
                            <div onClick={handleclickchat}>
                                <Project name={"chat app"} /></div></div>

                        <div onClick={handleclickOCR}>
                            <CardFade image={ocrwtp} text="NLP project, ocr, summarization, translation"></CardFade>
                        </div>

                    </section>

                    <section class="rightsection" >

                        <div onClick={handleclickLinear}>
                            <CardFade image={linear} text="used linear regression on covid deaths prediction"></CardFade>
                        </div>

                        <div class="givespace" >
                            <div onClick={handleclickWeather}>
                                <Project name={"weather app"} /></div></div>


                        <div onClick={handleclickecommerce}>
                            <CardFade image={ecommercepic} text="django react"></CardFade>
                        </div>


                        <div class="givespace" >
                            <div onClick={handleclickBlog} >
                                <Project name={"blog application"} /></div></div>

                        <div onClick={handleclickchat}>
                            <CardFade text="asynchronous chat rooms, jango, channels"></CardFade>
                        </div>

                        <div class="givespace" >
                            <div onClick={handleclickOCR} >
                                <Project name={"OCRWTP"} /></div></div>

                    </section>
                </section>

                <section class='footer' style={{ height: window.innerHeight / 4 }} >
                    <footer style={{ width: '100%' }}>
                        <div style={{ float: 'left', width: '50%' }} >
                            <p style={{ opacity: '50%' }} >@ 2023 Mahesh Narayanabhatla</p>
                            <p style={{ opacity: '50%' }} >Made using React</p>
                        </div>
                        <div style={{ float: 'right', width: '50%' }} >
                            <a href="https://instagram.com/letsalllgorythm?igshid=eDJ2MTVnMTg4dDcz"> <p style={{ float: 'right', opacity: '50%' }} >Instagram </p> </a>
                        </div>
                    </footer>
                </section>

            </div>
        </>
    );
};

export default Home;