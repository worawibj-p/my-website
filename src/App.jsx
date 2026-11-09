
function App() {
  return (
    <div className="min-h-screen">

      {/* Background Section */}
      <section
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/background.jpg')"
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white">

          <h1 className="text-2xl font-bold">
            WORA Group
          </h1>

          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400">
              About
            </a>

            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>

        </nav>

        {/* Main Content */}
        <div
          id="home"
          className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center text-white px-6"
        >

          <p className="text-blue-400 text-lg mb-3">
            Hello, Welcome to my website
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Worawiboon
          </h1>

          <p className="max-w-xl text-gray-200 mb-8">
            I am passionate about technology,
            web development and creating modern websites.
          </p>

          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition"
          >
            Explore More
          </a>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            My name is Worawiboon.
            I graduated with a degree in Computer Science.
            I am interested in web development,
            software testing and technology.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>
          <p className="text-white-600 text-lg leading-relaxed">
            @Line ID : ppondd7
          </p>
        </div>

      </section>

    </div>
  )
}

export default App
