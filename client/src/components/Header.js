import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderComponent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Sign In with Google</a>
                    </li>
                )
            default:
                return (
                    <li>
                        <a href="/api/logoutuser">Logout</a>
                    </li>
                )
        }
    }

    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Feedbag
                    </Link>
                    <ul className="right">
                        {this.renderComponent()}
                    </ul>
                </div>
            </nav>
        )
    };
};

function mapStateToProps(state) {
    console.log(state);
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

// whenever there is a change in state
// mapStateToProps gets called to get 'auth' part of start which is returned by
// authReducer.js
//<li>
//    <a>Sign In with Google</a>
//</li>