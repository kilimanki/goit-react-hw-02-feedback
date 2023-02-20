import css from './Buttons.module.css';
const Buttons = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={css.container}>
      <button onClick={onGood} className={css.btn}>
        Good
      </button>
      <button onClick={onNeutral} className={css.btn}>
        neutral
      </button>
      <button onClick={onBad} className={css.btn}>
        bad
      </button>
    </div>
  );
};
export default Buttons;
