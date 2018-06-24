import React from "react";
import { connect } from "react-redux";
import { commentsFetch } from "../actions/comments/";
import { postsFetch } from "../actions/posts";

import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => ({
  post: state.posts.posts.find(post => post.id === props.match.params.id),
  comments: state.comments.comments[props.match.params.id] || []
});

class PostById extends React.Component {

   componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(commentsFetch(id));
    this.props.dispatch(postsFetch());
  }

  render() {

    if (!this.props.post) {
      return "Loading..."
    }

    const comments = this.props.comments.map(comment => (
      <div>
        <h2>{comment.body}</h2>
      </div>
    ));

    console.log(PostById);
    return (
        <div>
          <h2>{ this.props.post.title }</h2>
          <h1> Comments</h1>
          { comments }
          <img src={this.props.post.image} />
        </div>
    );
  }
}

export default connect(mapStateToProps)(PostById);
