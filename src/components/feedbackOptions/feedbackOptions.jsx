import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css'

export default function FeedbackOptions ({options, onButtonClick}) {
    return (
        <div className={css.container}>
            {options.map(option => {
                return (
                    <button
                    key={option}
                        type="button"
                        name={option}
                        className={css.button}
                        onClick={event => {
                            onButtonClick(event.currentTarget.name);
                        }}
                    >
                      {option}  
                    </button>
                );
            })}
        </div>
    );
}

FeedbackOptions.prioTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onButtonClick: PropTypes.func.isRequired,
};