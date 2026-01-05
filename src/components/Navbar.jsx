const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg">Renzo Yano</h1>
        <div className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-green-600">Projects</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
