import React from 'react';


const Resulto = () => { 
    return (
        
          <div> <div className="card"> <div className="img"> <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> </div> <div className="infos"> <div className="name"> <h2>Mohammad Al-amin</h2> <h4>@al_amin2k23</h4> </div> <p className="text"> I'm a Front End Developer, follow me to be the first who see my new work. </p> <ul className="stats"> <li> <h3>15K</h3> <h4>Views</h4> </li> <li> <h3>82</h3> <h4>Projects</h4> </li> <li> <h3>1.3M</h3> <h4>Followers</h4> </li> </ul> <div className="links"> <button className="follow">Follow</button> <button className="view">View profile</button> </div> </div> </div><style dangerouslySetInnerHTML={{__html: "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700&display=swap');\n\n* {\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nbody {\n font-family: 'Poppins', sans-serif;\n align-items: center;\n justify-content: center;\n background-color: #ADE5F9;\n min-height: 100vh;\n}\nimg {\n max-width: 100%;\n display: block;\n}\nul {\n list-style: none;\n}\n\n/* Utilities */\n.card::after,\n.card img {\n border-radius: 50%;\n}\nbody,\n.card,\n.stats {\n display: flex;\n}\n\n.card {\n padding: 2.5rem 2rem;\n border-radius: 10px;\n background-color: rgba(255, 255, 255, .5);\n max-width: 500px;\n box-shadow: 0 0 30px rgba(0, 0, 0, .15);\n margin: 1rem;\n position: relative;\n transform-style: preserve-3d;\n overflow: hidden;\n}\n.card::before,\n.card::after {\n content: '';\n position: absolute;\n z-index: -1;\n}\n.card::before {\n width: 100%;\n height: 100%;\n border: 1px solid #FFF;\n border-radius: 10px;\n top: -.7rem;\n left: -.7rem;\n}\n.card::after {\n height: 15rem;\n width: 15rem;\n background-color: #4172f5aa;\n top: -8rem;\n right: -8rem;\n box-shadow: 2rem 6rem 0 -3rem #FFF\n}\n\n.card img {\n width: 8rem;\n min-width: 80px;\n box-shadow: 0 0 0 5px #FFF;\n}\n\n.infos {\n margin-left: 1.5rem;\n}\n\n.name {\n margin-bottom: 1rem;\n}\n.name h2 {\n font-size: 1.3rem;\n}\n.name h4 {\n font-size: .8rem;\n color: #333\n}\n\n.text {\n font-size: .9rem;\n margin-bottom: 1rem;\n}\n\n.stats {\n margin-bottom: 1rem;\n}\n.stats li {\n min-width: 5rem;\n}\n.stats li h3 {\n font-size: .99rem;\n}\n.stats li h4 {\n font-size: .75rem;\n}\n\n.links button {\n font-family: 'Poppins', sans-serif;\n min-width: 120px;\n padding: .5rem;\n border: 1px solid #222;\n border-radius: 5px;\n font-weight: bold;\n cursor: pointer;\n transition: all .25s linear;\n}\n.links .follow,\n.links .view:hover {\n background-color: #222;\n color: #FFF;\n}\n.links .view,\n.links .follow:hover{\n background-color: transparent;\n color: #222;\n}\n\n@media screen and (max-width: 450px) {\n .card {\n display: block;\n }\n .infos {\n margin-left: 0;\n margin-top: 1.5rem;\n }\n .links button {\n min-width: 100px;\n }\n}\n" }} /> </div>
        
               
    );
  
};

export default Resulto;



