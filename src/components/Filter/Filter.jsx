import PropTypes from 'prop-types';

export const Filter = ({ getFilterInput, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={getFilterInput}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  getFilterInput: PropTypes.func,
  filter: PropTypes.string,
};
