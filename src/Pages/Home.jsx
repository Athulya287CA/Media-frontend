import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {

  
//In ReactJS, “lifting state up” is a fundamental concept that plays an important role in managing the state efficiently across different components. When building React applications, it is common for multiple components to need access to the same piece of data or state.

  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between mb-3">

        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>

        </div>

        <Link to={'/watch-history'} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-warning'>Watch history <i class="fa-solid fa-right-to-bracket" style={{color: "#f46b10;"}}></i> </Link>

      </div>

      <div className="container-fluid mt-5 w-100 row">

        <div className="col-lg-9 all-videos">
          <View uploadVideoResponse={uploadVideoResponse}
          setDropVideoResponse={setDropVideoResponse}/>
        </div>

        <div className="col-lg-3 all-category">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>

      </div>
    </div>
  )
}

export default Home
