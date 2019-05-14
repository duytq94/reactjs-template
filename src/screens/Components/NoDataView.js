import React, {Component} from 'react'
import {MdInfoOutline} from "react-icons/md";
import "./NoDataView.css"
import {IconContext} from 'react-icons'

export default class NoDataView extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return (
            <div className={'noDataViewRoot'}>
                <IconContext.Provider value={{color: '#d8d8d8'}}>
                    <MdInfoOutline className='noDataViewIcon'/>
                </IconContext.Provider>
                <span className={'noDataViewTextNoData'}>No data</span>
                <button
                    className={'noDataViewBtnRetry'}
                    onClick={this.props.onRetryPress}
                >
                    <span className={'noDataViewTextRetry'}>Try again</span>
                </button>
            </div>
        )
    }
}
