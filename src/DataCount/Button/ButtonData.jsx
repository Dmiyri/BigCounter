import React from 'react';
import s from './ButtonData.module.css';

class ButtonData extends React.Component {

    render() {

        return (
            <div className={s.buttonData}>
                <button disabled={this.props.setDisable} onClick={this.props.addCount}>set</button>
            </div>
        );
    }
}

export default ButtonData;
