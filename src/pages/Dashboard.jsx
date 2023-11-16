
import React from 'react';

const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: "Lenovo’s smarter devices stoke professional passions",
      categories: ["Garden", "Videos"],
      author: {
        name: "Lila",
        avatar: "https://codewithsadee.github.io/vast/assets/images/Dashboard-1.jpg",
      },
      date: "Sep 18, 2021",
      readingTime: 3,
      image: "https://codewithsadee.github.io/vast/assets/images/Dashboard-1.jpg",
      favoriteCount: 337,
      commentsCount: 42,
    },
    // Add more Dashboard entries as needed
  ];

return (
<div class="max-w-screen-md mx-auto">
        
<div class="nc-SingleHeader space-y-5">

    <!-- CATEGORIES -->
    <div class="nc-CategoryBadgeList flex flex-wrap">
        <a href="/" rel="category tag">Games</a> <a href="/category/garden/" rel="category tag">Garden</a>    </div>

    <!-- TITLE -->
    <h1 class="entry-title text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl ">Labore distinctio quam omnis omnis</h1>
    <!-- // ========== SHOW EXCERPT ========== -->
    
    <!-- DIVIDER BORDER -->
    <div class="w-full border-b border-neutral-100 dark:border-neutral-800"></div>

    <!-- META -->
            <div class="flex flex-col lg:flex-row justify-between lg:items-end space-y-5 lg:space-y-0 lg:space-x-5">
            <div class="nc-PostMeta2 nc-PostMeta2-2 flex items-center text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0" data-nc-id="PostMeta2">
                <a class="flex items-center space-x-2" href=" /author/feil-joan/">
                    <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold  rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                        <img class="absolute inset-0 w-full h-full object-cover" src="https://codewithsadee.github.io/vast/assets/images/Dashboard-1.jpg" alt="Frieda">
                    </div>
                </a>
                <div class="ml-3">
                    <div class="flex items-center">
                        <a class="block font-semibold" href=" /author/feil-joan/">
                            Frieda                        </a>
                    </div>
                    <div class="text-xs mt-[6px]">
                        <span class="text-neutral-700 dark:text-neutral-300">
                            Sep 09, 2021                        </span>

                                                    <span class="mx-2 font-semibold">·</span>
                            <span class="text-neutral-700 dark:text-neutral-300">
                                <span class="span-reading-time rt-reading-time"><span class="rt-label rt-prefix"></span> <span class="rt-time"> 3</span> <span class="rt-label rt-postfix">minutes</span></span>                            </span>
                                            </div>
                </div>
            </div>

            
<div class="single-header-meta-area nc-SingleMetaAction2 flex-shrink-0 flex flex-wrap flex-row space-x-2 sm:space-x-2.5 space-y-0.5 sm:space-y-0 items-center ">
    <!-- VIEWS COUNT -->
            <div class="nc-SingleMetaAction2__views relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 flex items-center justify-center mt-0.5 sm:mt-0 px-2 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none" title="Views">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path>
                <circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></circle>
            </svg>
            <span class="nc-SingleMetaAction2__views__number ml-1 text-neutral-900 dark:text-neutral-200">
                2514            </span>
        </div>
    
    <!-- COMMENT COUNTS -->
            <a class="nc-SingleMetaAction2__comments group relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 items-center justify-center px-2 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none flex" title="Comments" href=" /labore-distinctio-quam-omnis-omnis/#comments">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
            </svg>
            <span class="ml-1 text-neutral-900 dark:text-neutral-200 group-hover:text-teal-600">
                3            </span>
        </a>
    
    <!-- DIVIDER -->
            <div class="sm:px-1">
            <div class="border-l border-neutral-200 dark:border-neutral-700 h-6"></div>
        </div>
    
    <!-- LIKE BUTTON -->
            <div class="ncmaz-button-like-post relative text-xs sm:text-sm">
            <button class="simplefavorite-button has-count" data-postid="108" data-siteid="1" data-groupid="1" data-favoritecount="105" style=""><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path></svg><span class="simplefavorite-button-count" style="">105</span></button>        </div>
    
    <!-- DROPDOWN SHARE -->
                    <div class="flex" data-is-react-component="PostCardDropdownShare" data-component-props="{&quot;panelMenusClass&quot;:&quot;w-52 right-0 top-0 origin-bottom-right&quot;,&quot;href&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/labore-distinctio-quam-omnis-omnis\/&quot;,&quot;image&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-2294353-1.jpeg&quot;}"></div>
    
    <!-- DROPDOWN MORE ACTION -->
                
</div>        </div>


    </div>        		<div class="post-thumbnail mt-10">
			<img width="2248" height="1500" src="https://codewithsadee.github.io/vast/assets/images/Dashboard-1.jpg" class="w-full m-0 rounded-xl wp-post-image" alt="" decoding="async" fetchpriority="high" />		</div>
    </div>
</header><!-- .entry-header --><div class="container my-10 ">			<article id="post-108" class="post-108 post type-post status-publish format-standard has-post-thumbnail hentry category-games category-garden tag-corrupti-neque tag-illum tag-iure-ratione tag-unde-cupiditate tag-velit">

	<div id="ncmaz-single-entry-content" class="entry-content prose prose-neutral !max-w-screen-md lg:prose-lg mx-auto dark:prose-invert entry-content--not-has-sidebar">
						
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti dolores necessitatibus suscipit accusantium dignissimos culpa cumque.</p>



<p>Ea nemo et dolorum quidem non est aut. Tempore delectus dolorum delectus omnis velit quia. Nobis eius atque occaeca</p>



<p>It is a long established fact that a&nbsp;<strong>reader</strong>&nbsp;will be distracted by the readable content of a page when looking at its&nbsp;<strong>layout</strong>. The point of using Lorem Ipsum is that it has a more-or-less normal&nbsp;<a href="/#" target="_blank" rel="noreferrer noopener">distribution of letters.</a></p>



<ol><li>We want everything to look good out of the box.</li><li>Really just the first reason, that’s the whole point of the plugin.</li><li>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol>



<h3 class="wp-block-heading">Typography should be easy</h3>



<p>So that’s a header for you — with any luck if we’ve done our job correctly that will look pretty reasonable.</p>



<p>Something a wise person once told me about typography is:</p>



<blockquote class="wp-block-quote"><p>Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.</p></blockquote>



<p>It’s probably important that images look okay here by default as well:</p>



<h2 class="wp-block-heading">What to expect from here on out</h2>



<p>What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like&nbsp;<strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes,&nbsp;<em>and even italics</em>.</p>



<p>It’s important to cover all of these use cases for a few reasons:</p>



<ol><li>We want everything to look good out of the box.</li><li>Really just the first reason, that’s the whole point of the plugin.</li><li>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol>



<p>Now we’re going to try out another header style.</p>






<p>Now I’m going to show you an example of an unordered list to make sure that looks good, too:</p>



<ul><li>So here is the first item in this list.</li><li>In this example we’re keeping the items short.</li><li>Later, we’ll use longer, more complex list items.</li></ul>



<p>And that’s the end of this section.</p>



<h2 class="wp-block-heading">Code should look okay by default.</h2>



<p>I think most people are going to use&nbsp;<a href="https://highlightjs.org/">highlight.js</a>&nbsp;or&nbsp;<a href="https://prismjs.com/">Prism</a>&nbsp;or something if they want to style their code blocks but it wouldn’t hurt to make them look&nbsp;<em>okay</em>&nbsp;out of the box, even with no syntax highlighting.</p>



<p>What I’ve written here is probably long enough, but adding this final sentence can’t hurt.</p>



<pre class="wp-block-code"><code>function tick() {
  const element = (
    &lt;div&gt;
      &lt;h1&gt;Hello, world!&lt;/h1&gt;
      &lt;h2&gt;It is {new Date().toLocaleTimeString()}.&lt;/h2&gt;
    &lt;/div&gt;
  );
  ReactDOM.render(element, document.getElementById('root'));
} </code></pre>



<p>Hopefully that looks good enough to you.</p>



<h2 class="wp-block-heading">There are other elements we need to style</h2>



<p>I almost forgot to mention links, like&nbsp;<a href="https://tailwindcss.com/">this link to the Tailwind CSS website</a>. We almost made them blue but that’s so yesterday, so we went with dark gray, feels edgier.</p>



<p>We even included table styles, check it out:</p>



<figure class="wp-block-table"><table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret “The Hitman” Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor’s Edge</td></tr></tbody></table></figure>



<p>We also need to make sure inline code looks good, like if I wanted to talk about&nbsp;<code>&lt;span&gt;</code>&nbsp;elements or tell you the good news about&nbsp;<code>@tailwindcss/typography</code>.</p>



<h3 class="wp-block-heading">We still need to think about stacked headings though.</h3>



<p>Ea nemo et dolorum quidem non est aut. Tempore delectus dolorum delectus omnis velit quia. Nobis eius atque occaeca</p>







<h4 class="wp-block-heading">Let’s make sure we don’t screw that up h4 elements, either.</h4>



<p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>



<p>Ea nemo et dolorum quidem non est aut. Tempore delectus dolorum delectus omnis velit quia. Nobis eius atque occaeca</p>



<p>Let’s add a closing paragraph here so things end with a decently sized block of text. I can’t explain why I want things to end that way but I have to assume it’s because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
<div class="clear-both"></div>		<div class="clear-both"></div>
	</div>
	<div class="clear-both"></div>

	<!-- ENTRY FOOTER TAGS -->
	<footer class="entry-footer">
		<div class="max-w-screen-md mx-auto pb-10 border-b border-neutral-200 dark:border-neutral-700"><ul class="mt-10 flex flex-wrap"><li><a class="nc-Tag inline-block bg-white text-sm text-neutral-600 py-1.5 px-3 rounded-lg border border-neutral-100 md:py-2 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 mr-2 mb-2" href=" /tag/corrupti-neque/">Corrupti neque</a></li><li><a class="nc-Tag inline-block bg-white text-sm text-neutral-600 py-1.5 px-3 rounded-lg border border-neutral-100 md:py-2 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 mr-2 mb-2" href=" /tag/illum/">Illum</a></li><li><a class="nc-Tag inline-block bg-white text-sm text-neutral-600 py-1.5 px-3 rounded-lg border border-neutral-100 md:py-2 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 mr-2 mb-2" href=" /tag/iure-ratione/">Iure ratione</a></li><li><a class="nc-Tag inline-block bg-white text-sm text-neutral-600 py-1.5 px-3 rounded-lg border border-neutral-100 md:py-2 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 mr-2 mb-2" href=" /tag/unde-cupiditate/">Unde cupiditate</a></li><li><a class="nc-Tag inline-block bg-white text-sm text-neutral-600 py-1.5 px-3 rounded-lg border border-neutral-100 md:py-2 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 mr-2 mb-2" href=" /tag/velit/">Velit</a></li></ul><div class="mt-7"><div class="nc-SingleMetaAction2 flex space-x-2.5 items-center justify-between flex-wrap">
    <div class="flex space-x-2.5 items-center my-2 sm:my-0">
        <!-- VIEWS COUNT -->

                    <div class="ncmaz-button-like-post large relative">
                <button class="simplefavorite-button has-count" data-postid="108" data-siteid="1" data-groupid="1" data-favoritecount="105" style=""><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path></svg><span class="simplefavorite-button-count" style="">105</span></button>            </div>
        
        <!-- COMMENT COUNTS -->
                    <a class="nc-SingleMetaAction2__comments group relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-4 h-9 text-sm focus:outline-none" title="Comments" href=" /labore-distinctio-quam-omnis-omnis/#comments">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                </svg>
                <span class="ml-1 text-neutral-900 dark:text-neutral-200 group-hover:text-teal-600">
                    3                </span>
            </a>
            </div>


    <!-- LIKE BUTTON -->
            <div class="flex space-x-2 items-center my-2 sm:my-0">
            <!-- DROPDOWN SHARE -->
                        <div data-is-react-component="SocialsShare" data-component-props="{&quot;href&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/labore-distinctio-quam-omnis-omnis\/&quot;,&quot;className&quot;:&quot;flex space-x-1 sm:space-x-2 &quot;,&quot;size&quot;:32,&quot;image&quot;:&quot;https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-2294353-1.jpeg&quot;}"></div>
        </div>
    </div></div></div>	</footer>

	<!-- ENTRY AUTHOR -->
	    <div class="max-w-screen-md mx-auto mt-10">
        <div class="nc-SingleAuthor flex">

            <a class="flex space-x-2" href=" /author/feil-joan/">
                <div class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-2xl h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24  ring-1 ring-white dark:ring-neutral-900">
                    <img class="absolute inset-0 w-full h-full object-cover" src="https://codewithsadee.github.io/vast/assets/images/Dashboard-1.jpg" alt="Frieda">
                </div>
            </a>

            <div class="flex flex-col ml-3 max-w-lg sm:ml-5"><span class="text-xs text-neutral-400 uppercase tracking-wider">
                    WRITTEN BY                </span>
                <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                    <a href=" /author/feil-joan/">
                        Frieda                    </a>
                </h2>
                <span class="text-sm text-neutral-500 dark:text-neutral-300">
                    Tempora enim excepturi voluptas eveniet. Optio sed dolorum eius qui.                </span>
            </div>
        </div>
    </div>
 ))}
    </div>
  );
};

export default Dashboard;
