// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-indigo-600 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to SkillSphere</h1>
        <p className="mt-2">Your gateway to skill-building courses and events</p>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Courses</h2>
            <p>Browse our extensive catalog of certification courses.</p>
            <a href="/courses" className="text-indigo-600">Explore Courses</a>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Events</h2>
            <p>Book your next workshop, seminar, or FDP with SkillSphere.</p>
            <a href="/events" className="text-indigo-600">View Events</a>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>Have any questions? Get in touch with us!</p>
            <a href="/contact" className="text-indigo-600">Contact Us</a>
          </div>
        </div>
      </main>
    </div>
  );
}
