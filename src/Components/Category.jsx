import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard'



function Category(dropVideoResponse) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[categoryName,setCategoryName] = useState("")
  const[allCategories,setAllCategories] = useState([])


//add the categoryName 
  const handleAdd = async() => {
    if (categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      // console.log(result)
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories();
      }
      else{
        console.log(result.message)
      }

    }
    else{
      alert("Please fill the Missing Feilds")
    }
  
  }
  // console.log(categoryName);


  const getCategories = async() =>{
    const {data} = await getCategoryAPI()
    setAllCategories(data)
  }
  // console.log(allCategories);

  const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver=(e)=>{
    console.log("Video drag over the category");
    e.preventDefault()
  }
  console.log(allCategories)

  const videoDrop = async(e,categoryId)=>{
    const videoId= e.dataTransfer.getData("videoId")
    console.log(videoId,"video dropped into category id :", categoryId)
    const {data} = await getAVideoAPI(videoId)
    console.log(data) 
    const selectedCategory = allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory)
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }
  
  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const videoDragStarted = (e,videoId,categoryId)=>{
    let dataShare = {videoId,categoryId }
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }

  return (
    <>
      <div className="d-grid">
      <Button onClick={handleShow} className='btn btn-warning' >Add Category</Button>
      </div>

      {/* modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
          <Form >
              <FloatingLabel
              controlId="floatingInput5"
              label="Add Category"
              className="mb-3 custom-input"
            >
              <Form.Control className="custom-input" type="text" style={{color:'black'}} placeholder="Add Category" 
              onChange={e=>setCategoryName(e.target.value)}/>
              </FloatingLabel>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

 
       {
        allCategories?.length>0?allCategories.map(category=>(
          <div className="border border-3 m-3 p-1"
          droppable="true" onDragOver={e=>dragOver(e)}
          onDrop={e=>videoDrop(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h4>{category?.categoryName}</h4>
              <Button className='text-light btn' variant="danger" onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash"></i></Button>
            </div>

            <Row>
              {
                category?.allVideos.length>0?category?.allVideos.map(card=>(
                  <Col sm={12} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                    <VideoCard video= {card}  insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </div>
        )):<p> No Categories Created</p>
       }
    </>
  )
}

export default Category
