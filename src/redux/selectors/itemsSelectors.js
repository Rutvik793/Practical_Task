export const selectAllItems = state => state.items.items;

export const selectItemsCount = state => state.items.items.length;

export const selectItemsError = state => state.items.error;

export const selectItemById = (state, itemId) => {
  return state.items.items.find(item => item.id === itemId);
};

export const selectIsItemsEmpty = state => state.items.items.length === 0;
