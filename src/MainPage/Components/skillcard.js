import { Card, CardContent } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

function SkillCard(props) {
    return (
        <>
            <div style={{ height: '5px', margin:'15px', marginBottom:'20px' }}></div>

            <div style={{ maxWidth: '65%', margin: 'auto', bottom: '30px' }}>
                <Container>
                    <Row>
                        <Col style={{ marginBottom: '20px', alignItems: 'flex-end', display: 'flex' }}>
                            <p style={{ marginBottom: '0px', marginTop: 'auto' }}>{props.level}   </p>
                        </Col>
                        <Col>
                            <Card style={{
                                height: '50px', width: '100px', margin: 'auto',marginBottom:'20px',
                                backgroundColor: 'hsla(240,100%,70%,1)',
                                backgroundImage: 'radial-gradient(at 100% 100%, hsla(166,77%,86%,1) 0px, transparent 90%),radial-gradient(at 0% 100%, hsla(314,96%,74%,1) 0px, transparent 90%),radial-gradient(at 1% 2%, hsla(233,68%,75%,1) 0px, transparent 90%),radial-gradient(at 100% 0%, hsla(218,0%,100%,1) 0px, transparent 90%)'}}>
                                <div style={{ margin: "auto" }}>
                                    <p style={{ textAlign: 'center' }}>{props.skill}</p>
                                </div>
                            </Card>
                            </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <div class="progress" >
                    <div class="progress-bar" role="progressbar" style={{ width: props.level }} aria-valuenow={props.level} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div style={{ height: '15px' }}></div>
        </>
    )
}

export default SkillCard;