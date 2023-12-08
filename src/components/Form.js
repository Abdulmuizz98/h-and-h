import Button from "./Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ourEmail = "hamzatabdulmuizz98@gmail.com";

  const validateEmail = () => {
    console.log("i did this");
    // Regular expression for a basic email validation pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  };

  const validateSubmission = () => {
    console.log("here, were here");
    if (name.trim() === "") {
      toast.error("Please provide your name!");
      return false;
    }
    if (!validateEmail()) {
      toast.error("Please provide a valid email!");
      return false;
    }
    if (message.trim() === "") {
      toast.error("Message cannot be empty!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");

    if (validateSubmission()) {
      // Encode spaces in the email body
      const encodedBody = encodeURIComponent(message).replace(/%20/g, "%20");

      // Construct the "mailto" link with the encoded body
      const mailtoLink = `mailto:${ourEmail}?subject=H-and-H%20message%20from%20${name}%20${email},&body=${encodedBody}`;

      // Open the user's email client with the "mailto" link
      window.location.href = mailtoLink;
      clearFormInputs();
    }
  };
  function clearFormInputs() {
    const form = document.querySelector(".form");
    if (form) {
      // Loop through form elements
      for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        // Check if the element is an input field and not a button or other form element
        if (element.tagName === "INPUT" && element.type !== "submit") {
          // Clear the value of the input element
          element.value = "";
        }
      }
    }
  }

  return (
    <form
      className="form w-100 w-md-465 w-xl-490 mx-auto mx-xl-0 "
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <div className="w-100">
        <p
          className="fw-300 fs-sm-3 fs-md-2 fs-xl-1 text-center"
          id="custom-align"
        >
          Have any questions? Just leave us a message and we will get back to
          you as soon as possible.
        </p>
      </div>
      <div className="mt-5 mt-xl-4  fw-light fs-xl-1 w-md-465 mx-auto mx-xl-0">
        <label className="d-block" htmlFor="name">
          Name
        </label>
        <input
          className="d-block custom-input h-40"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="mt-5  mt-xl-4 fw-light fs-xl-1 w-md-465 mx-auto mx-xl-0">
        <label className="d-block" htmlFor="email">
          E-mail
        </label>
        <input
          className="d-block custom-input h-40"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="mt-5  mt-xl-4 fw-light fs-xl-1 w-md-465 mx-auto mx-xl-0">
        <label className="d-block" htmlFor="message">
          Message
        </label>
        <textarea
          className="d-block custom-message mt-4 mt-md-5 h-175 mb-4"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <Button
        value="Submit"
        classes="fs-sm-1 fs-md-1 fs-xl-1 d-block mx-auto"
      />
    </form>
  );
};

export default Form;
