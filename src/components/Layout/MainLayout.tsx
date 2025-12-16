import Sidebar from './Sidebar';
import Header from './Header';
import Feed from '../Feed/Feed';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0e1116] text-white flex">
      {/* Sidebar - Fixed width */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <Feed />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
