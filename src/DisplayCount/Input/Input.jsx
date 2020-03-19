import React from 'react';
import s from './Input.module.css';


class InputWin extends React.Component {

    render() {

        let valueSet = this.props.state.inputError ? 'Error value' :
            this.props.state.setError ? "SET BUTTON" :
                this.props.state.countValue;

        let classForRed = this.props.state.countValue === this.props.state.maxValue ||
        this.props.state.inputError||
        this.props.state.setError ? `${s.redSucks}` : `${s.inputWin}`;

        return (
            <div className={classForRed}>
                {valueSet}
            </div>
        );
    }
}

export default InputWin;
