import React, { useRef, useState } from "react";
import { Rating } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import "./createReviews.css";
const CreateReviews = ({ handelClick }) => {
  const nameRef = useRef();
  const descRef = useRef();
  const numRef = useRef();
  const maxLength = 80;
  const [star, setStar] = useState(5);

  return (
    <div className="create-review-background">
      <div className="create-review-container">
        <form className="create-review-form">
          <CancelIcon onClick={handelClick} className="review-close" />
          <h1>garage review</h1>
          <label className="create-review-label">
            <Rating
              style={{ fontSize: 45, top: "15px" }}
              value={star}
              onChange={(event, newstar) => {
                setStar(newstar);
              }}
            />
          </label>
          <label className="create-review-label">
            <span>Name</span>
            <input
              ref={nameRef}
              type="text"
              title="Name"
              placeholder="type your name.."
            />
          </label>
          <label className="create-review-label">
            <span>Description </span>
            <textarea
              ref={descRef}
              maxLength={maxLength}
              type="text"
              title="Description"
              row={8}
              placeholder={`Write your review (max ${maxLength} chart)`}
              onChange={(e) =>
                (numRef.current.value =
                  maxLength - descRef.current.value.length)
              }
            />
            <input className="num" ref={numRef} value={maxLength} readOnly />
          </label>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              console.log({
                name: nameRef.current.value,
                desc: descRef.current.value,
                star,
              });
              handelClick();
            }}
          >
            Add Reviews
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReviews;
