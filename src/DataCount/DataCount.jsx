import React from 'react';
import s from './DataCount.module.css';
import InputData from "./Input/InputData";
import ButtonData from "./Button/ButtonData";


class DataCount extends React.Component {

    render() {
        return (
            <div className={s.win}>
                <InputData state={this.props.state}
                           onMinValueAdd={this.props.onMinValueAdd}
                           onMaxValueAdd={this.props.onMaxValueAdd}/>
                <ButtonData addCount={this.props.addCount}
                            setDisable={this.props.state.setDisable}/>
            </div>
        );
    }
}

export default DataCount;
