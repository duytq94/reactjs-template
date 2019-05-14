import React, {Component} from 'react'
import {connect} from 'react-redux'
import "./User.Styles.css"
import LoadingView from "../Components/LoadingView";
import {getUserRequest} from "./User.Action";
import NoDataView from "../Components/NoDataView";

class UserScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            getUser: {fetching: false, data: null, err: null}
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            getUser: newProps.getUser
        })
    }

    getUserInfo = () => {
        this.props.onCallApi(getUserRequest('duytq94'))
    }

    goToFollowerScreen = () => {
        this.props.history.push('/follower')
    }

    render() {
        return (
            <div className='viewRoot'>
                {/*Header*/}
                <div className='viewHeader'>
                    <span className='textHeader'>User</span>
                </div>

                {/*Body*/}
                <div className='userScreenBody'>
                    <button
                        className={"userScreenBtn"}
                        onClick={this.getUserInfo}
                    >
                        <span className={"userScreenTextBtn"}>GET PROFILE</span>
                    </button>

                    <button
                        className={"userScreenBtn"}
                        onClick={this.goToFollowerScreen}
                    >
                        <span className={"userScreenTextBtn"}>NEXT SCREEN</span>
                    </button>

                    {this.renderDataView()}
                </div>

                {/*Loading*/}
                {this.state.getUser.fetching ?
                    <LoadingView/> :
                    null}
            </div>
        )
    }

    renderDataView = () => {
        if (this.state.getUser.data) {
            return (
                <div className={"userScreenViewWrapData"}>
                    <img alt={"user avatar"} className={"userScreenImgAvatar"}
                         src={this.state.getUser.data.avatar_url}/>
                    <span className={"userScreenTextData"}>{this.state.getUser.data.login}</span>
                    <span className={"userScreenTextData"}>{this.state.getUser.data.name}</span>
                    <span className={"userScreenTextData"}>{this.state.getUser.data.location}</span>
                </div>
            )
        } else if (this.state.getUser.err) {
            return (
                <NoDataView
                    onRetryPress={this.getUserInfo}
                />
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        getUser: state.getUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
