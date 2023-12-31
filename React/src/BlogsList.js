const BlogsList = ({blogs, title, handleDelete}) => {

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog) => (                              //OUTPUT LIST OF DATA
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogsList;