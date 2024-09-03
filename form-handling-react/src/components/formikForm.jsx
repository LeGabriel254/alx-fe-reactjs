import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

function FormikForm() {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm(); console.log('Form values:', values);

        // You can perform any action with the form data, like sending it to an API
        setSubmitting(false); // Set submitting state back to false
        resetForm(); // Reset the form after submission


    };

    return (
        <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              {errors.username && touched.username ? (
                <div className="error">{errors.username}</div>
              ) : null}
            </div>
  
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
  
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
  
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
  
  export default FormikForm;