const addSong = (state, { payload }) => {
  state.songs = [...state.songs, payload.song];
};

const reducers = { addSong };

export default reducers;
