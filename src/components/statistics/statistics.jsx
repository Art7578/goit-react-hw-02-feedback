import PropTypes from 'prop-types';
import css from'./statistics.module.css';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <div className={css.wrapper}>
            <p className={css.item}>Good: {good}</p>
            <p className={css.item}>Neutral: {neutral}</p>
            <p className={css.item}>Bad: {bad}</p>
            <p className={css.item}>Total: {total}</p>
            <p className={css.item}>Positive feedback: {positivePercentage}</p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};