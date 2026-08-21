import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
  FullName: string;
  PhoneNumber: string;
  Email: string;
  DateOfBirth: string;
  Location: string;
  Skills: string;
  Institution: string;
  Qualification: string;
  FieldOfStudy: string;
  GraduationYear: string;
  VolunteerOrWorkExperience: string;
  AreaOfInterest: string;
}

interface ProfileState {
  profile: Profile;
  loading: boolean;
  message: string;
}

const initialProfile: Profile = {
  FullName: "",
  PhoneNumber: "",
  Email: "",
  DateOfBirth: "",
  Location: "",
  Skills: "",
  Institution: "",
  Qualification: "",
  FieldOfStudy: "",
  GraduationYear: "",
  VolunteerOrWorkExperience: "",
  AreaOfInterest: "",
};

const initialState: ProfileState = {
  profile: initialProfile,
  loading: false,
  message: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (
      state,
      action: PayloadAction<{
        name: keyof Profile;
        value: string;
      }>
    ) => {
      state.profile[action.payload.name] = action.payload.value;
    },

    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },

    clearProfile: (state) => {
      state.profile = initialProfile;
      state.message = "";
    },
  },
});

export const {
  updateProfile,
  setProfile,
  setLoading,
  setMessage,
  clearProfile,
} = profileSlice.actions;

export default profileSlice.reducer;