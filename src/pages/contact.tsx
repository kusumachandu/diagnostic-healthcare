import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(40).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  mobile: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  message: yup.string().min(20),
});

function Contact() {
  const submitHandler = () => {
    console.log("hi");
  };

  return (
    <>
      <div className="text-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-gray-700 mt-8">
            Hate appointment? Send us an email instead.
          </div>
        </div>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            resetForm,
          }) => (
            <div className="m-4 md:m-15 lg:m-20 md:flex lg:flex lg:justify-evenly">
              <div className="w-[100%]">
                <img
                  src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
                  className="lg:h-[85%]"
                />
              </div>
              <div className="w-full md:w-[50%] lg:w-[50%]">
                <form className="">
                  <div className="">
                    <label className="uppercase text-sm text-gray-600 font-bold">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-gray-300 text-gray-900 text-center mt-2 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                    <label className="uppercase text-sm text-gray-600 font-bold">
                      Email
                    </label>
                    <input
                      className="w-full bg-gray-300 text-gray-900 text-center mt-2 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                    />
                    <label className="uppercase text-sm text-gray-600 font-bold">
                      Mobile number
                    </label>
                    <input
                      className="w-full bg-gray-300 text-gray-900 text-center mt-2 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                    />
                      <label className="uppercase text-sm text-gray-600 font-bold">
                        Message
                      </label>
                      <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 mb-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                      <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                      </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
export default Contact;
