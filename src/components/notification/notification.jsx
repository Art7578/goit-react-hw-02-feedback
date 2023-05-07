import PropTypes from 'prop-types';
import css from './notification.module.css'

const Notification = ({message}) => {
    return <p className={css.notification}>{message}</p>;
};

Notification.prototype = {
    message: PropTypes.string.isRequired,
};
export default Notification;