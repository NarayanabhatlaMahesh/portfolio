import { Card } from "@mui/material";

function SkillCard(props) {
    return (
        <>
            <div>
                <Card style={{ backgroundColor: 'white', boxShadow: '0px 10px 20px 0px rgb(0 0 0 / 5%)', height: '100px', paddingTop: '18%' }}>
                    <div className="mx-auto" style={{ margin: "0 auto" }}>
                        <div className="mx-auto flex" style={{display: 'flex'}}>
                            <img className="mx-auto" alt="none" src={props.link} style={{ maxWidth: "50px", maxHeight:'25px' }}></img>
                        </div>
                        <p className="p-2" style={{textAlign:'center'}} >{props.skill}</p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default SkillCard;