import React from "react";

export default function Form({title,settitle, desc,setDesc, notes, setNotes}) {
  const addNotesHandler=(e)=>{
    setNotes((note)=>{
      return (
        [...note, {
          title:title,
          desc:desc,
        }
        ]
      )
    })
    settitle("");
    setDesc("");
  }
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3 ">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="enter a title"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3" 
                  placeholder="write a note"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addNotesHandler}
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}