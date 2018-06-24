export const POST_FETCHING_START = "POST_FETCHING_START";
export const POST_FETCHING_SUCCESS = "POST_FETCHING_SUCCESS";

export const postsStart = () => ({ type: POST_FETCHING_START });
export const postsSuccess = (posts) => ({ type: POST_FETCHING_SUCCESS, posts });

export const postsFetch = () => async dispatch => {
  dispatch(postsStart());

  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/")
  .then(res => res.json());

  console.log(response);

  dispatch(postsSuccess());
}
