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

  goodClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  calcTotal = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };
  calcPercent(name) {
    const value = this.state[name];
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  }

  render() {
    const total = this.calcTotal();
    const { good, neutral, bad } = this.state;
    const goodPercent = this.calcPercent('good');

    return (
      <>
        <Section title="Please,leave feedback">
          <Buttons
            onGood={this.goodClick}
            onNeutral={this.neutralClick}
            onBad={this.badClick}
          />
        </Section>

        <Section title="Statistics">
          {this.calcTotal() === 0 ? (
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
