import React from 'react';
import Blogpost from './Blogpost';
import { Link } from 'react-router-dom'; 

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
   {
      id: 2,
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
    {
      id: 3,
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
return ( <div className="container mx-auto mx-auto mb-32 flex min-h-screen w-[90%] animate-reveal flex-col items-center wp-block-group container is-layout-flow wp-block-group-is-layout-flow"> {blogData.map((blog) => ( <Link key={blog.id} to={`{blog.id}`} className="text-black dark:text-white"> <Blogpost {...blog} /> </Link> ))} </div>

 ); };
  
export default Blog;
