import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

const Home = ({ currentUser }) => {
  return (
    <div className="home center">
      <h1 className="pink-text lighten-1 z-depth-0" >MakeStories</h1>
      {currentUser && currentUser ? (

                <div>
                    <p className="grey-text text-darken-1"><em>MakeStories is the best amp story builder to create amp stories with zero coding in just a few minutes with tools and editor like drag-drop and many more.
                      </em>  </p><br></br> <br></br>
                     <p className="grey-text text-darken-2">Welcome to MakeStories, <em><b>{currentUser.email}</b> </em> !!</p>

                </div>

      ) : (
        <div>
        <p className="grey-text text-darken-1"><em>MakeStories is the best amp story builder to create amp stories with zero coding in just a few minutes with tools and editor like drag-drop and many more.
        </em>  </p><br></br> <br></br>
        <p className="form-text text-muted m-4">New to the MakeStories? <Link to="/sign-up"> Create account</Link></p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Home);
