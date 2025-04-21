// pages/contact.js
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <main className="p-6">
        <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Your Message</label>
            <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg" rows="4" required></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send Message</button>
        </form>
      </main>
    </div>
  );
}
