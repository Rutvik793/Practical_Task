import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now().toString(),
        name: action.payload.name,
      };
      state.items.push(newItem);
      state.error = null;
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.error = null;
    },

    updateItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.name = action.payload.name;
        state.error = null;
      }
    },

    clearItems: state => {
      state.items = [];
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateItem,
  clearItems,
  setError,
  clearError,
} = itemsSlice.actions;

export default itemsSlice.reducer;
