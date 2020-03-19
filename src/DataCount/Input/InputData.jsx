import React from 'react';
import s from './InputData.module.css';


class InputWin extends React.Component {

    onMinValueChange = (e) => {
        this.props.onMinValueAdd(+e.currentTarget.value)
    };
    onMaxValueChange = (e) => {
        this.props.onMaxValueAdd(+e.currentTarget.value)
    };

    render() {

        let classForRedMin = this.props.state.minDisable ? `${s.redSucks}`:`${s.inputs}`
        let classForRedMax = this.props.state.maxDisable ? `${s.redSucks}`:`${s.inputs}`

        return (
            <div className={s.wrapper}>
                <div className={s.inputBlock}>
                    <div>
                        max value:
                    </div>
                    <input type='number'
                           className={classForRedMax}
                           value={this.props.state.maxValue}
                           onChange={this.onMaxValueChange}/>
                </div>
                <div className={s.inputBlock}>
                    <div>
                        min value:
                    </div>
                    <input type='number'
                           className={classForRedMin}
                           value={this.props.state.minValue}
                           onChange={this.onMinValueChange}/>
                </div>
            </div>
        );
    }
}

export default InputWin;
