import { createClient } from 'contentful'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const SingleBlog = () => {
  const [singleBlogPosts,setSingleBlogPosts] = useState([])
  const client = createClient({
    space: "w0gaortj5cym",
    accessToken: "VCHNX-SzbrVb2flYj3B7pG0xOjTmZxt1Jxb0YkdzA8c",
  })
  const {id} = useParams()
  console.log(id)
  useEffect(()=>{
    const getEntryById = async ()=>{
      try{
        await client.getEntry(id).then(entries=>{
          console.log(entries)
          setSingleBlogPosts(entries)
        })
      }catch(error){
        console.log(error)
      }
    }
    getEntryById()
  },[])
  console.log(singleBlogPosts)
  return (
    <div>
      <p>{singleBlogPosts.fields.blogSummary}</p>
    </div>
  )
}

export default SingleBlog
