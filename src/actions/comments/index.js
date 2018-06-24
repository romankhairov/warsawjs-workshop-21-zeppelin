export const COMMENTS_FETCH_START = "COMMENTS_FETCH_START";
export const COMMENTS_FETCH_SUCCESS = "COMMENTS_FETCH_SUCCESS";

export const commentsStart = () => ({ type: COMMENTS_FETCH_START });
export const commentsSuccess = () => ({ type: COMMENTS_FETCH_SUCCESS, commets, id});

export const commentsFetch = () => async dispatch => {
  dispatch(commentsStart());

  const response = await fetch(`https://warsawjs-21-api.herokuapp.com/posts/${id}/comments`)
    .then(res => res.json());

  dispatch(commentsSuccess(response.comments, id));
}
