import { useState } from "react";
import useTitle from "../Hooks/useTitle";
import axios from 'axios';

const Contact = () => {

      
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/send-email', 
      {email, subject, message});
      console.log(response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error (e.g., show an error message)
    }
  };

  useTitle("Contact");
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact-us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? want to send feedback about a beta feature? Let
          us Know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
            <div className="mt-5">
              <label htmlFor="subject" className="form__label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Let us known how we can help you"
                className="form__input mt-1"
              />
            </div>
            <div className="sm:col-span-2 mt-5">
              <label htmlFor="message" className="form__label">
                Your Message
              </label>
              <textarea
                type="text"
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a comment"
                className="form__input mt-1"
              />
            </div>
          </div>
          <button type="submit" onClick={handleFormSubmit} className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
