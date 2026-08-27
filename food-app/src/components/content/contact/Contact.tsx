import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <h1>Contact</h1>
        <br />
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p className="location">
          Catering Service, 42nd Living St, 43043 New York, NY
        </p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <form action="" target="_blank">
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="How many people" />
          <input type="datetime-local" />
          <input type="text" placeholder="Message \ Special requirements" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
