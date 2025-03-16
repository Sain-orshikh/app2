import React from 'react'
import { Grid2 } from '@mui/material'

const Homepage = () => {
  return (
    <>
      <div className='flex flex-col w-full min-h-screen bg-gray'>
        <div className='mt-10 ml-10 text-4xl font-bold'>
          Discover students of MAIS
        </div>
        <div className='flex flex-row justify-evenly space-around w-[90%] mx-auto mt-10'>
          <div className=''>
            {/*<Grid2 container spacing={2} columns={12} minHeight={290} >
              {displayedBlogs.map((blog) => (
              <Grid2 
                xs={12} // 1 column on extra-small screens
                sm={4}  // 2 columns on small screens and up
                key={blog._id}
                className="mx-auto"
              >
                <BlogCard blog={blog} onUpdate={handleinval} />
              </Grid2>
              ))}
            </Grid2>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage