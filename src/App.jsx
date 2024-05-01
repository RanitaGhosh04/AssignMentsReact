import React from 'react'

function App() {
  return <>
  
  <div className='h-[600px] w-[750px] mt-8 m-auto'>
  <h1 className='text-[38px] font-medium text-left'>Learn web development</h1>
  <div>
   <p className='text-[18px] mt-4 h-20 pr-10 text-left'>Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.</p>
   </div>

   <div>

    <p className='text-[18px] text-left pr-5'>
    The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a className='text-blue-500 visited:text-purple-600' href='https://developer.mozilla.org/en-US/' target='#'>the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.
    </p>
    
   </div>

   <div>
    <p className='text-[18px] mt-4 h-20 pr-10 text-left'>
    If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
    </p>
   </div>
  </div>
  </>
}

export default App
