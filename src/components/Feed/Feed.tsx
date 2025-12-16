// import { useSelector } from 'react-redux';
// import { RootState } from '../../app/store';

const Feed = () => {
//   const articles = useSelector(() =>);

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">My Feed</h2>
        <div className="flex space-x-2">
            <button className="px-3 py-1 bg-[#2a2f38] text-sm text-white rounded-lg hover:bg-[#363c47]">Latest</button>
            <button className="px-3 py-1 text-gray-400 text-sm hover:text-white rounded-lg">Popular</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
       
      </div>
    </div>
  );
};

export default Feed;
