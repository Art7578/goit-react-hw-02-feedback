import PropTypes from 'prop-types';
import css from './section.module.css'

export default function Section({title, children}) {
    return (
        <section className={css.section}>
            <h2>
                {title}
                {children}
            </h2>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};