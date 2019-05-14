import React, {Component} from 'react'
import ReactLoading from "react-loading";

export default class LoadingView extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return (
            <div className="viewLoading">
                <ReactLoading
                    type={'spin'}
                    color={'#0071bb'}
                    height={'3%'}
                    width={'3%'}
                />
            </div>
        )
    }
}
