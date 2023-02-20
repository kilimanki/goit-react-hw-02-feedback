import PropTypes from 'prop-types';
import css from './Count.module.css';
export const CountPositiveFeedbackPercentage = ({ percent }) => {
  return <p className={css.text}>Positive feedback:{percent} %</p>;
};
CountPositiveFeedbackPercentage.propTypes = {
  percent: PropTypes.number.isRequired,
};
