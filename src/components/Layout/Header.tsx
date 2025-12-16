

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0e1116]/80 backdrop-blur-md border-b border-[#1e2229] px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Mobile Menu Button (Visible only on small screens) */}
        <button className="md:hidden text-white mr-4">
          ☰
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Search for articles..."
              className="block w-full pl-10 pr-3 py-2.5 bg-[#161b22] border border-[#2a2f38] rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 ml-4">
          <button className="bg-white text-black px-4 py-2 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            New Post
          </button>
          
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px] cursor-pointer">
            <div className="h-full w-full rounded-full bg-[#0e1116] flex items-center justify-center">
              👤
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
