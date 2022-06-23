import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import PostDetailComponent from '../components/PostPages/PostDetailComponent';

function Post() {
    const{id} = useParams();

  return (
    <MainLayout >
       <div className='container'>
        <PostDetailComponent id={id}/>
        페이지id:{id}
       </div>
    </MainLayout>
  )
}

export default Post