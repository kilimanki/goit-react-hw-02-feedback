import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral:{neutral}</p>
      <p className={css.text}>Bad:{bad}</p>
    </>
  );
};
