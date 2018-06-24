import React from "react";
import { connect } from "react-redux";
import { commentsFetch } from "../actions/comments/";
import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => ({
  post: state.posts.posts.find(post => post.id === props.match.params.id),
  comments: state.comments.comments[props.match.params.id] || []
});

class PostById extends React.Component {

   componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(commentsFetch(id));
  }

  render() {
    const comments = this.props.comments.map(comment => (
      <div>
        <h2>{comment.body}</h2>
      </div>
    ));

    console.log(PostById);
    return (
        <div>
          <h1>PostById</h1>
          { comments }
        </div>
    );
  }
}

export default connect(mapStateToProps)(PostById);
