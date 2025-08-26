

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list container mt-5">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {blogs.map((blog) => (
          <div className="col" key={blog.id}>
            <div className="card h-100 shadow-sm blog-card">
              <img
                src={`https://picsum.photos/600/400?random=${blog.id}`}
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">By {blog.author}</p>
                <a
                  href={`/blogs/${blog.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
