import axios from 'axios'
import './sentences.css';
import { useState, useEffect } from 'react'
import imgLeftTop from "./img/romantiv02.png"
import imgRightBottom from "./img/romantiv01.png"


const Sentences = () => {
    const [text, setText] = useState([])
    const [newNote, setNewNote] = useState('') 

    useEffect(() => {
        axios.get('http://localhost:3001/sentences')
        .then(response => {setText(response.data)})
    },[])

    const addNote = (event) => {   
      event.preventDefault()
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
      }
      axios
      .post('http://localhost:3001/sentences', noteObject)
      .then(response => {
        setText(text.concat(response.data))
        setNewNote('')
      })
    }

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

  return (
    <div >
      <div className='imgLeftTop'>
        <img src={imgLeftTop} alt="imgLeftTop"></img>
        <form onSubmit={addNote} className="entrada">
         <input placeholder="Write.." value={newNote} onChange={handleNoteChange} />
         <button type="submit">print</button>
        </form> 
      </div>
      <div className="uno">

      <p>{text.map(a => <span key={a.id}>{a.content} </span>)}</p>

      <div className='imgRightBottom'>
        <img src={imgRightBottom} alt="imgRightBottom"></img>
      </div>
      </div>
    </div>
  );
}

export default Sentences; 
