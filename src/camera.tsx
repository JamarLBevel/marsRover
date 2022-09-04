import React from "react";
import { useEffect,useState } from "react";
import {Card,Row,Col,Image,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Camera(){
const [data,setData] = useState<any[]>([])
useEffect(() => {
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=IfEc7ajHAr5Mt9Rfct8k2jx0oanEmQ83ldg3ayXD')
.then((response) => response.json())
.then((result) => setData(result.photos))
},[])


    return (
        <div style={{backgroundColor:'black'}}>
            <Container>
            <Row className="align-items-center" xs={1} md={2} lg={2} style={{textAlign:'center'}}>
            <Col>
            <h1 style={{color:'white'}}>Mars Rover Photo's</h1>
            </Col>
            <Col>
            <Image fluid src='https://d.newsweek.com/en/full/1989062/mars.jpg?w=1600&h=1200&q=88&f=9f856919ce16ef0ca620a6c189e3adf1' />
            </Col>
            </Row>
            </Container>
             <Row xs={1} md={2} lg={4} className='g-4'>
            {data.map((da) => (

                   <Col>
                    <Card className='shadow' style={{borderColor:'black'}}>
                        <Image src={da.img_src} alt='rover' fluid />
                    </Card>
                    </Col>
            ))}

            </Row>

        </div>
    );
}