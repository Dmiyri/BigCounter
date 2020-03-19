import React from 'react';
import s from './App.module.css';
import DisplayCounter from "./DisplayCount/DisplayCounter";
import DataCount from "./DataCount/DataCount";

class App extends React.Component {

    state = {
        minValue: null,
        maxValue: null,
        countValue: null,
        resetDisables: false,
        incDisables: false,
        maxDisable: false,
        minDisable: false,
        setDisable: false,
        inputError: false,
        setError:false,
    }
    countPlus = () => {
        if (this.state.countValue < this.state.maxValue) {
            this.setState({countValue: this.state.countValue + 1,
                incDisables: false,
                resetDisables: false,
                setDisable: true,})
        }
        if (this.state.countValue === this.state.maxValue) {
            this.setState({incDisables: true,
                resetDisables: false,
                setDisable: true,})
        }
    }
    countReset = () => {
        if (this.state.countValue !== 0) {
            this.setState({countValue: this.state.minValue,
                resetDisables: false,
                incDisables: false,
                setDisable: true,})
        } else {
            this.setState({resetDisables: true, setDisable: true,})
        }
    }
    onMinValueAdd = (newMinValue) => {
        if (newMinValue < 0) {
            this.setState({
                minValue: -1,
                minDisable: true,
                setDisable: true,
                inputError: true,
            })
        }
        if (newMinValue >= 0) {
            this.setState({
                minValue: newMinValue,
                minDisable: false,
                setDisable: false,
                inputError: false,
                resetDisables: true,
                incDisables: true,
                setError:true,
            }, () => {
                this.saveState()
            })
        }
        if (newMinValue >= this.state.maxValue) {
            this.setState({
                minValue: this.state.maxValue,
                minDisable: true,
                setDisable: true,
                inputError: true,
            })
        }
    }
    onMaxValueAdd = (newMaxValue) => {
        if (newMaxValue < this.state.minValue) {
            this.setState({
                maxValue: this.state.minValue,
                maxDisable: true,
                setDisable: true,
                inputError: true,
                setError:true,
            })
        }
        if (newMaxValue >= this.state.minValue) {
            this.setState({
                maxValue: newMaxValue,
                maxDisable: false,
                setDisable: false,
                inputError: false,
                resetDisables: true,
                incDisables: true,
                setError:true,
            }, () => {
                this.saveState()
            })
        }
    }
    addCount = () => {
        this.setState({
            countValue: this.state.minValue,
            resetDisables: false,
            incDisables: false,
            setError:false,
        }, () => {
            this.saveState()
        })
    }
    saveState = () => {
        let stateAsstring = JSON.stringify(this.state)
        localStorage.setItem('our-state', stateAsstring)
    }
    restoreState = () => {
        let stateAsString = localStorage.getItem('our-state');
        if (stateAsString !== null) {
            let state = JSON.parse(stateAsString);
            this.setState(state)
        }
    }
    componentDidMount() {
        this.restoreState();
    }

    render() {
        return (
            <div className={s.app}>
                <DataCount state={this.state}
                           onMinValueAdd={this.onMinValueAdd}
                           onMaxValueAdd={this.onMaxValueAdd}
                           addCount={this.addCount}/>
                <DisplayCounter state={this.state}
                                countPlus={this.countPlus}
                                countReset={this.countReset}/>
            </div>
        );
    }
}

export default App;
