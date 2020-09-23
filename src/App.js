import React from "react";

import Home from "@/pages/Home";
import User from "@/pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { userStore } from "@/redux/store";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/user"
                        render={() => {
                            return (
                                <Provider store={userStore}>
                                    <User></User>
                                </Provider>
                            );
                        }}
                    />

                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
