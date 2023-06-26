import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   imgLink:
//     "https://c4.wallpaperflare.com/wallpaper/502/259/582/feelsbadman-pepe-meme-memes-wallpaper-preview.jpg",
//   topText: "when you hope for the best",
//   bottomText: "but springboard disappoints again",
// };

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

// console.log(memeSlice);
// console.log(memeSlice.getInitialState());

export default memeSlice.reducer;
