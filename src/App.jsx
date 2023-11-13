import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  Routes,
  ScrollRestoration,
  createBrowserRouter
} from 'react-router-dom';

import {
  DesignComponent,
  MainNavigationBar,
  Preloader,
  PrivateOutlet,
  PublicOutlet
} from './components';
// eslint-disable-next-line import/order
import { AuthProvider } from './contexts/AuthContext';

// Website Pages
import {
  About,
  Blog,
  BlogPostDetails,
  DetailedSubmission,
  Home,
  Learn,
  Login,
  PageNotFound,
  Profile,
  Quiz,
  Quizzes,
  Reset,
  Result,
  SignUp,
  Submissions,
  Service,
  Video
} from './pages';

const blogData = [
  {
    id: 1,
    imageUrl: 'https://codewithsadee.github.io/vast/assets/images/blog-1.jpg',
    date: 'May 22, 2022',
    comments: 2,
    title: 'Build A Full Web Chat App From Scratch',
    link: '/blog/1', // This is the link to the detailed blog post page
  },
  {
    id: 2,
    imageUrl: 'https://codewithsadee.github.io/vast/assets/images/blog-2.jpg',
    date: 'June 10, 2022',
    comments: 5,
    title: 'Brush Strokes Energize Trees In Paintings',
    link: '/blog/2',
  },
  // Add more blog entries as needed
];

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route element={<MainNavigationBar />}>
          <Route element={<Home />} path="/" />
          <Route element={<Quizzes />} path="/quizzes" />
          <Route element={<About />} path="/about" />
          <Route element={<Reset />} path="/reset" />
          <Route element={<Learn />} path="/learn" />
           
      
           <Route path="/" element={<PublicOutlet />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Blog />} />
          {/* Dynamically generate routes for each blog post */}
          {blogData.map((post) => (
            <Route key={post.id} path={`blog/${post.id}`} element={<BlogPostDetails post={post} />} />
          ))}
        </Route>

          
          <Route element={<PrivateOutlet />} path="/">
            <Route element={<Quiz />} errorElement={<PageNotFound />} path="quiz/:id" />
            <Route element={<Video />} errorElement={<PageNotFound />} path="video/:id" />
            <Route element={<Profile />} path="profile" />
            <Route element={<Submissions />} path="submissions" />
            <Route element={<Service />} path="service" />
            <Route
              element={<DetailedSubmission />}
              errorElement={<PageNotFound />}
              path="detailed-submission"
            />
            <Route element={<Result />} errorElement={<PageNotFound />} path="result/:id" />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Route>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  // Website theme
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Preloading state
  const [preloading, setPreloading] = useState(true);

  // Display preloading animation
  useEffect(() => {
    setTimeout(() => {
      setPreloading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {preloading && <Preloader />}

      {!preloading && (
        <AuthProvider>
          <DesignComponent />
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                color: '#000',
                fontWeight: 600,
                background: '#44BBA9'
              },
              duration: 3000
            }}
          />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
