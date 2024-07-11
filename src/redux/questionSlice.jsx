import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5300";

// Thunk for adding questions using the backend api
export const addQuestions = createAsyncThunk(
  "addQuestions",
  async (
    { title, introduction, tools, scenario, process, quiz, topic },
    { rejectWithValue }
  ) => {
    try {
      // console.log(
      //   "createTopic getting data",
      //   title,
      //   introduction,
      //   tools,
      //   scenario,
      //   process,
      //   quiz,
      //   topic
      // );

      console.log("quiz here" + quiz);

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

      console.log({ data: response.data, topic });
      console.log(response);
      return { data: response.data, topic };
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Thunk for getting the questions
export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async ({ topicId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${apiURL}/api/question/getQuestionByTopic/${topicId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Fetched Data:", response.data);

      return { data: response.data, topicId };
    } catch (error) {
      console.log("Error fetching questions:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// slice for questions
const questionSlice = createSlice({
  name: "questions",
  initialState: {
    isLoading: false,
    error: null,
    questionsByTopic: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addQuestions.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(addQuestions.fulfilled, (state, action) => {
      const { data, topic } = action.payload || {};
      if (data) {
        if (!state.questionsByTopic[topic]) {
          state.questionsByTopic[topic] = [];
        }
        state.questionsByTopic[topic].push(data);
        state.isLoading = false;
        state.error = null;
      } else {
        state.isLoading = false;
        state.error = "Failed to add questions";
      }
    });

    builder.addCase(addQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || action.error.message;
    });

    builder.addCase(fetchQuestions.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      const { data, topicId } = action.payload || {};
      if (data) {
        state.questionsByTopic[topicId] = data;
        state.isLoading = false;
        state.error = null;
      } else {
        state.isLoading = false;
        state.error = "Failed to fetch questions";
      }
    });

    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export default questionSlice.reducer;
