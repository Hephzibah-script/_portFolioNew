import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="Newsletter">
      <div className="Newsflex">
        <h3 className="h3">Sign Up for our Newsletter</h3>
        <div class="input-group news-input">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            aria-describedby="button-addon2"
            name=""
          />
          <button className="Newsbtn" type="button">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
