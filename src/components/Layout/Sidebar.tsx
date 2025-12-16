

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0e1116] border-r border-[#1e2229] hidden md:flex flex-col z-50">
      {/* Logo Area */}
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          daily.dev
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        <div className="mb-6">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-[#1e2229] text-white rounded-xl hover:bg-[#2a2f38] transition-colors">
            <span className="text-xl">🏠</span>
            <span className="font-medium">My Feed</span>
          </button>
        </div>

        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Discover</p>
          <NavItem icon="🔥" label="Popular" />
          <NavItem icon="⬆️" label="Most Upvoted" />
          <NavItem icon="💬" label="Best Discussions" />
          <NavItem icon="🔍" label="Search" />
        </div>

        <div className="mt-8 space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tags</p>
          <NavItem icon="#️⃣" label="JavaScript" />
          <NavItem icon="#️⃣" label="React" />
          <NavItem icon="#️⃣" label="CSS" />
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#1e2229]">
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white transition-colors">
          <span>⚙️</span>
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label }: { icon: string; label: string }) => (
  <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-gray-400 rounded-lg hover:bg-[#1e2229] hover:text-white transition-colors">
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

export default Sidebar;
