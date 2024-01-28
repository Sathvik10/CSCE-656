// Home.js

import React from 'react';
import '../styling/Home.css'; // Import a separate CSS file for styling
import GitHubIcon from './Icons/GithubIcon';
import LinkedInIcon from './Icons/LinkedInIcon';

const Home = () => {
  return (
    <section id = "home">
        <div className="home-container">
        <div className="background-image"></div>
          {/* <div className="card">
              <h1>Welcome to My Website</h1>
              <p>This is a description of the content on the home page.</p>
          </div> */}
          <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{"Sathvik Kote"}</h1>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              {"Welcome! This website is an outcome of the course \"Computers and New Media\" (CSCE 656)."}            
            </p>
            <div className="flex gap-x-4 text-neutral-100">
              {/* <Socials /> */}
              {<GitHubIcon link={"https://github.com/Sathvik10"} />}
              {<LinkedInIcon link={"https://www.linkedin.com/in/sathvikkkote/"} />}
            </div>
          </div>
        </div>
        </div>

    </section>
  );
};

export default Home;
