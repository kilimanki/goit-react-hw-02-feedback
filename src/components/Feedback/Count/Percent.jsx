import css from './Count.module.css';
export const CountPositiveFeedbackPercentage = ({ percent }) => {
  return <p className={css.text}>Positive feedback:{percent} %</p>;
};
