import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Feedbag
                    </a>
                    <ul className="right">
                        <li>
                            <a>Sign In with Google</a>
                        </li>
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
// mapStateToProps gets called get 'auth' part of start which is returned by
// authReducer.js