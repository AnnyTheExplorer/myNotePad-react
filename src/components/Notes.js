import React from "react";

export default function Notes({ element }) {
  console.log(element);
  return (
    <>
      <div className="card mb-3 text-capitalize">
        <div className="card-body">
          <h3 className="card-title">{element.title}</h3>
          <p className="card-text">{element.desc}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
          <button className="btn btn-danger mx-2">Delete</button>
        </div>
      </div>
    </>
  );
}
