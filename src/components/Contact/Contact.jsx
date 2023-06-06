import PropTypes from 'prop-types';

export const Contact = ({ name, id, number, handleDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <p>
        {name}: {number}
      </p>
      <button
        style={{ width: '100px', height: '20px', marginLeft: '16px' }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
  handleDelete: PropTypes.func,
};
