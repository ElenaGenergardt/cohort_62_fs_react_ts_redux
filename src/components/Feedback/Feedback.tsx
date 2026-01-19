import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import "./styles.css"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedbackSplice/feedbackSlice"

function Feedback() {
  const dispatch = useAppDispatch()
  const feedback = useAppSelector(feedbackSliceSelectors.feedback)
  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }
  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }
  const resetResult = () => {
    dispatch(feedbackSliceActions.resetResult())
  }
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{feedback.like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{feedback.dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResult} />
    </div>
  )
}
export default Feedback
