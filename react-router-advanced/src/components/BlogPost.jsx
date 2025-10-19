import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamic blog post page rendered using the post ID from the URL.</p>
    </div>
  );
}

export default BlogPost;
