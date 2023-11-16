import React from 'react';

const Blogpost = ({ title, categories, author, date, readingTime, image, favoriteCount, commentsCount }) => {
  return (
    <div className="nc-FactoryBlockMagazine relative mb-16">
      <div className="relative">
        <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-14 text-neutral-900 dark:text-neutral-50">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Editor's pick 💡</h3>
            <span className="mt-2 md:mt-3 font-normal block text-base md:text-xl text-neutral-500 dark:text-neutral-400">
              Discover the most outstanding articles in all topics of life.
            </span>
          </div>
        </div>
        <div className="ncSectionLargeSlider">
          <div className="nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end">
            <div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-4 sm:-mt-8 md:mt-0 px-2 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
              <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl sm:rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 - nc-dark-box-bg">
                <div className="nc-CategoryBadgeList flow-root" data-nc-id="CategoryBadgeList">
                  <div className="flex flex-wrap space-x-2 -my-1 hidden sm:flex">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href={`https://netquize.vercel.app/category/${category.toLowerCase()}/`}
                        className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs text-green-800 bg-green-100 hover:bg-green-800"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
                <h2 className="nc-card-title text-base sm:text-xl lg:text-2xl font-semibold ">
                  <a href={`https://netquize.vercel.app/${title.split(' ').join('-').toLowerCase()}/`} className="line-clamp-2" title={title}>
                    {title}
                  </a>
                </h2>
                <a href={`https://netquize.vercel.app/author/${author.name.toLowerCase()}/`} className="nc-CardAuthor2 relative inline-flex items-center relative" data-nc-id="CardAuthor2">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-8 w-8 sm:h-9 sm:w-9 text-base flex-shrink-0 mr-3">
                    <img className="absolute inset-0 w-full h-full object-cover" src={author.avatar} sizes="100px" alt={author.name} loading="lazy" />
                    <span className="wil-avatar__name">{author.name[0]}</span>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate">{author.name}</h4>
                    <span className="flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      <span>{date}</span>
                      <span className="hidden lg:inline mx-1 transition-opacity">·</span>
                      <span className="hidden lg:inline transition-opacity truncate ">
                        <span className="span-reading-time rt-reading-time">
                          <span className="rt-label rt-prefix"></span> <span className="rt-time">{readingTime}</span> <span className="rt-label rt-postfix">minutes</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </a>
                <div className="flex items-center justify-between mt-auto">
                  <div className="nc-PostCardLikeAndComment flex items-center space-x-2" data-nc-id="PostCardLikeAndComment">
                    <div className="NetQuize-button-like-post relative">
                      <button className="simplefavorite-button has-count" data-postid="95" data-siteid="1" data-groupid="1" data-favoritecount={favoriteCount}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="simplefavorite-button-count">{favoriteCount}</span>
                      </button>
                    </div>
                    <a href={`https://netquize.vercel.app/${title.split(' ').join('-').toLowerCase()}/#comments`} className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex px-3 h-8 text-xs focus:outline-none" title="Comments" data-nc-id="PostCardCommentBtn">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                      </svg>
                      <span className="ml-1 text-neutral-900 dark:text-neutral-200">{commentsCount}</span>
                    </a>
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      className="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                      title="Share with"
                      id={`headlessui-menu-button-${title}`}
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                          ></path>
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 14.25L12 5"></path>
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.75 8.25L12 4.75L15.25 8.25"></path>
                        </svg>
                        <input type="text" hidden="" className="hidden" value={`https://netquize.vercel.app/${title.split(' ').join('-').toLowerCase()}/`} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
