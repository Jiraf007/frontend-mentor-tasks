import './App.css'

function App() {

  return (
    <>
      <div className='card'>
        <div className='qr-image'>
          <img src='image-qr-code.png' alt='QR Code' width={288} height={288} />
        </div>
        <div className='text-block'>
          <p className='text-title'>Improve your front-end skills by building projects</p>
          <p className='text-regular'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default App
