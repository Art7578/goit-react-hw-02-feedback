import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Notification from './notification/notification';
import Section from './section/section';
import Statistics from './statistics/statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
   this.setState(prevState => ({
    [option]: prevState[option] + 1,
   }));
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((acc, value) => acc + value,0);
  };
  

  countPositiveFeedbackPercantage = total =>
  `${Math.round((this.state.good/total) * 100)}%`;

  render() {
    const {good,neutral,bad} = this.state;
    const stateKeys = Object.keys(this.state);
    const total = this.countTotalFeedback(this.stte);
    const positivePercentage = this.countPositiveFeedbackPercantage(total);

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={stateKeys}
        onButtonClick={this.onLeaveFeedback}/>
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}/>
        ) : (
          <Notification message="There is no feedback"/>
        )}
      </Section>
      </>
    );
  }
}

export default App;