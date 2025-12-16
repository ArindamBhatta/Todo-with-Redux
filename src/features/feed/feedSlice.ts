import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Article {
  id: number;
  title: string;
  source: string;
  image: string;
  upvotes: number;
  comments: number;
  readTime: string;
  date: string;
}

interface FeedState {
  articles: Article[];
}

const initialState: FeedState = {
  articles: [
    {
      id: 1,
      title: "Understanding React Server Components in 2024",
      source: "Dev.to",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      upvotes: 234,
      comments: 45,
      readTime: "5m read",
      date: "2h ago"
    },
    {
      id: 2,
      title: "10 CSS Tricks You Wish You Knew Sooner",
      source: "Medium",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
      upvotes: 89,
      comments: 12,
      readTime: "3m read",
      date: "4h ago"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Redux Toolkit",
      source: "Redux Docs",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
      upvotes: 567,
      comments: 89,
      readTime: "12m read",
      date: "1h ago"
    },
    {
      id: 4,
      title: "Why TypeScript is Essential for Large Scale Apps",
      source: "Hashnode",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
      upvotes: 120,
      comments: 34,
      readTime: "8m read",
      date: "Now"
    },
    {
      id: 5,
      title: "Building Microservices with Go",
      source: "GoBlog",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop",
      upvotes: 45,
      comments: 8,
      readTime: "15m read",
      date: "5h ago"
    },
    {
      id: 6,
      title: "AI in Software Engineering: Friend or Foe?",
      source: "TechCrunch",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      upvotes: 890,
      comments: 230,
      readTime: "6m read",
      date: "1d ago"
    }
  ]
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.unshift(action.payload);
    },
  },
});

export const { addArticle } = feedSlice.actions;

export default feedSlice.reducer;
