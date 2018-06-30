import React from "react";
import { connect } from "react-redux";
import { postsFetch } from "../actions/posts";
import { Link } from "react-router-dom";
import { isLoading } from "../components/isLoading";


const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
})

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(postsFetch());
  }

  render() {

    const posts = this.props.posts.map(post => (
      <Link to={`/posts/${post.id}`} key={`posts-${post.id}`}>
        <h2>{post.title}</h2>
        <h3>{post.owner}</h3>
        <img src={post.image} alt=""/>
      </Link>
    ));

    return (
      <div>
        <Link>
        <h1>Posts</h1>
        { posts }
      </div>

    );
  }
}

export default connect(mapStateToProps)(Posts);
