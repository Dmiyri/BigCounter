import React from 'react';
import s from './DisplayCount.module.css';
import InputWin from "./Input/Input";
import ButtonWin from "./Button/ButtonWin";

class DisplayCounter extends React.Component {

    render() {
        return (
                <div className={s.win}>
                    <InputWin state={this.props.state}/>
                    <ButtonWin state={this.props.state}
                               countPlus={this.props.countPlus}
                               countReset={this.props.countReset}
                    />
                </div>
        );
    }
}

export default DisplayCounter;
