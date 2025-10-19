import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        <Form className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Field
              name="username"
              type="text"
              className="border p-2 w-full"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Field
              name="email"
              type="email"
              className="border p-2 w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="border p-2 w-full"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
