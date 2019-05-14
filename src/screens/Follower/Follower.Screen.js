import React, {Component} from 'react'
import {connect} from 'react-redux';
import LoadingView from "../Components/LoadingView";
import NoDataView from "../Components/NoDataView";
import "./Follower.Styles.css"
import {getFollowerRequest} from "./Follower.Action";
import {MdArrowBack} from "react-icons/md";
import {IconContext} from 'react-icons'

class FollowerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            getFollower: {fetching: false, data: null, err: null}
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            getFollower: newProps.getFollower
        })
    }

    onBackPress = () => {
        this.props.history.goBack()
    }

    getFollower = () => {
        this.props.onCallApi(getFollowerRequest('duytq94'))
    }

    render() {
        return (
            <div className='viewRoot'>
                {/*Header*/}
                <div className='viewHeader'>
                    <button
                        className={'btnHeader'}
                        onClick={this.onBackPress}
                    >
                        <IconContext.Provider value={{color: 'white', className: 'iconHeader'}}>
                            <MdArrowBack/>
                        </IconContext.Provider>
                    </button>
                    <span className='textHeader'>Follower</span>
                </div>

                {/*Body*/}
                <div className='followerScreenBody'>
                    <button
                        className={"followerScreenBtn"}
                        onClick={this.getFollower}
                    >
                        <span className={"followerScreenTextBtn"}>GET FOLLOWER</span>
                    </button>

                    {this.renderDataView()}
                </div>

                {/*Loading*/}
                {this.state.getFollower.fetching ?
                    <LoadingView/> :
                    null}
            </div>
        )
    }

    renderDataView = () => {
        if (this.state.getFollower.data) {
            let viewListFollower = []
            this.state.getFollower.data.map((item, index) => {
                return viewListFollower.push(
                    <div className={"followerScreenViewWrapItem"} key={index}>
                        <img alt={"follower avatar"} className={"followerScreenImgAvatar"} src={item.avatar_url}/>
                        <span className={"followerScreenTextItem"}>{item.login}</span>
                    </div>
                )
            })
            return (
                <div className={"followerScreenViewWrapData"}>
                    {viewListFollower}
                </div>
            )
        } else if (this.state.getFollower.err) {
            return (
                <NoDataView
                    onRetryPress={this.getFollower}
                />
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        getFollower: state.getFollower
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: object => dispatch(object)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerScreen)
