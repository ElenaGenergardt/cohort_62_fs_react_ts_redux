import { createAppSlice } from "store/createAppSlice"
const feedbackInintialState = {
  like: 0,
  dislike: 0,
}
export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInintialState,
  reducers: {
    like: state => {
      state.like = state.like + 1
    },
    dislike: state => {
      state.dislike = state.dislike + 1
    },
    resetResult: state => {
      state.like = 0
      state.dislike = 0
    },
  },
  selectors: {
    feedback: state => {
      return {
        like: state.like,
        dislike: state.dislike,
      }
    },
  },
})
export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
