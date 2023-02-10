import React from 'react'
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "@/config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("This field is required !!"),
  password: yup
    .string()
    .min(6, "Min 6 characters required")
    .required("This field is required !!"),
});

function Login() {
  const handleFormSubmit = (values: any, onSubmitProps: any) => {
    
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                values.username,
                values.password,
            );
            console.log(user);
            // localStorage.setItem("token", );
        } catch (error) {
            console.log(error);
        }
    }

    login();

    onSubmitProps.resetForm();
  };

  return (
    <div className="shadow-2xl mr-40 w-full lg:w-[40%] md:w-[50%] lg:m-auto md:m-auto p-1">
      <div className="w-rull m-5 lg:m-16 md:m-5">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="text-left">
              <div className="">
                <label
                  htmlFor="username"
                  className="uppercase text-sm text-gray-600 font-bold"
                >
                  username
                </label>
                <input
                  className={`w-full mb-1 bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                    errors.username && touched.username
                      ? "border border-red-700 bg-red-100"
                      : ""
                  }`}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  name="username"
                  placeholder="Enter username"
                />
                {errors.username && touched.username && (
                  <div className="mt-[-5px] text-red-500">
                    {errors.username}
                  </div>
                )}
                <div className="mb-2"></div>

                <label
                  htmlFor="password"
                  className="uppercase text-sm text-gray-600 font-bold"
                >
                  password
                </label>
                <input
                  className={`w-full bg-gray-300 mb-1 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                    errors.password && touched.password
                      ? "border border-red-700 bg-red-100"
                      : ""
                  }`}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className="mt-[-5px] text-red-500">
                    {errors.password}
                  </div>
                )}
                <div className="mb-2"></div>
                  <button
                    className="uppercase text-sm mt-5 font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
