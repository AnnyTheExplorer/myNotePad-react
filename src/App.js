import React, {useState} from 'react'
import Navbr from './components/Navbar';
import Form from './components/Form';
import Notes from './components/Notes';
export default function App() {
  const [title, settitle] = useState("")
  const [desc, setDesc] = useState("")
  const [notes, setNotes] = useState([]);
  return (
    <>
    <Navbr/>
    <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h3 className='mb-3'>Your Notes</h3>
          {
            notes.length===0?
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Message:</h5>
                <p className="card-text">No notes available.</p>
              </div>
            </div>:notes.map((element)=>{
              return(
                <Notes element={element} key={element.id}/>
              )
            })
          }
        </div>
      </div>
    </div>  
    </>
  )
}
