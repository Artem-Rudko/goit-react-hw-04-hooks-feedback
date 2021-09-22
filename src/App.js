import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = e => {
        const { type } = e.target.dataset;
        console.log(type);
        console.log(e.target.dataset);

        this.setState(prevState => ({ [type]: prevState[type] + 1 }));
    };

    options = Object.keys(this.state);

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.options}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    <Statistics good={good} neutral={neutral} bad={bad} />
                </Section>
            </div>
        );
    }
}

export default App;
