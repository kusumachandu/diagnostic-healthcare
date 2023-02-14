import BookingSuccess from "@/components/layouts/BookingSuccess";
import Navbar from "@/components/layouts/Navbar";
import { db } from "@/config/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import config from "@/config/next-seo.config";
import { NextSeo } from "next-seo";

const date: any = new Date();
const currDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}`;
console.log(currDate);
let endDate: string;

const bookingPeriod = date.getDate() + 7;

console.log(date.getMonth() + 1);

if (bookingPeriod > 28 && date.getMonth() + 1 < 12) {
  endDate = `${date.getFullYear()}-${date.getMonth() + 2}-2`;
} else if (date.getMonth() + 1 === 12) {
  endDate = `${date.getFullYear() + 1}-1-2`;
} else {
  endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${bookingPeriod}`;
}

console.log(endDate);

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  date: "",
  time: "",
};

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const nameRegExp = /^[A-Za-z ]+$/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be more then one character")
    .matches(nameRegExp, "Name should not contain integer values")
    .max(40)
    .required("This field is required"),
  date: yup
    .date()
    .min(currDate, "Date should not be less than today")
    .max(endDate, `Sorry book an appointment before ${endDate}`)
    .required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("This field is required"),
  time: yup.string().required("This field is required"),
});

function Book() {
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const appointmentsCollectionRef = collection(db, "appointments");

  const SEO = {
    ...config,
    title: 'Book an appointment',
    description: 'Book an appointment for one to one meeting on the specified time slot'
  }

  const handleFormSubmit = (values: any, onSubmitProps: any) => {
    const bookingData = {
      id: uuidv4(),
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      bookingDate: values.date,
      bookingTime: values.time,
      bookedOn: new Date(),
    }
    const recordAppointment = async () => {
      await addDoc(appointmentsCollectionRef, bookingData);
    };
    recordAppointment();
    onSubmitProps.resetForm();
    setBookingSuccess(true);
  };

  const handleSuccessPage = () => {
    setBookingSuccess(false);
  };

  return (
    <>
    <NextSeo {...SEO} />
    <div className="text-center">
      <Navbar />
      {!bookingSuccess && (
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Book your appointment
          </h2>
          <div className="text-gray-700 mt-5">
            Dedicated to healing, to provide a possible cure.
          </div>
          <div className="w-[80%] md:w-[50%] lg:w-[50%] m-auto mt-5">
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
                      htmlFor="name"
                      className="uppercase text-sm text-gray-600 font-bold"
                    >
                      Full name
                    </label>
                    <input
                      className={`w-full mb-1 bg-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                        errors.name && touched.name
                          ? "border border-red-700 bg-red-100"
                          : ""
                      }`}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      placeholder="Enter your full name"
                    />
                    {errors.name && touched.name && (
                      <div className="mt-[-5px] text-red-500">
                        {errors.name}
                      </div>
                    )}
                    <div className="mb-2"></div>

                    <label
                      htmlFor="email"
                      className="uppercase text-sm text-gray-600 font-bold"
                    >
                      Email
                    </label>
                    <input
                      className={`w-full bg-gray-300 mb-1 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                        errors.email && touched.email
                          ? "border border-red-700 bg-red-100"
                          : ""
                      }`}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <div className="mt-[-5px] text-red-500">
                        {errors.email}
                      </div>
                    )}
                    <div className="mb-2"></div>

                    <label
                      htmlFor="mobile"
                      className="uppercase text-sm text-gray-600 font-bold"
                    >
                      Mobile number
                    </label>
                    <input
                      className={`w-full bg-gray-300 mb-1 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                        errors.mobile && touched.mobile
                          ? "border border-red-700 bg-red-100"
                          : ""
                      }`}
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobile}
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="mt-[-5px] text-red-500">
                        {errors.mobile}
                      </div>
                    )}
                    <div className="mb-2"></div>

                    <label
                      htmlFor="date"
                      className="uppercase text-sm text-gray-600 font-bold"
                    >
                      Select appointment Date
                    </label>
                    <input
                      className={`w-full bg-gray-300 mb-1 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                        errors.date && touched.date
                          ? "border border-red-700 bg-red-100"
                          : ""
                      }`}
                      type="date"
                      name="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                    {errors.date && touched.date && (
                      <div className="mt-[-5px] text-red-500">
                        {errors.date}
                      </div>
                    )}
                    <div className="mb-2"></div>

                    <label
                      htmlFor="time"
                      className="uppercase text-sm text-gray-600 font-bold"
                    >
                      Select appointment Time
                    </label>
                    <select
                      className={`w-full bg-gray-300 mb-1 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                        errors.time && touched.time
                          ? "border border-red-700 bg-red-100"
                          : ""
                      }`}
                      name="time"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.time}
                    >
                      <option value="">Select a time slot</option>
                      <option value="3:00">3:00 - 3:45</option>
                      <option value="4:00">4:00 - 4:45</option>
                      <option value="5:00">5:00 - 5:45</option>
                      <option value="6:00">6:00 - 6:45</option>
                    </select>
                    {errors.time && touched.time && (
                      <div className="mt-[-5px] text-red-500">
                        {errors.time}
                      </div>
                    )}
                    <div className="mb-2"></div>

                    <button
                      className="uppercase text-sm mt-5 mb-16 font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Book appointment
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {bookingSuccess && (
        <BookingSuccess handleSuccessPage={handleSuccessPage} />
      )}
    </div>
    </>
  );
}

export default Book;
