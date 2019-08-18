import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyPost } from '../actions/index';
import PriceTestContainer from './table_report';
class MyPost extends Component {
    componentDidMount() {
        this.props.fetchMyPost();
    }
    renderMyPost() {
        return (
            _.map(this.props.posts, post => {
                return (
                    <li key={post.id}>
                        {post.price}
                    </li>
                );
            })
        );
    }
    render() {
        return (
            <PriceTestContainer/>
            
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchMyPost })(MyPost);
