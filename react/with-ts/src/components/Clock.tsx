import React from "react";

type ClockProps = {};

export class Clock extends React.Component<ClockProps, {date: Date}> {
  timerId: NodeJS.Timeout | null;

  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    this.timerId && clearInterval(this.timerId);
  }

  tick() {
    console.log('tick ');
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
