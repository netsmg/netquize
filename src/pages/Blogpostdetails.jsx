import React from 'react';

const BlogPostDetails = ({ post }) => {
  return (
    <div className="blog-post-details">
      <figure className="post-banner img-holder" style={{ '--width': 768, '--height': 558 }}>
        <img src={post.imageUrl} width="768" height="558" loading="lazy" alt={post.title} className="img-cover" />
      </figure>

      <div className="post-content">
        <ul className="post-meta-list">
          <li className="post-meta-item">
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            <time className="post-meta-text" dateTime={post.date}>
              {post.date}
            </time>
          </li>
          <li className="post-meta-item">
            <ion-icon name="chatbox-outline" aria-hidden="true"></ion-icon>
            <p className="post-meta-text">{post.comments} Comment</p>
          </li>
        </ul>

        <h1 className="page-heading my-8 mt-10 text-center text-3xl font-bold uppercase text-black dark:text-white md:text-5xl">{post.title}</h1>
        <div className="mt-10 text-center text-1xl font-bold text-black dark:text-white md:text-1xl">{post.details}</div>

        {/* Your blog post content goes here */}

        <a href="/blog" className="btn btn-outline"><i className="fab fa-back"></i>
          Back to Blog
        </a>
      </div>
    </div>
  );
};

export default BlogPostDetails;
