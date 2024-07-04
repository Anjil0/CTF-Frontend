import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5300";

export const createTopic = createAsyncThunk(
  "createTopic",
  async ({ topic, description, difficulty }) => {
    try {
      console.log("createTopic getting data", topic);
      console.log("createTopic getting data", description);
      console.log("createTopic getting data", difficulty);
      const token = localStorage.getItem("accessToken");
      console.log("access token of admin", token);
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await axios.post(
        `${apiURL}/api/topic/createTopic`,
        { topic: topic, description: description, difficulty: difficulty },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("GOT THE TOKEN", token);
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const fetchTopic = createAsyncThunk("fetchTopic", async () => {
  try {
    const response = await axios.get(`${apiURL}/api/topic/getAllTopic`);
    console.log("fetch data here", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const deleteTopic = createAsyncThunk("deleteTopic", async () => {
  try {
    const response = await axios.delete(`${apiURL}/api/topic/deleteTopic/:id`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const updateTopic = createAsyncThunk("updateTopic", async () => {
  const response = await axios.put(`${apiURL}/api/topic/updateTopic/:id`);
  console.log(response.data);
  return response.data;
});

const topicSlice = createSlice({
  name: "topic slice",
  initialState: {
    isLoading: false,
    topics: [],
    error: null,
  },

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createTopic.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(createTopic.fulfilled, (state, action) => {
        const data = action.payload?.Result?.Topic;
        if (data) {
          console.log("state", state);
          return {
            ...state,
            topics: [data],
            isLoading: false,
            error: null,
          };
        }
        return state;
      })

      .addCase(createTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      });

    builder.addCase(fetchTopic.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(fetchTopic.fulfilled, (state, action) => {
        state.topics = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
      builder.addCase(fetchTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder.addCase(deleteTopic.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(deleteTopic.fulfilled, (state, action) => {
        state.topics = state.topics.filter(
          (topic) => topic.id !== action.payload
        );
        state.isLoading = false;
        state.error = null;
      }),
      builder.addCase(deleteTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder.addCase(updateTopic.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(updateTopic.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedTopic = action.payload;
        state.topics = state.topics.map((topic) =>
          topic.id === updatedTopic.id ? updatedTopic : topic
        );
      }),
      builder.addCase(updateTopic.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default topicSlice.reducer;
