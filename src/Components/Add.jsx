import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo)

  //here we give url as input but need to conert to ebeded code, so for eg url:https://www.youtube.com/watch?v=B2UBMTA57JI,
  // and embeded code : "<iframe width="560" height="315" src="https://www.youtube.com/embed/B2UBMTA57JI?si=lWD6MgduzEeuyPtf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"

  // here we can see "B2UBMTA57JI" ies same in both url and iframe
  const getYoutubeLink = (e) =>{
    const {value} = e.target

    if (value.includes('v=')){
      let VID = value.split('v=')[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:``})
    }
  }

  const handleAdd = async() => {

    const{id,caption,url,link} = uploadVideo

    if(!id || !caption || !url || !link ){
      alert("Please fill the missing Feilds")
    }
    else{
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("Video Uploaded")
        handleClose()
        setUploadVideoResponse(result.data)
      }
      else{
        alert(result.message)
      }
    }
  }

  return (
    <>
    <div className="d-flex">
      <h2>Upload Videos</h2>
      <button className='p-1' style={{backgroundColor:'transparent',border:'none'}} onClick={handleShow}> <h2><i class="fa-solid fa-arrow-up-from-bracket fa-fade"></i></h2></button>

    </div>
      
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
          <Form >
              <FloatingLabel
              controlId="floatingInput1"
              label="Video ID"
              className="mb-3 custom-input"
            >
              <Form.Control className="custom-input" type="text" placeholder="Video ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
              </FloatingLabel>


              <FloatingLabel
              controlId="floatingInput2"
              label="Video title"
              className="mb-3 custom-input"
            >
              <Form.Control type="text" className="custom-input" placeholder="Video title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
              </FloatingLabel>


              <FloatingLabel
              controlId="floatingInput3"
              label="Image URL"
              className="mb-3 custom-input"
            >
              <Form.Control className="custom-input" type="text" placeholder="Image URL"  onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
              </FloatingLabel>


              <FloatingLabel
              controlId="floatingInput4"
              label="Video URL"
              className="mb-3 custom-input"
            >
              <Form.Control type="text" className="custom-input" placeholder="Video URL" onChange={getYoutubeLink}/>
              </FloatingLabel>


          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
