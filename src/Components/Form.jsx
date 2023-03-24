/** @format */

import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaTelegramPlane } from "react-icons/fa";

function Form() {
  const initialValues = {
    username: "",
    message: "",
    email: "",
  };
  const formEmail = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a Valid Email";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(form));
    setIsSubmit(true);
    emailjs
      .sendForm(
        "service_u5wf7nr",
        "template_k2ul5ag",
        formEmail.current,
        "W_0DY1Ra4bNRpFQUf"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    notify();

    form.email = "";
    form.message = "";
    form.username = "";
  };

  const notify = () => {
    toast.success("Message Sent Successfully 💪", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  //service_u5wf7nr","template_k2ul5ag"
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(form);
    }
  }, [formErrors]);
  return (
    <section className='contact'>
      <div>
        <div>
          <form action='' ref={formEmail} onSubmit={handleSubmit}>
            <div className='field field-1 '>
              <label className='font-bold ' htmlFor='username'>
                Name :{" "}
              </label>
              <input
                type='text'
                name='username'
                className='form-input'
                value={form.username}
                onChange={handleChange}
                required
              />
              <p>{formErrors.username}</p>
            </div>
            <div className='field field-2 '>
              <label className='font-bold ' htmlFor='email'>
                Email :{" "}
              </label>
              <input
                type='email'
                name='email'
                className='form-input'
                required
                value={form.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className='field field-3 '>
              <label className='font-bold ' htmlFor='message'>
                Message :{" "}
              </label>
              <textarea
                name='message'
                id='message'
                cols='30'
                className='form-input'
                rows='10'
                value={form.message}
                required
                onChange={handleChange}></textarea>
            </div>
            <div className=' bg-primary my-3 rounded-md text-neutral'>
              <button
                type='submit'
                className='flex p-4 items-center justify-center'>
                <h3> Send Message</h3>{" "}
                <FaTelegramPlane className='ml-2 mt-1 btn-icon' />
              </button>
              <ToastContainer
                theme='colored'
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
