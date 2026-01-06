const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="font-bold text-base sm:text-lg">
          Renzo Yano
        </h1>

        <div className="flex items-center gap-3 sm:gap-6 text-sm">
          <a
            href="#projects"
            className="hidden sm:inline hover:text-green-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hidden sm:inline hover:text-green-600"
          >
            Contact
          </a>
          <a
            href="/RenzoYano-Frontend-Developer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm hover:bg-green-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
