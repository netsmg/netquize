import { Link } from 'react-router-dom';

import { Footer, Thumbnail } from '../components';
import { useData } from '../hooks';

function Quizzes() {
  const { loading, error, data } = useData('topics');

  return (
    <>
      <div className="mx-auto mb-32 flex min-h-screen w-[90%] animate-reveal flex-col items-center">
        <h1 className="page-heading">Attempt Quizzes</h1>
        {data.length > 0 && (
          <div className="mx-auto grid h-full w-full grid-cols-quizzes justify-items-center gap-7 block max-w-sm p-6 bg-white border border-blue-800 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {data.map((topic, index) =>
              topic.noq > 0 ? (
                <Link key={topic.topicID} to={`/quiz/${topic.topicID}`}>
                  <Thumbnail id={topic.topicID} noq={topic.noq} title={topic.title} type="quiz" />
                </Link>
              ) : (
                <div key={index} className="w-full">
                  <Thumbnail id={topic.topicID} noq={topic.noq} title={topic.title} type="quiz" />
                </div>
              )
            )}
          </div>
        )}

        <div className="flex items-center justify-center text-center text-xl">
          {!loading && data.length === 0 && <>No data found!</>}
          {error && <>There was an error! Perhaps you are not registerd user only registered user can get access.To get access fill up the contact-form.</>}
          {loading && <>Loading ...</>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Quizzes;
