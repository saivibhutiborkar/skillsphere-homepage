// pages/courses.js
export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-6">
        <h1 className="text-4xl font-bold">Available Courses</h1>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Course 1</h2>
            <p>Learn the basics of programming in this introductory course.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Course 2</h2>
            <p>Master web development with this hands-on course.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Course 3</h2>
            <p>Deep dive into machine learning with this advanced course.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
