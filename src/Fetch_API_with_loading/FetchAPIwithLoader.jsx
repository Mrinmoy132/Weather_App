import { lazy, Suspense, useState } from "react";
const LazyPost = lazy(() => import("./LazyPost"));

const FetchAPIwithLoader = () => {

  const [posts, setPosts] = useState([]);

  const url = "https://dummyjson.com/posts";
  const fetchAPI = async () => {
    const fetchstring = await fetch(url);
    const alldata = await fetchstring.json();
    setPosts(alldata.posts);
  }

  return (
    <>
      <button onClick={fetchAPI}>Click Here</button>
      {posts.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyPost posts={posts} />
        </Suspense>)}
    </>
  )
}

export default FetchAPIwithLoader;