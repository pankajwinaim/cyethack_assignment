import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Item 1', details: 'Details of Item 1' },
    { id: 2, name: 'Item 2', details: 'Details of Item 2' },
    { id: 3, name: 'This is demo', details: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci' },

    // Add more items here
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
