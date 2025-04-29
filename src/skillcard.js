import { Card  } from "@mui/material";

function SkillCard(props){
    return(
        <>
        <div>
            <Card  style={{backgroundColor:'white',boxShadow:'0px 10px 20px 0px rgb(0 0 0 / 5%)', height:'100px', paddingTop:'18%'}}>
                <div style={{ margin:"0 auto"}}>
                    <img alt="none" src={props.link} style={{maxWidth:"50px",alignItems:"center", margin:"0 auto"}}></img>
                    <p style={{paddingLeft:'25%' , paddingTop:'5px' }}>{props.skill}</p>
                </div>
            </Card>
        </div>
        </>
    )
}

export default SkillCard;