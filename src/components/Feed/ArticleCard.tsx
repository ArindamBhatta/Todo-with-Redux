import React from 'react';

interface ArticleCardProps {
  title: string;
  source: string;
  image: string;
  upvotes: number;
  comments: number;
  readTime: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, source, image, upvotes, comments, readTime, date }) => {
  return (
    <div className="group relative bg-[#161b22] rounded-2xl border border-[#1e2229] overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full">
      {/* Image Section */}
      <div className="aspect-[1.91/1] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-white">
          {readTime}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Source info */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
            {source[0]}
          </div>
          <span className="text-gray-400 text-xs font-medium">{source}</span>
          <span className="text-gray-600 text-xs">•</span>
          <span className="text-gray-600 text-xs">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-snug mb-4 line-clamp-3 group-hover:text-violet-400 transition-colors">
          {title}
        </h3>

        {/* Footer Stats */}
        <div className="mt-auto flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1.5 hover:text-white transition-colors group/btn">
              <span className="group-hover/btn:text-pink-500 transition-colors">▲</span>
              <span className="text-sm font-medium">{upvotes}</span>
            </button>
            <button className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <span>💬</span>
              <span className="text-sm font-medium">{comments}</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <button className="p-1.5 hover:bg-[#2a2f38] rounded-lg">🔖</button>
             <button className="p-1.5 hover:bg-[#2a2f38] rounded-lg">⤴️</button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ArticleCard;
