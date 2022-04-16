import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface IUser {}

export interface UserState {
  user: IUser | undefined;
}

const initialState: UserState = { user: undefined };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    unloadUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { loadUser, unloadUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
