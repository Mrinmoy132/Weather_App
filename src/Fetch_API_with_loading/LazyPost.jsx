const LazyPost = ({ posts }) => {
    return (
        <>
            {posts.map((post, index) => {
                return (<div key={post.id}>
                    <div>{post.title}</div>
                </div>)
            })}
        </>
    )
}

export default LazyPost;