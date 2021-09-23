import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';

export default function App() {
    const [goodFeedback, setGoodFeedback] = useState(0);
    const [neutralFeedback, setNeutralFeedback] = useState(0);
    const [badFeedback, setBadFeedback] = useState(0);

    const handleFeedbackClick = event => {
        const { type } = event.target.dataset;

        switch (type) {
            case 'good':
                setGoodFeedback(prevstate => prevstate + 1);
                break;

            case 'neutral':
                setNeutralFeedback(prevstate => prevstate + 1);
                break;

            case 'bad':
                setBadFeedback(prevstate => prevstate + 1);
                break;

            default:
                return;
        }
    };

    const options = ['good', 'neutral', 'bad'];

    return (
        <div className="App">
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={handleFeedbackClick}
                />
            </Section>
            <Section title="Statistics">
                <Statistics
                    good={goodFeedback}
                    neutral={neutralFeedback}
                    bad={badFeedback}
                />
            </Section>
        </div>
    );
}
