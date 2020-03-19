import React from 'react';
import s from './ButtonWin.module.css';

class ButtonWin extends React.Component {

    render() {

        return (
            <div className={s.buttonWin}>
                <button disabled={this.props.state.incDisables} onClick={this.props.countPlus}>inc</button>
                <button disabled={this.props.state.resetDisables} onClick={this.props.countReset}>reset</button>
            </div>
        );
    }
}

export default ButtonWin;
