import { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setResult({ success: true, message: 'Message sent successfully!' });
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setResult({ success: false, message: 'Failed to send message. Please try again.' });
          setLoading(false);
        }
      );
  };

  return (
    <section id="Contact" className="max-w-xl mx-auto my-16 px-6 py-8 rounded-2xl shadow-lg bg-gradient-to-r from-cyan-900/80 via-gray-900/80 to-gray-800/80 border border-cyan-900">
      <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">Contact Me</h2>
      <p className="text-gray-300 mb-6 text-center">Feel free to reach out by filling the form below!</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <div>
          <label className="block text-gray-200 mb-1" htmlFor="Order">Domain</label>
          <input
            type="text"
            id="Order"
            name="Order"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-200 mb-1" htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-200 mb-1" htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-200 mb-1" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-200 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-semibold text-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FaPaperPlane />
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {result && (
          <div className={`mt-2 text-center font-medium ${result.success ? 'text-cyan-400' : 'text-red-400'}`}>
            {result.message}
          </div>
        )}
      </form>
    </section>
  );
} 