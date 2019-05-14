import React, {Component} from 'react'

export default class CoverView extends Component {

    render() {
        return (
            <div style={styles.viewLoading}>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    viewLoading: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
}
