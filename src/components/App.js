import React,{Component} from 'react'

import Qipan from './Qipan'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            history: [
                { qizi: Array(9).fill(null) }
            ],
            isnext: true,
            stepNum: 0
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1);
        const current = history[history.length - 1];
        const qizi = current.qizi.slice();
        if (this.winner(qizi) || qizi[i]) {
            return;
        }
        qizi[i] = this.state.isnext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    qizi: qizi
                }
            ]),
            stepNum: history.length,
            isnext: !this.state.isnext
        })
    };
    winner(qizi) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (qizi[a] && qizi[a] === qizi[b] && qizi[a] === qizi[c]) {
                return qizi[a];
            }
        }
        return null;
    };
    jumpTo(step) {
        this.setState({
            stepNum: step,
            xIsNext: (step % 2) === 0,
        });
        if (step == 0) {
            this.setState({
                history: [
                    {
                        qizi: Array(9).fill(null)
                    }
                ]
            });
        }
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        const winner = this.winner(current.qizi);
        const moves = this.state.history.map((step, move) => {
            const desc = move ?'Go to move #' + move :'restart';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if (winner) {
            status = '获胜者: ' + winner;
        } else {
            status = '下一步玩家: ' + (this.state.isnext ? 'X' : 'O');
        }
        return (
            <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-around",margin:"100px" }}>
                <div >
                    <Qipan qizi={current.qizi} onClick={i => this.handleClick(i)} />
                </div>
                <div>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}