

function Exam() {
  const { id } = useParams();
  const { loading, error, quiz } = useQuiz(id);
  const [qnaSet, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const date = useMemo(() => new Date(), []);

  useEffect(() => {
    dispatch({
      type: 'quiz',
      value: quiz
    });
  }, [quiz]);

  // Answer option selection
  const handleAnswerChange = useCallback(
    (e, questionIndex, optionIndex) => {
      dispatch({
        type: 'answer',
        questionID: questionIndex,
        optionIndex: optionIndex,
        value: e.target.checked
      });
    },
    [dispatch]
  );

  // Submit Quiz and store result in the database
  const submitQuiz = useCallback(async () => {
    // ... (existing logic)
  }, [currentUser, date, id, navigate, qnaSet]);

  return (
    <>
      {loading && <p className="page-heading text-lg">Loading ...</p>}
      {error && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length === 0 && <PageNotFound />}
      {!loading && !error && qnaSet && qnaSet?.length > 0 && (
        <div className="mx-auto w-[85%] animate-reveal">
          <h1 className="page-heading">{id.split('-').join(' ')} Quiz!</h1>
          <Rules />
          <div className="card mb-40 flex flex-col justify-center rounded-md p-3">
            {qnaSet.map((question, questionIndex) => (
              <div key={questionIndex} className="mb-8">
                <div className="flex flex-col items-center justify-center text-xl font-bold text-black dark:text-white sm:text-3xl">
                  Q. {question.title}
                </div>
                <hr className="mb-3 mt-3 h-px border-0 bg-primary" />
                <AnswerBox
                  input
                  handleChange={(e, optionIndex) =>
                    handleAnswerChange(e, questionIndex, optionIndex)
                  }
                  options={question.options}
                />
              </div>
            ))}
          </div>
          <button onClick={submitQuiz} className="btn btn-primary">
            Submit Quiz
          </button>
        </div>
      )}
    </>
  );
}

export default Exam;
