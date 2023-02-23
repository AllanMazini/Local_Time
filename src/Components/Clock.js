
import styles from './Clock.module.css'
import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { date: new Date(), name: 'Friend' };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }


    getTime() {
        const { date } = this.state;
        const h = `0${date.getHours()}`.slice(-2);
        const m = `0${date.getMinutes()}`.slice(-2);
        const s = `0${date.getSeconds()}`.slice(-2);
        return `${h}:${m}:${s}`;
    }

    render() {
        const time = this.getTime();
        const { name } = this.state;
        return (

            <div className={styles.clock}>
                <div>Hello, {name}</div>
                <div>It's {time}</div>
            </div>
        );
    }
}