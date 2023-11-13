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

        <h1 className="h1 post-title">{post.title}</h1>

        {/* Your blog post content goes here */}

        <a href={post.link} className="btn btn-outline">
          Back to Blog
        </a>
      </div>
    </div>
  );
};

export default BlogPostDetails;