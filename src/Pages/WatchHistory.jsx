import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'


function WatchHistory() {

  const[history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    const result = await getHistoryAPI()

    if(result.status == 200){
      setHistory(result.data)
      
    }
    else{
      console.log('api failed');
      setHistory(result.message)
      
    }
  }

  const removeVideoHistory = async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }

  console.log(history)

  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>

        {/* back to home link */}
        <Link style={{textDecoration:'none', color:'orange' ,fontSize:'30px'}} to={"/home"}>
        Bact To Home <i class="fa-solid fa-rotate-left"></i>
        </Link>

      </div>


        {/* table for watch history */}
        <div className="container mt-5 mb-3 w-100">
          <table className='table shadow w-100 p-3 m-2 border border-warning'>
            <tr className='border border-warning'>
              <th>#</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Time Stamp</th>
              <th className='text-center'>Action</th>
            </tr>

            {
              history?.length>0?history.map((video,index)=>(<tr className='border border-warning'>
                <td>{index+1}</td>
                <td>{video?.caption}</td>
                <td ><a href={video?.link} target='_blank'>{video?.link}</a></td>
                <td>{video?.timeStamp}</td>
                <td className='text-center'><button className='text-danger  btn' variant="danger" 
                onClick={()=>removeVideoHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>

              

              </tr>
              )):<p className='text-danger fw-bolder'>Nothing to display</p>
               
            }
            

          </table>
        </div>




      
    </>
  )
}

export default WatchHistory
