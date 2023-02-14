import { Formik } from "formik";
import * as yup from "yup";
import { addDoc, collection } from 'firebase/firestore'
import { db } from "@/config/firebase-config";
import Navbar from "@/components/layouts/Navbar";
import { v4 as uuidv4 } from 'uuid';
import config from '../config/next-seo.config';
import { NextSeo } from "next-seo";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/

const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Min 3 chars required').max(40).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  message: yup.string().min(50, 'Message must be at least 50 characters').required('Required'),
});

function Contact() {
  const SEO = {
    ...config,
    title: 'Contact',
    description: 'Contact Mehraaj for any queries through messages',
  }

  const queriesCollectionRef = collection(db, "queries");

  const handleFormSubmit = (values: any, onSubmitProps: any) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      message: values.message,
      date: new Date(),
    }
    const recordMessage = async () => {
      await addDoc(queriesCollectionRef, data);
    }
    const response = recordMessage();
    onSubmitProps.resetForm();
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="text-center">
      <Navbar />
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-gray-700 mt-8 dark:text-gray-400">
            Hate appointment? Send us an email instead.
          </div>
        </div>
        <div className="m-14 md:m-15 lg:m-20 lg:flex lg:justify-evenly">
          <div className="hidden w-[100%] dark:rounded-3xl lg:block">
            <img
              src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
              className="lg:h-[85%] dark:rounded-3xl"
            />
          </div>
          <div className="w-[95%] m-auto md:w-[50%] lg:w-[50%] md:m-auto lg:mt-0">
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
                    <label htmlFor="name" className="uppercase text-sm text-gray-600 font-bold dark:text-gray-400">
                      Full Name
                    </label>
                    <input
                      className={`w-full bg-gray-300 text-gray-900 mb-10 md:mb-0 lg:mb-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${errors.name && touched.name
                        ? "border border-red-700 bg-red-100"
                        : ""}`}
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                    <div className="mb-2"></div>
                    <label htmlFor="email" className="uppercase text-sm text-gray-600 dark:text-gray-400 font-bold">
                      Email
                    </label>
                    <input
                      className={`w-full bg-gray-300 text-gray-900 p-3 mb-10 md:mb-0 lg:mb-2 rounded-lg focus:outline-none focus:shadow-outline ${errors.email && touched.email
                        ? "border border-red-700 bg-red-100"
                        : ""}`}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                    <div className="mb-2"></div>
                    <label htmlFor="mobile" className="uppercase text-sm text-gray-600 font-bold dark:text-gray-400">
                      Mobile number
                    </label>
                    
                    <input
                      className={`w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline mb-10 md:mb-0 lg:mb-2 ${errors.mobile && touched.mobile
                        ? "border border-red-700 bg-red-100"
                        : ""}`}
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobile}
                    />
                    {errors.mobile && touched.mobile && <div className="text-red-500">{errors.mobile}</div>}
                    <div className="mb-2"></div>
                    <label htmlFor="message" className="uppercase text-sm text-gray-600 font-bold dark:text-gray-400">
                      Message (min 50 chars)
                    </label>
                    <textarea
                      className={`w-full bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline h-52 ${errors.message && touched.message
                        ? "border border-red-700 bg-red-100"
                        : ""}`}
                      name="message"
                      placeholder="Enter your message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    {errors.message && touched.message && <div className="mt-[-5px] text-red-500">{errors.message}</div>}
                    <div className="mb-4 mt-10 md:mt-0 lg:mt-0"></div>
                    <button
                      className="dark:text-gray-400 uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
