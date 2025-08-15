import { useState, useRef } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    fetch("https://formsubmit.co/ajax/talhaahmaed999@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          form.reset();

          setTimeout(() => setSubmitted(false), 5000);
        }
      })
      .catch((err) => console.error("Form submission error:", err));
  };

  return (
    <section className="contact container">
      <h2 className="contact__heading">Let's Connect</h2>
      <p className="contact__subtext">
        Whether you have a project in mind or just want to say hi, I'm all ears 👋
      </p>

      <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact__input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="contact__textarea"
        ></textarea>

        <button type="submit" className="contact__button">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="contact__success">
          ✅ Message submitted! I'll get back to you soon.
        </p>
      )}

      <div className="contact__links">
        <a href="mailto:talhaahmaed999@gmail.com">📧 Email Me</a>
        <a
          href="https://www.linkedin.com/in/talha-ahmad-4299a32a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/Talhaahmad9"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 GitHub
        </a>
      </div>
    </section>
  );
}