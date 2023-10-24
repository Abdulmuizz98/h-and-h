import Button from "./Button";

const Form = () => {
  return (
    <form className="w-465 w-xxl-490 mx-auto mx-xxl-0">
      <div className="w-100">
        <p
          className="fw-300 fs-sm-3 fs-md-2 fs-xl-2 text-center"
          id="custom-align"
        >
          Have any questions? Just leave us a message and we will get back to
          you as soon as possible.
        </p>
      </div>
      <div className="mt-5 fw-light fs-xl-2">
        <label className="d-block" htmlFor="name">
          Name
        </label>
        <input
          className="d-block custom-input h-40"
          id="name"
          type="text"
        ></input>
      </div>
      <div className="mt-5 fw-light fs-xl-2">
        <label className="d-block" htmlFor="email">
          E-mail
        </label>
        <input
          className="d-block custom-input h-40"
          id="email"
          type="email"
        ></input>
      </div>
      <div className="mt-5 fw-light fs-xl-2">
        <label className="d-block" htmlFor="message">
          Message
        </label>
        <textarea
          className="d-block custom-message mt-5 h-175 mb-4"
          id="message"
        ></textarea>
      </div>
      <Button
        value="Submit"
        classes="fs-sm-1 fs-md-1 fs-xl-2 d-block mx-auto"
      />
    </form>
  );
};

export default Form;
