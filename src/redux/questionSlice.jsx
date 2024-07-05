import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5300";

export const addQuestions = createAsyncThunk(
  "add questions",
  async (
    { title, introduction, tools, scenario, process, quiz, topic },
    { rejectWithValue }
  ) => {
    try {
      console.log(
        "createTopic getting data",
        title,
        introduction,
        tools,
        scenario,
        process,
        quiz,
        topic
      );

      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No access token found");
      }

      const response = await axios.post(
        `${apiURL}/api/question/create`,
        { title, introduction, tools, scenario, process, quiz, topic },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    isLoading: false,
    error: null,
    questions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addQuestions.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(addQuestions.fulfilled, (state, action) => {
      const data = action.payload?.Result?.QuestionSet;
      if (data) {
        return {
          ...state,
          questions: [data],
          isLoading: false,
          error: null,
        };
      }
      return state;
    });

    builder.addCase(addQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export default questionSlice.reducer;
