import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectService from "./projectService";
import { toast } from "react-toastify";

const initialState = {
    project: null,
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    category: [],
};

// Create New Project
export const createProject = createAsyncThunk(
    "projects/create",
    async (formData, thunkAPI) => {
        try {
            return await ProjectService.createProject(formData);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all Project
export const getProjects = createAsyncThunk(
    "projects/getAll",
    async (_, thunkAPI) => {
        try {
            return await ProjectService.getProjects();
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        CALC_CATEGORY(state, action) {
            const projects = action.payload;
            const array = [];
            projects.map((item) => {
                const { category } = item;

                return array.push(category);
            });
            const uniqueCategory = [...new Set(array)];
            state.category = uniqueCategory;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProject.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                console.log(action.payload);
                state.projects.push(action.payload);
                toast.success("Product added successfully");
            })
            .addCase(createProject.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload);
            })
    }
})

export const {
    CALC_CATEGORY,
} = projectSlice.actions;

export const selectIsLoading = (state) => state.product.isLoading;
export const selectProject = (state) => state.product.project;
export const selectProjects = (state) => state.product.projects;
export const selectCategory = (state) => state.product.category;

export default projectSlice.reducer;