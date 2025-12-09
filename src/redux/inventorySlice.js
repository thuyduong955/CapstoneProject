import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter();

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Generate 5000 dummy products
    const products = Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 1000),
      quantity: Math.floor(Math.random() * 100),
    }));
    return products;
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: productsAdapter.getInitialState({ loading: false, error: null }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default inventorySlice.reducer;
export const inventorySelectors = productsAdapter.getSelectors((state) => state.inventory);
