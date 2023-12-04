import { useState } from "react";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'


const Faqs = () => {
    const faqs = [
        {
            'question': 'How does this website work?',
            'answer': 'When a user signIn, the website asynchronously sends requests to the Firebase server, retrieving the results for all regular and supplementary quizzes across all questions associated with the given topic.'
        },
        {
            'question': 'Was the entire code written by you?',
            'answer': 'The entire backend logic has been developed by Shibham Saha along with my modification. You are welcome to use the code in any way you see fit by following the GPT license, and if you have any questions or need assistance, please dont hesitate to reach out to us.'
        },
        {
            'question': 'How do I access to submit quizzes?',
            'answer': 'To access your submission for all semesters, fill up the form given in the provided inbox.'
        },
        {
            'question': 'What is the purpose of the backend in this project?',
            'answer': 'The backend serves as the backbone of the NeyQuize projects. It is responsible for fetching and parsing the results of both individual students and multiple classmates. By making requests to the Firebase website and utilizing BeautifulSoup, the backend extracts the required data and provides it to the frontend.'
        },
        {
            'question': 'How does the backend fetch the results from the Firebase?',
            'answer': 'Since the Firebase website  provide an API or authentication for content requests, the backend sends requests to the website and captures the responses.'
        },
        {
            'question': 'What technologies are used to develop the website?',
            'answer': 'The website is built using React along with Vite. Vite enables the creation of React-based web applications with server-side rendering and the generation of static websites. The website is hosted on Vercel, which provides fast deployments served from the edge.'
        },
        {
            'question': 'How can I report a bug or ask for help?',
            'answer': 'If you encounter any issues or have questions regarding the website, you can contact the developer via fill the issue in the  Forms. Additionally, if you find a bug, you can submit an issue on the project\'s GitHub repository. You\'re also welcome to contribute by submitting pull requests with bug fixes or changes to the develop branch.'
        },
        {
            'question': 'What are the available API endpoints for fetching results?',
            'answer': 'There are one api.'
        },
        {
            'question': 'Can I suggest ideas for new website tools or features?',
            'answer': 'Yes, you can message me with your ideas for small website tools that you can\'t find online or any other features you\'d like to see.'
        },
        {
            'question': 'How can I report a bug or ask for help related to the backend?',
            'answer': 'If you encounter any issues or have questions regarding the backend setup, deployment, or any special feature implementation, you can contact the developer via email. In case you find a bug, you can submit an issue on the project\'s GitHub repository. Additionally, you are welcome to contribute by submitting pull requests with bug fixes or changes to the main branch.'
        }
    ];


    const [answerVisibility, setAnswerVisibility] = useState(Array(faqs.length).fill(false));


    return (
        <>
            <section className="pt-[75px] ">
                <h3 className='text-center text-xl font-bold hidden md:block font-intercursive'>Frequently Asked Question&apos;s</h3>
                <h3 className='text-center text-xl font-bold block md:hidden font-intercursive'>FAQ&apos;s</h3>
                <center>
                    <div className='max-w-[1024px] font-interer px-[15px]'>

                        <div className='max-w-[540px] w-[100%] '>
                            {faqs.map((value, index) => {
                                return (
                                    <section key={index} className='my-[16px] rounded-[4px] border-[1px] border-solid   '>
                                        <div className='overflow-hidden flex grid-rows-2 p-[13px] bg-[#fff] rounded-[4px]'>


                                            <button className='text-[14px] text-black   w-full text-left '
                                                onClick={() => {
                                                    const newVisibility = [...answerVisibility];
                                                    newVisibility[index] = !newVisibility[index];
                                                    setAnswerVisibility(newVisibility);
                                                }}
                                            >
                                                {value.question}
                                            </button>
                                            <AiOutlineDownCircle className={`text-2xl text-right ${answerVisibility[index] ? 'hidden' : 'block'}`} />
                                            <AiOutlineUpCircle className={`text-2xl text-right  ${answerVisibility[index] ? 'block' : 'hidden'}`} />
                                        </div>
                                        <div className={`text-justify px-[13px] bg-[#f2f2f2] overflow-hidden transition-max-height duration-200 ease-out text-[14px] text-[#1a1a1a] py-[17px] ${answerVisibility[index] ? '' : 'hidden'}`}>
                                            <p>
                                                {value.answer}
                                            </p>
                                        </div>
                                    </section>
                                )
                            })}

                        </div>
                    </div>
                </center>
            </section>
           
        </>
    );
};

export default Faqs;
