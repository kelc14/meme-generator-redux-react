import React, { useState } from "react";
import "./MemeForm.css";
import { v4 as uuid } from "uuid";

import { useDispatch } from "react-redux";
import { addMeme } from "./features/memeSlice";

/** Render MemeForm
 *
 * props: dispatch(addMeme) - function to set state by adding new meme in Meme array
 *
 * - form component which includes fields for each "blank" in creating a meme */

const MemeForm = () => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    imgLink: "",
    topText: "",
    bottomText: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send formData to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // add an id to use for meme key and id for deleting memes later
    formData.id = uuid();
    // add form through dispatch
    dispatch(addMeme(formData));
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** RENDER:
   *
   */
  return (
    <div className="MemeForm">
      <form onSubmit={handleSubmit} className="MemeForm-container">
        <div className="MemeForm-input-container">
          <label htmlFor="imgLink" className="MemeForm-label">
            Image Link:
          </label>
          <input
            id="imgLink"
            name="imgLink"
            type="text"
            placeholder="Image Link"
            onChange={handleChange}
            value={formData.imgLink}
            className="MemeForm-input"
            required
          />
        </div>
        <div className="MemeForm-input-container">
          <label htmlFor="topText" className="MemeForm-label">
            Top Text:
          </label>
          <input
            id="topText"
            name="topText"
            type="text"
            placeholder="Text for Top of Meme"
            onChange={handleChange}
            value={formData.topText}
            className="MemeForm-input"
            required
          />
        </div>
        <div className="MemeForm-input-container">
          <label htmlFor="bottomText" className="MemeForm-label">
            Bottom Text:
          </label>
          <input
            id="bottomText"
            name="bottomText"
            type="text"
            placeholder="Text for Bottom of Meme"
            onChange={handleChange}
            value={formData.bottomText}
            className="MemeForm-input"
            required
          />
        </div>

        <div className="MemeForm-btn-container">
          <button className="MemeForm-btn">Generate Meme!</button>
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
