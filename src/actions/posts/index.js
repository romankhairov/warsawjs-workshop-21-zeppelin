export const POSTS_FETCHING_START = "POSTS_FETCHING_START";
export const POSTS_FETCHING_SUCCESS = "POSTS_FETCHING_SUCCESS";

export const postsStart = () => ({ type: POSTS_FETCHING_START });
export const postsSuccess = (posts) => ({ type: POSTS_FETCHING_SUCCESS, posts });

export const postsFetch = () => async dispatch => {
  dispatch(postsStart());

  await new Promise(res => setTimeout(res, 1000));

  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/")
  .then(res => res.json());

  console.log(response);

  dispatch(postsSuccess(response.posts));
}

export const postCreate = formData => async dispatch => {

  const response = await fetch(`https://warsawjs-21-api.herokuapp.com/posts/`, {
    method: "POST",
    body: formData,
  }).then(res => res.json());

  if (response.ok) {
    dispatch(postCreateSuccess)
  }

}
