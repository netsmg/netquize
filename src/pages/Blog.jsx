import React from 'react';
import Blogpost from './Blogpost'; // Make sure to provide the correct path

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: "Lenovo’s smarter devices stoke professional passions",
      categories: ["Garden", "Videos"],
      author: {
        name: "Lila",
        avatar: "https://codewithsadee.github.io/vast/assets/images/blog-1.jpg",
      },
      date: "Sep 18, 2021",
      readingTime: 3,
      image: "https://codewithsadee.github.io/vast/assets/images/blog-1.jpg",
    },
   
  ];

  return (
    <div className="container mx-auto mx-auto mb-32 flex min-h-screen w-[90%] animate-reveal flex-col items-center wp-block-group container is-layout-flow wp-block-group-is-layout-flow">
      {blogData.map((blog) => (
        <BlogPost key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Blog;
