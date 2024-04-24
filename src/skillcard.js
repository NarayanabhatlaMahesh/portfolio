import { Card, CardContent  } from "@mui/material";

function SkillCard(props){
    return(
        <>
        <div>
            <Card  style={{height:'100px', paddingTop:'18%',
        backgroundColor:'hsla(167,0%,100%,1)',
        backgroundImage:
        'radial-gradient(at 0% 100%, hsla(239,100%,77%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%'
        }}>
                <div style={{ margin:"0 auto"}}>
                    <img src={props.link} style={{maxWidth:"50px",alignItems:"center", margin:"0 auto"}}></img>
                    <p style={{paddingLeft:'25%' , paddingTop:'5px' }}>{props.skill}</p>
                </div>
            </Card>
        </div>
        </>
    )
}

export default SkillCard;