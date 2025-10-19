import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Submit handler
  const handleSubmit = (values) => {
    alert("Formik form submitted successfully!");
    console.log(values);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="block font-medium">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
