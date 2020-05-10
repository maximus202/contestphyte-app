import React, { Component } from 'react';
import PostSignUpContent from '../../components/PostSignUpContent/PostSignUpContent';

class PostSignUp extends Component {
  render() {
    return (
      <PostSignUpContent contest={this.props.match.params.contestId} participant={this.props.match.params.participantId} />
    );
  }
}

export default PostSignUp;
