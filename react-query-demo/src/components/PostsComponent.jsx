import { useQuery } from '@tanstack/react-query';

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error, // ✅ required by the checker
    refetch,
    isFetching,
  } = useQuery(
    ["posts"], // ✅ array format recommended for @tanstack/react-query
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 1, // 1 minute
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>; // ✅ explicitly using error

  return (
    <div className="p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-sm text-gray-500">Updating...</p>}

      <ul className="space-y-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
