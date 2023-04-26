import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'The max number of characters is 30!')
    .required('Enter a name'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Enter a phone number'),
});
export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={values => {
        onSave({ ...values, id: nanoid() });
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="p" />
        </label>
        <label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
