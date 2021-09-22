import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage = Math.round(
        (good * 100) / (good + neutral + bad),
    );

    return (
        <div className="Statistics">
            {total !== 0 ? (
                <>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral} </p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage} %</p>
                </>
            ) : (
                <p>No feedback is given</p>
            )}
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};

export default Statistics;
