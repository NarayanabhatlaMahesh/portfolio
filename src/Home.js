import '@coreui/coreui/dist/css/coreui.min.css';
import Project from './Project';
import Navbaar from './Nav';
import picture from './picture.jpg';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import ecommercepic from './ecommercepic.png';
import blogpic from './blogpic.png';
import linear from './linearreg.png';
import ocrwtp from './ocrwtp.jpg';
import weatherapp from './weatherapp.png';

function Home(){
    function handleclickLinear(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/ipynb_files';
    }

    function handleclickWeather(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/FullStackProjects/weatherProject'
    }

    function handleclickecommerce(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/FullStackProjects/ecommerce'
    }

    function handleclickBlog(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/FullStackProjects/bloging'
    }

    function handleclickOCR(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/ocrwtp';
    }

    function handleclickchat(){
        window.location.href = 'https://github.com/NarayanabhatlaMahesh/FullStackProjects/chatproject'
    }

    const margintop={
        marginTop: '10%',
        paddingLeft:'10%',
        textAlign:'center',
        maxWidth:'90%',
        width:'100%'
    }

    const marginto={
        marginTop: '10%',
        paddingRight:'10%',
        textAlign:'center',
        maxWidth:'90%',
        width:'100%'
    }
    const martp = {
        marginTop: '16%',
        float:'none',
        maxWidth:'100%',
    }

    const right= {marginTop: '15%', marginLeft:'1%',marginRight:'10%', paddingLeft:'10%',float:'none', textAlign:'center', maxWidth:'89%'}
    return(
    <>
    <section class="homeSection" style={{height : window.innerHeight}} >
    <Navbaar/>
        <Card style={{marginLeft:'15%' , marginRight:'15%', marginTop:'10%', height:window.innerHeight<700?('65%'):('50%'), boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
            <div class="centerleft" style={  (window.innerWidth>425? (window.innerWidth>770? (window.innerWidth>1000?{marginTop:'15%',marginLeft:'10%'}:{marginTop:'40%', marginLeft:'15%'}) :margintop) : martp)}>
                <h1 style={{letterSpacing:window.innerWidth<768?'2px':'7px', textAlign:'center', maxWidth:'100%', width:'100%'}}> Mahesh Narayanabhatla</h1>
            </div>
            <div class="centerright" style={window.innerWidth>425?window.innerWidth>770?window.innerWidth>1000?{marginTop:'10%', marginRight:'10%'}:{marginTop:'15%', marginRight:'25%'}:marginto  :right}>
                <div class="littlemiddle" style={window.innerWidth>1000?{paddingLeft:'18%'}:{paddingLeft:'0%', paddingRight:'20%'}}>
                    <Avatar src={picture} sx={
                        { width: window.innerWidth>768?150:40, height: window.innerWidth>768?150:40, marginRight:window.innerWidth>765?'10%':window.innerWidth<350?'10%':'50%', marginLeft:window.innerWidth>765?window.innerWidth>900?'20%':'50%':'50%' }
                    } />
                </div>
                <h4 >
                    <ul style={{fontSize:'20px', listStyleType:'none', paddingLeft:window.innerWidth<770?'5%':'inherit'}}>
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

    <section class="projectsSection">
        <h2  style={{fontSize:34, textAlign:'center', paddingBottom:150}}>My Projects</h2>
        
        <section class="leftsection" >
        <div class = "givespace" >
            <div onClick={handleclickLinear}>
            <Project name={"Linear Regression"}   /></div></div>

            <div class="centerise" > <div onClick={handleclickWeather}> <Card  style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <img alt="nothing" variant="top" src={weatherapp} height={window.innerWidth<790?'75px':"250px"} />
                <Project description = {"django and weather api"}   />
            </Card></div></div>

            <div class = "givespace"  >
                <div onClick={handleclickecommerce}>
            <Project name={"ecommerce website"}  /></div></div>

            <div class="centerise" > <div onClick={handleclickBlog}> <Card  style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <img alt="nothing" variant="top" src={blogpic} height={window.innerWidth<790?'75px':"250px"} />
            <Project description = {"django bootstrap, include backend"}   />
            </Card></div></div>

            <div class = "givespace" >
                <div onClick={handleclickchat}>
            <Project name={"chat app"} /></div></div>

            <div class="centerise" > <div onClick={handleclickOCR}> <Card style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <img alt="nothing" variant="top" src={ocrwtp} height={window.innerWidth<790?'75px':"250px"} />
                <Project description={"NLP project, ocr, summarization, translation"} />
            </Card></div></div>

        </section>

        <section class="rightsection" >
            <div class="centerise"> <div onClick={handleclickLinear}> <Card style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <img alt="nothing" variant="top" src={linear} height={window.innerWidth<790?'75px':"250px"} />
            <Project description={"used linear regression on covid deaths prediction"} />
            </Card></div></div>

            <div class = "givespace" >
                <div onClick={handleclickWeather}>
            <Project name = {"weather app"}  /></div></div>

            <div class="centerise" > <div onClick={handleclickecommerce}><Card style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <img alt="nothing" variant="top" src={ecommercepic} height={window.innerWidth<790?'75px':"250px"} />
            <Project description={"django react"} />
            </Card></div></div> 

            <div class = "givespace" >
                <div onClick={handleclickBlog} >
            <Project name = {"blog application"}  /></div></div>

            <div class="centerise"  ><div onClick={handleclickchat}><Card style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                
                <Project description = {"asynchronous chat rooms, jango, channels"}   />
            </Card></div></div>

            <div class = "givespace" >
                <div onClick={handleclickOCR} >
            <Project name = {"OCRWTP"}  /></div></div>

        </section>                
    </section>
    </>
    );
}

export default Home;