import React from 'react';

const About = () => {
  return (
    <div className="mx-8 flex flex-col items-center justify-center gap-2">
        <p className="page-heading my-8 mt-10 text-center text-3xl font-bold uppercase text-black dark:text-white md:text-5xl">
          The Best
          <span className="my-1 block text-center text-primary drop-shadow-2xl">
            Coding Quiz Practice
          </span>
          Platform you have ever seen!
        </p>
        
      <p className="rounded-lg shadow-xl px-4 py-2 text-center font-semibold tracking-wide text-black md:text-xl">Welcome to NetQuize, your go-to platform for creating and storing quizzes!</p>
      <div className="rounded-lg shadow-xl px-4 py-2 text-center font-semibold tracking-wide text-black">
      <p className="rounded-lg shadow-xl px-4 py-2 text-center font-semibold tracking-wide text-black">With NetQuize, you can:</p>
      <ul>
        <li>Create custom quizzes tailored to your needs.</li>
        <li>Store and organize quizzes for easy access.</li>
        <li>Engage users with interactive and educational content.</li>
        <li>Track quiz performance and analyze results.</li>
      </ul>
      <p>NetQuize is designed to make the quiz creation and management process seamless and efficient.</p>
      <p>Get started today and enhance your learning experience with NetQuize!</p>
    
      </div>
    </div>
      
       
  );
};

export default About;
