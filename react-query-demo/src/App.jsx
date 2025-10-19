import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, Link } from 'react-router-dom';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <Link
        to="/posts"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Go to Posts
      </Link>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4 font-semibold hover:underline">Home</Link>
        <Link to="/posts" className="font-semibold hover:underline">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
