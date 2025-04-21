// pages/events.js
export default function Events() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-indigo-600 text-white p-6">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
      </header>
      <main className="p-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Event 1: Workshop on AI</h2>
          <p>Date: 25th May 2025</p>
          <p>Join us for an exciting workshop on Artificial Intelligence.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md">Register Now</button>
        </div>
      </main>
    </div>
  );
}
