import css from './Count.module.css';
const CountTotalFeedback = ({ total }) => {
  return <p className={css.text}>Total:{total}</p>;
};

export default CountTotalFeedback;
