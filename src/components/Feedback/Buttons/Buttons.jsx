import PropTypes from 'prop-types';
import css from './Buttons.module.css';
const Buttons = ({ keys = [], click }) => {
  const elements = keys.map(item => {
    return (
      <button key={item} className={css.btn} onClick={() => click(item)}>
        {item}
      </button>
    );
  });
  return <div className={css.container}>{elements}</div>;
};

export default Buttons;
Buttons.propTypes = {
  click: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
};
