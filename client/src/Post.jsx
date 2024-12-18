import React from 'react'

const Post = () => {
  return (
    <>
       <div className='post'>
          <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/photo-1643208589889-0735ad7218f0-e1658176963387.jpeg" alt="" />
          </div>
          <div className="texts">
            <h2>Five years later… Netflix hit with Dutch data access fine</h2>
            <p className="info">
            <a className="author">Aniket Chavan</a>
            <time datetime="">2024-12 8:15</time>
            </p>
            <p className='summary'>Five years later sounds like a half-baked sequel to a well-known zombie flick franchise. But its a reference to how long its taken a data access complaint against Netflix to deliver a penalty decision in the European Union.</p>
          </div>
        </div>
    </>
  )
}

export default Post
