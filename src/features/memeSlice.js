import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memes: [],
};
const memeSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {
    removeAllMemes: (state) => {
      state.memes = [];
    },
    removeMeme: (state, action) => {
      const memeId = action.payload;
      state.memes = state.memes.filter((meme) => meme.id !== memeId);
    },
    addMeme: (state, action) => {
      const newMeme = action.payload;
      state.memes = [...state.memes, newMeme];
    },
  },
});

export const { removeMeme, addMeme, removeAllMemes } = memeSlice.actions;

export default memeSlice.reducer;
