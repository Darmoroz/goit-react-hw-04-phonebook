import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="search contact"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
