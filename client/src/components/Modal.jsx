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
      <source src={`https://docstream-server.onrender.com/api/v1/video/stream/${URL}/${jwtToken}`} type="video/mp4" />
    </video>
      </>
    </div>
  )
}

export default Modal


