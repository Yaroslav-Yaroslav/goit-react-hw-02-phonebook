import PropTypes from 'prop-types';
export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
