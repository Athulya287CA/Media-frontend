import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <>
    {/* main page */}
       <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col lg={1}></Col>
        <Col lg={5}>
        <h1 style={{color:"white",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis eaque maxime omnis error expedita quis soluta ea quas accusantium excepturi, repudiandae tenetur, cupiditate in eius ut nihil alias a!</p>
        <Link style={{textDecoration:'none'}} to={'/home'} className='btn btn-warning'>Get Started</Link>
        
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
        <img src="https://i.pinimg.com/originals/f5/7f/4e/f57f4e47c4faab3ea7b357a85910a80b.gif" alt="" />
        </Col>
        
       </Row>
<br /><br />
       {/* 2nd page: feature */}
      <div className="container mt-4 mb-5 d-flex flex-column w-100 justify-content-center align-items-center ">
        <h2 className='text-warning text-center'>Features</h2>
        <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
{/* including 3 cards */}
        <Card className='bg-warning text-secondary fw-bolder' style={{ width: '22rem', height:'28rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/a3/b1/da/a3b1da096cd1004d8f2c918d3e0a2499.gif"style={{width: '100%'}} />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text className='text-secondary fw-bolder'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, eligendi quis sequi veritatis alias quisquam? Deserunt voluptatem nemo, consectetur tenetur debitis labore incidunt, soluta explicabo eum sunt recusandae officiis doloribus..
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card className='bg-warning text-secondary fw-bolder' style={{ width: '22rem', height:'28rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/f2/9d/c5/f29dc579dc619ff513651282766e6940.gif" style={{width: '100%'}}/>
          <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text className='text-secondary fw-bolder'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tempora sit molestiae quo id quae assumenda aliquam, enim doloremque iure quas dolores ipsum, eos reiciendis nam culpa, quibusdam excepturi explicabo.
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card className='bg-warning text-secondary fw-bolder' style={{ width: '22rem', height:'28rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/45/1f/9d/451f9db8e463c335a471b83bda24c71a.gif" style={{width: '100%'}}/>
          <Card.Body>
            <Card.Title>Categorized Video</Card.Title>
            <Card.Text className='text-secondary fw-bolder'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo voluptatibus voluptatem impedit odit, accusantium amet nobis vel tempora blanditiis eveniet non architecto fuga. Impedit explicabo quas sit consequuntur mollitia.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>

      </div>

      {/* detail section */}

      <div className="container border border-2 border-warning d-flex align-items-center justify-content-center mt-5 p-3">

        {/* paragraph */}
        <div className="col-lg-5 ">
          <h4 className='text-warning fw-bolder'>Simple, Powerful and Fast</h4>

          <h6 className='mb-3 text-justify'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aut quia fugit optio dolorem at doloribus repellendus alias architecto suscipit quidem? A eveniet illum, recusandae inventore consectetur excepturi aperiam dolor!</h6>

          <h6 className='mb-3 text-justify'><span className='text-warning fw-bolder'>Categorize Videod</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aut quia fugit optio dolorem at doloribus repellendus alias architecto suscipit quidem? A eveniet illum, recusandae inventore consectetur excepturi aperiam dolor!</h6>

          <h6 className='mb-3 text-justify'><span className='text-warning fw-bolder'>Managing Videos</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aut quia fugit optio dolorem at doloribus repellendus alias architecto suscipit quidem? A eveniet illum, recusandae inventore consectetur excepturi aperiam dolor!</h6>
        </div>

        {/*Video  */}
        <div className="col-lg-5 mt-4 m-4 ">
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=6-v4nVihJErjVFcp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>


      </div>
    </>
  )
}

export default LandingPage
