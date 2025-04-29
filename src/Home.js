import '@coreui/coreui/dist/css/coreui.min.css';
import Project from './components/Project';
import Navbaar from './components/Nav';
import 'animate.css';
import React from 'react';
import picture from './picture.jpg';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import ecommercepic from './ecommercepic.png';
import blogpic from './blogpic.png';
import linear from './linearreg.png';
import ocrwtp from './ocrwtp.jpg';
import weatherapp from './weatherapp.png';
import CardFade from './components/cardfade';
import SkillCard from './components/skillcard';
import html from './html.png';
import ootyorigins from './Ootyorigins.png';

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

    function handleclickOotyorigins() {
        window.location.href = 'https://github.com/Mahesh24015/OotyOrigins'
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
                            <ul style={{ fontSize: '20px', listStyleType: 'none', textAlign: 'center' }}>
                                <li>Software Developer</li>
                                <li>Full Stack Developer</li>
                            </ul>
                        </h4>
                        <button href='https://www.linkedin.com/in/maheshnarayanabhatla/' onClick={()=>window.location='https://www.linkedin.com/in/maheshnarayanabhatla/'} className='btn btn-secondary' >linkedin</button>
                    </div>
                </Card>
            </section>


            <section class='skills'>
                <div style={{ paddingLeft: '25%', paddingRight: '25%', dislpay: 'grid', paddingTop: '5%', paddingBottom: '5%' }}>
                    <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', }}>
                        <div style={{ paddingLeft: '42%' }} ><h4 >My Skillset</h4></div>
                        <div className="gridContainer" >
                            <SkillCard skill="html" link={html} />
                            <SkillCard skill="Python" link={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png'} />
                            <SkillCard skill="django" link={'https://ucarecdn.com/a915a4be-9676-4f70-84cd-76f9183d08f7/-/resize/1050/'} />
                            <SkillCard skill="fastAPI" link={'https://avatars.githubusercontent.com/u/156354296?s=280&v=4'} />
                            <SkillCard skill="flask" link={'https://user-images.githubusercontent.com/51070104/268566349-c41e65a5-2ab9-4b54-8cbc-350ab6da746c.png'} />
                            <SkillCard skill="scikit learn" link={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png'} />
                            <SkillCard skill="git" link={'https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj'} />
                            <SkillCard skill="pytorch" link={"https://venturebeat.com/wp-content/uploads/2019/06/pytorch-e1576624094357.jpg?w=1024?w=1200&strip=all"} />
                            <SkillCard skill="MERN" link={"https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png"} />

                        </div>
                    </Card>

                </div>
            </section>











            <section class="projectsSection">
                <h2 style={{ fontSize: 34, textAlign: 'center', paddingBottom: 150 }}>My Projects</h2>

                <section class="leftsection"  >


                    <div style={{height:'500px'}} onClick={handleclickOCR}>
                        <CardFade image={ocrwtp} text="NLP project, ocr, summarization, translation"></CardFade>
                    </div>


                    <div class="givespace  align-items-center " >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickOotyorigins} >
                            <Project name={"Ooty origins"} /></div></div>



                    <div style={{height:'500px'}}  onClick={handleclickLinear}>
                        <CardFade image={weatherapp} text='weather app'  ></CardFade>
                    </div>

                    <div class="givespace  align-items-center"  >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickecommerce}>
                            <Project style={{display: 'flex'}} name={"ecommerce website"} /></div></div>

                    <div style={{height:'500px'}} onClick={handleclickBlog}>
                        <CardFade image={blogpic} text="django bootstrap, include backend" ></CardFade>
                    </div>

                    <div class="givespace  align-items-center" >
                        <div className=' flex' style={{paddingTop:'25%'}}  onClick={handleclickchat}>
                            <Project  name={"chat app"} /></div></div>


                    <div style={{height:'500px'}} onClick={handleclickLinear}>
                        <CardFade  image={linear} text="used linear regression on covid deaths prediction"></CardFade>
                    </div>


                </section>

                <section class="rightsection" >



                    <div class="givespace  align-items-center" >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickOCR} >
                            <Project name={"OCRWTP"} /></div></div>

                    <div style={{height:'500px'}} onClick={handleclickOotyorigins}>
                        <CardFade image={ootyorigins} text="MERN stack" ></CardFade>
                    </div>




                    <div class="givespace  align-items-center" >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickWeather}>
                            <Project name={"weather app"} /></div></div>


                    <div style={{height:'500px'}} onClick={handleclickecommerce}>
                        <CardFade image={ecommercepic} text="django react"></CardFade>
                    </div>


                    <div class="givespace  align-items-center" >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickBlog} >
                            <Project name={"blog application"} /></div></div>

                    <div style={{height:'500px'}} onClick={handleclickchat}>
                        <CardFade text="asynchronous chat rooms, jango, channels"></CardFade>
                    </div>


                    <div class="givespace  align-items-center" >
                        <div className=' flex' style={{paddingTop:'25%'}} onClick={handleclickLinear}>
                            <Project name={"Linear Regression"} /></div></div>




                </section>
            </section>
            <section class='footer' style={{ height: window.innerHeight / 4 }} >
                <footer style={{ width: '100%' }}>
                    <div style={{ float: 'left', width: '50%' }} >
                        <p style={{ opacity: '50%' }} >@ 2025 Mahesh Narayanabhatla</p>
                        <p style={{ opacity: '50%' }} >Made using React</p>
                    </div>
                    <div style={{ float: 'right', width: '50%' }} >
                        <a href="https://instagram.com/letsalllgorythm?igshid=eDJ2MTVnMTg4dDcz"> <p style={{ float: 'right', opacity: '50%' }} >Instagram </p> </a>
                    </div>
                </footer>
            </section>

        </>
    );
};

export default Home;