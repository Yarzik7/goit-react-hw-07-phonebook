import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64914c892f2c7ee6c2c7f676.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk('contacts/addContacts', async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
  } catch (error) {
      thunkAPI.rejectWithValue(error.message);
  }
})

const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
  } catch (error) {
      thunkAPI.rejectWithValue(error.message);
  }
})

export { fetchContacts, addContact, deleteContact };
