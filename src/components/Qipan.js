import React,{Component} from 'react'

import Qizi from './Qizi'

export default class Qipan extends Component {
    renderqizi(i) {
        return (
            <Qizi value={this.props.qizi[i]} Click={() => this.props.onClick(i)} />
        )
    }
    render() {
        return (
            <div>
                <div>
                    {this.renderqizi(0)}
                    {this.renderqizi(1)}
                    {this.renderqizi(2)}
                </div>
                <div>
                    {this.renderqizi(3)}
                    {this.renderqizi(4)}
                    {this.renderqizi(5)}
                </div>
                <div>
                    {this.renderqizi(6)}
                    {this.renderqizi(7)}
                    {this.renderqizi(8)}
                </div>
            </div>
        )
    }
}