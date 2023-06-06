import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(el => {
        return (
          <Contact
            name={el.name}
            key={el.id}
            id={el.id}
            number={el.number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
};
