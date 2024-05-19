import Navbaar from "../../Nav";
import { Card } from "@mui/material";

function Contact ()
{
    return(
        <div style={{}}>
            <Navbaar />
            <div style={{paddingTop:window.innerWidth<778?'35%':'10%', paddingLeft:window.innerWidth<778?'10%':'30%', paddingRight:window.innerWidth<778?'10%':'30%'}}>
            <Card >
            <div style={{paddingLeft:window.innerWidth<778?'5%':'15%', paddingRight:window.innerWidth<768?'5%':'15%' , paddingTop:'15%', background: 'linear-gradient(145deg, rgb(173, 238, 251) 14%, rgb(40, 150, 234) 49%, rgba(9,9,121,1) 100%, rgb(87, 80, 233) 100%)'}}>
                <p>Phone Number: </p><Card style={{fontSize: window.innerWidth<778?12:20, textAlign:'center'}}>7995320488</Card><br/><br/>
                <p>Email: </p><Card style={{fontSize: window.innerWidth<778?12:20, textAlign:'center'}}>numamahesh2000@gmail.com</Card><br/><br/>
            </div>
            </Card>
            </div>
        </div>
    );
}

export default Contact;