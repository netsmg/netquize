

const Blog = () => {
  // Assuming you have an array of blog data
  const blogData = [
    {
      id: 1,
      imageUrl: 'https://codewithsadee.github.io/vast/assets/images/blog-1.jpg',
      date: 'May 22, 2022',
      comments: 2,
      title: 'Build A Full Web Chat App From Scratch',
      link: '#',
    },
    // Add more blog entries as needed
  ];

  return (
    <section className="section blog" aria-label="blog">
      <div className="container9">
        <p className="section-subtitle">Recent Blogs</p>
        <h2 className="h2 section-title">Our Tips And Latest News</h2>

        <ul className="blog-list">
          {blogData.map((blog) => (
            <li key={blog.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 768, '--height': 558 }}>
                  <img src={blog.imageUrl} width="768" height="558" loading="lazy" alt={blog.title} className="img-cover" />
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                      <time className="card-meta-text" dateTime={blog.date}>
                        {blog.date}
                      </time>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="chatbox-outline" aria-hidden="true"></ion-icon>
                      <p className="card-meta-text">{blog.comments} Comment</p>
                    </li>
                  </ul>

                  <h3 className="h3">
                    <a href={blog.link} className="card-title">
                      {blog.title}
                    </a>
                  </h3>

                  <a href={blog.link} className="btn btn-outline">
                    Read More
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
