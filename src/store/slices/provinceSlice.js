import { api } from '@/services/api';
import { get } from '@/services/request';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const provinceSlice = createSlice({
  name: 'provinces',
  initialState: {
    provinces: [],
    district: [],
    ward: []
  },
  reducers: {
    setProvince: (state, action) => {
      state.provinces = action.payload.data;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
    setWard: (state, action) => {
      state.ward = action.payload;
    }
  }
});

export const { setProvince, setDistrict, setWard } = provinceSlice.actions;

export const getProvinces = () => async (dispatch) => {
  const response = await get(api.province);
  dispatch(setProvince({ data: response.results }));
};

export default provinceSlice.reducer;
