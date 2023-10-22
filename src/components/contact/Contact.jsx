import React from "react";
import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { useRef } from "react";
export default function Contact() {
  //   const SERVICE_ID = "service_8vtjnej";
  //   const TEMPLATE_ID = "service_8vtjnej";
  //   const USER_ID = "rajabca201804@gmail.com";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8vtjnej",
        "template_vd1xzdu",
        form.current,
        "hkyTahKtIpQA7ZqiM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Connect to Me..</h1>
      <div className="row flex justify-center items-center h-screen bg-gray-100 lg:h-screen lg:items-center lg:flex lg:justify-center lg:bg-white lg:shadow mb-30 mt-20">
        
        <div className="w-full lg:w-1/2 lg:h-full lg:px-20 lg:py-20  lg:rounded  lg:bg-white ml-20">
          <img style={{ width: "300px" , height: "300px" , margin: "auto" , display: "block" }} src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" />
        </div>
        <div  className="w-full lg:h-full lg:px-20 lg:py-20  lg:rounded  lg:bg-white w-30 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form w-full max-w-lg m-auto py-8 px-4 bg-white rounded-lg shadow-lg lg:w-1/2 lg:max-w-lg lg:shadow "
          >
            <label
              for="name"
              className="label mb-2 block text-sm font-medium text-gray-700 "
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />
            <label className="label mb-2 block text-sm font-medium text-gray-700 ">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />
            <label className="label mb-2 block text-sm font-medium text-gray-700 ">
              Message
            </label>
            <textarea
              name="message"
              className="input w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            />

            <button
              type="submit"
              value="Send"
              className="btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none mt-3"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
