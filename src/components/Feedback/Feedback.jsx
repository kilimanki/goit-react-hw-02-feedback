import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import CountTotalFeedback from './Count/Total';
import { CountPositiveFeedbackPercentage } from './Count/Percent';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = name => {
    this.setState(prevState => {
      const value = prevState[name];
      return {
        [name]: value + 1,
      };
    });
  };
  calcTotal = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };
  calcPercent() {
    const { good } = this.state;
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const result = Math.round((good / total) * 100);
    return result;
  }

  render() {
    const total = this.calcTotal();
    const { good, neutral, bad } = this.state;
    const goodPercent = this.calcPercent();
    const keys = Object.keys(this.state);

    return (
      <>
        <Section title="Please,leave feedback">
          <Buttons keys={keys} click={this.onClick} />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <>
              <Statistics good={good} neutral={neutral} bad={bad} />
              <CountTotalFeedback total={total} />
              <CountPositiveFeedbackPercentage percent={goodPercent} />
            </>
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;
