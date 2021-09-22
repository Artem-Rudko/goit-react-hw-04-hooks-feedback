import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="feedbackControls">
        {options.map(option => (
            <button
                key={option}
                type="button"
                className={option}
                data-type={option}
                onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
