import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../services/allAPI';


function VideoCard({video, insideCategory, setDeleteVideoResponse}) {
  
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = async() => {  setShow(true);

    const{caption,link}=video

    let today = new Date()

    // console.log(new Intl.DateTimeFormat("en-US", {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today));

    let timeStamp=new Intl.DateTimeFormat("en-US", {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    
    let videoHistory= {caption,link,timeStamp}


    //api call
    await addHistoryAPI(videoHistory)



  }
  
  const dragStarted=(e,id)=>{
    console.log("Video drag started : ",id);
    e.dataTransfer.setData("videoId",id)
  }

  if (!video || !video.url) {
    return null; // Or return a placeholder if preferred
  }

  const removeVideo = async(id) =>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  return (
    <>
      
      <Card style={{ width: '18rem' }} className='m-3' draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img onClick={handleShow} variant="top" width={'100%'} height={'100%'} src={video.url} />
      <Card.Body> 
        <div className="d-flex justify-content-between">
          <Card.Title style={{fontSize:"1rem"}}>{video.caption}</Card.Title>
          {insideCategory?null:
          <Button className='text-light btn' variant="danger" onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash"></i></Button>
          }
          
        </div>
        
        
        
      </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>

        {/* give embeded link of the video with keywoed autoplay-1 in src */}
        <Modal.Body><iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
