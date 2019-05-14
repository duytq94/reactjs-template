import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import "./Root.Styles.css"
import 'react-toastify/dist/ReactToastify.css'
import connect from "react-redux/es/connect/connect";
import {clearNetworkFail} from "../../general/actions";
import UserScreen from "../User/User.Screen";
import FollowerScreen from "../Follower/Follower.Screen";

class RootScreen extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.sendNetworkFail.err) {
            switch (newProps.sendNetworkFail.err) {
                case 'NETWORK_ERROR':
                    toast.warn('No network connection, please try again')
                    break
                case 'TIMEOUT_ERROR':
                    toast.warn('Timeout, please try again')
                    break
                case 'CONNECTION_ERROR':
                    toast.warn('DNS server not found, please try again')
                    break
                default:
                    toast.warn(newProps.sendNetworkFail.err)
                    break
            }
            this.props.onCallApi(clearNetworkFail())
        }
    }

    showToast = (type, message) => {
        // 0 = warning, 1 = success
        switch (type) {
            case 0:
                toast.warn(message)
                break
            case 1:
                toast.success(message)
                break
            default:
                break
        }
    }

    render() {
        return (
            <div className='viewPort'>
                <BrowserRouter>
                    <div className='viewRoot'>
                        <ToastContainer
                            autoClose={2000}
                            hideProgressBar
                            position={toast.POSITION.BOTTOM_RIGHT}
                        />
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={props => (
                                    <UserScreen showToast={this.showToast} {...props} />
                                )}
                            />
                            <Route
                                exact
                                path='/follower'
                                render={props => (
                                    <FollowerScreen showToast={this.showToast} {...props} />
                                )}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sendNetworkFail: state.sendNetworkFail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
