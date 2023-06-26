import React from "react";
import { useDispatch } from "react-redux";
import "./Meme.css";
import { removeMeme } from "./features/memeSlice";

/** Meme component
 *
 * displays single meme:
 * img via : imgLink
 * text on the top half of the meme: topText
 * text on the bottom half of the meme: bottomText
 *
 * dispatch(removeMeme(id)) => to remove single meme from redux by id
 *
 */

const Meme = ({ meme }) => {
  const { id, topText, imgLink, bottomText } = meme;
  const dispatch = useDispatch();
  return (
    <div className="Meme">
      <div className="Meme-container">
        <p className="Meme-top-text Meme-text">{topText}</p>
        <img src={imgLink} className="Meme-img" />
        <p className="Meme-bottom-text Meme-text">{bottomText}</p>
      </div>
      <div className="Meme-btn-container">
        <button onClick={() => dispatch(removeMeme(id))} className="Meme-btn">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
};

export default Meme;
