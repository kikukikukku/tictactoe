import React,{Component} from 'react'

export default class Qizi extends Component {
    constructor() {
        super()
        this.state = {
            value: null
        }
    }
    render() {
        const qizistyle = {
            background: "#fff",
            border: "1px solid #999",
            float: "left",
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "34px",
            height: "34px",
            marginRight: "-1px",
            marginTop: "-1px",
            padding: 0,
            textAlign: "center",
            width: "34px",
        }
        return (
            <div style={qizistyle} onClick={this.props.Click}>
                {this.props.value}
            </div>
        )
        
    }
}