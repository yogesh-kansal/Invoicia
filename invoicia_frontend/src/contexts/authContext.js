import React, { Component } from 'react';

export const authContext=React.createContext();

class AuthContextProvider extends Component {
    state= {

    }

    render() {
        return (
            <authContext.Provider value={{...this.state/**add other props */}}>
                {this.props.children}
            </authContext.Provider>
        );
    }
}

export default AuthContextProvider;
