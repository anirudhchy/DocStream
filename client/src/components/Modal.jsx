import React from 'react'


function Modal({ visible, onClose, URL }) {

  var jwtToken = ''

  const handleOnClose = (e) => {
    if (e.target.id == "container") onClose();
  }

  if (!visible) return null;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {

    jwtToken = user.token
    console.log(`http://localhost:3000/api/v1/video/stream/${URL}/${jwtToken}`);

  } 

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black 
    bg-opacity-30 backdrop-blur-sm flex justify-center 
    items-center">
      <>
      <video id="videoPlayer" width="650" controls  autoplay>
      <source src={`http://localhost:3000/api/v1/video/stream/${URL}/${jwtToken}`} type="video/mp4" />
    </video>
    {/* muted="muted" */}
      </>
    </div>
  )
}

export default Modal


// http://localhost:3000/api/v1/video/stream/053ecbd2-9a5c-41b9-b452-355b40cf84f7/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U3OGRiMDNhZTMyOTQ2M2E3MzJiYjgiLCJuYW1lIjoiUGFyYW0gU2luZ2giLCJpYXQiOjE2NzYyNjI1MTgsImV4cCI6MTY3ODg1NDUxOH0.UkLStsGMwBHRDVPWoglI2p1KxW2qIPZkRjwK5Oo1RKg