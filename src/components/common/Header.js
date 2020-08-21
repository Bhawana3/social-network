import React, {lazy, Suspense} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './styles.css';

const LazyListPostComponent = lazy(() => import('../post/ListPosts'));
const LazyPostDetailsComponent = lazy(() => import('../post/PostDetails'));
const LazyUserDetailsComponent = lazy(() => import('../user/UserDetails'));
const LazySearchBoxComponent = lazy(() => import('./SearchBox'));

const Header = () => {
    return(
        <React.Fragment>
            <div className="navigationBar">
                <Link style={{fontWeight: 700,color: 'white', textDecoration: 'none'}} to='/'>Posts</Link>
                <Link style={{fontWeight: 700,color: 'white', textDecoration: 'none'}} to='/search'>Search User</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/"><LazyListPostComponent /></Route>
                    <Route exact path="/user/:userId" render={(props) => <LazyUserDetailsComponent {...props} />} />
                    <Route exact path="/post/:postId" render={(props) => <LazyPostDetailsComponent {...props} />} />
                    <Route exact path="/search"><LazySearchBoxComponent /></Route>
                </Switch>
            </Suspense>
        </React.Fragment>
    );
}

export default Header;