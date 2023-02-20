import PropTypes from 'prop-types';
import css from './Count.module.css';
const CountTotalFeedback = ({ total }) => {
  return <p className={css.text}>Total:{total}</p>;
};

export default CountTotalFeedback;
CountTotalFeedback.propTypes = {
  totla: PropTypes.number.isRequired,
};
