import axios from 'axios'
import './sentences.css';
import { useState, useEffect, useRef } from 'react'
import imgLeftTop from "../resources/img/romantiv02.png"
import imgRightBottom from "../resources/img/romantiv01.png"
import imgIntroBar from "../resources/img/linea.png"
const SECRETCODE = process.env.REACT_APP_SECRETCODE


const Sentences = () => {
  const [intro, showIntro] = useState(true)
  const [text, setText] = useState([])
  const [message, setMessage] = useState('') 
  const romantiv = useRef(null)

  useEffect(() => {
      setTimeout(() => {
        showIntro(false)
        setTimeout(() => {romantiv.current.focus()}, 2000)
        //¿a really bad solution while I learn front-end animations?
      }, 4000)
      axios.get('http://localhost:3001/api/sentences')
        .then(response => {setText(response.data)})

  },[])

  const addNote = (event) => {   
    event.preventDefault()
    if (message === SECRETCODE) {
      axios.delete('http://localhost:3001/api/sentences', {})
        .then(response => {
          setMessage('')
          setText([])
        })
    }

    if (message !== "" && message !== SECRETCODE) {
      const newMessage = {
        message: message,
      }
      axios.post('http://localhost:3001/api/sentences', newMessage)
        .then(response => {
          setText(text.concat(response.data))
          setMessage('')
        })
        .catch("Error while trying to add new text")
    } 
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setMessage(event.target.value.toUpperCase())
  }

  return (
    <div>

      { intro ? 
        <div className='introBar'>
          <img src={imgIntroBar} alt="imgIntroBar"/>
        </div>
        :
        <div className='mainContent'>
          <div className='logos'>
          <div className='imgLeftTop'>
            <img src={imgLeftTop} alt="imgLeftTop"></img>
          </div>
          <div className='imgRightBottom'>
            <img src={imgRightBottom} alt="imgRightBottom"></img>
          </div>
          </div>
          <div className='secondContent'>
            <form onSubmit={addNote}>
              <p>
                {text.map(a => <span key={a.id}>{a.message} </span>)}
                <input className='writingField' type={text} value={message} onChange={handleNoteChange} ref={romantiv}/>
                <button className="romantiv" type="submit"></button>
              </p>
            </form> 
          </div>
        </div> 
      }
      
    </div>
  );
}

export default Sentences; 
