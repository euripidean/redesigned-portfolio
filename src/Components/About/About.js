import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="container flex-col pt-20 md:max-w-[90%] md:pt-0" id="intro">
      <h1 className="text-5xl font-light mb-10">
        <span className="font-bold">ey up</span> /əyˈ uh-p/ </h1>
        <h2 className="text-3xl font-light">{` { `}<strong>'hello'</strong> in Yorkshire {`}`}</h2>
      <p className="text-2xl font-light my-10">I'm <strong>Jane</strong>. I'm a Yorkshire-born, Vancouver-living former ticketing manager now enrolled in the <strong>Dev Degree</strong> program with Shopify.</p>
      <figure className="mb-5">
        <img className="w-full h-60 object-cover" src="./images/York.jpg" alt="York Minster" />
      </figure>
      <p className="text-xl font-light my-5">As I study Applied Computer Science and complete Internship placements, I'm looking to develop skills as a Full-Stack Developer and ultimately specialize in data-focused engineering.</p>
      <h2 class="text-3xl font-bold my-10">Recent Work Experience</h2>
<section class="flex-col max-w-[75%] m-auto md:grid md:grid-cols-2 md:gap-8 md:max-w-[100%] items-top">
  <div className="mb-10 md:border-2 md:border-black md:p-8 md:rounded-sm">
    <figure className="mb-5">
      <img className="p-8" src="./images/shopify.svg" alt="Shopify Logo" />
    </figure>
    <p className="uppercase text-slate-600">Dev Degree Intern</p>
    <p className="text-sm font-bold">Aug '22 - Present</p>
    <ul className="mt-5 list-disc">
        <li className="mb-2">Completed intensive Training Path, learning HTML, CSS, JavaScript, React, Ruby on Rails and MySQL</li>
        <li className="mb-2">Joined Core Product Optimize Team within the Analyze sub-team for first placement</li>
        <li className="mb-2">Most recent impact review in the High Positive category</li>
    </ul>
  </div>
  <div className="mb-10 md:border-2 md:border-black md:p-8 md:rounded-sm">
    <figure className="mb-6">
      <img className="p-6 md:p-11" src="./images/VIFFLogo.png" alt="VIFF Logo" />
    </figure>
    <p className="uppercase text-slate-600">Ticketing and CRM Manager</p>
    <p className="text-sm font-bold">Aug '16 - Aug '22</p>
    <ul className="mt-5 list-disc">
        <li className="mb-2">Led-project to host the 2020 festival online via VIFF Connect</li>
        <li className="mb-2">Project-managed infrastucture update 2021-22, resulting in a new ticketing system, website and CRM.</li>
        <li className="mb-2">Senior Manager in the organization</li>
    </ul>
  </div>
</section>
    {/* <h2 class="text-3xl font-bold my-10">Skills</h2> */}
</section>
    );
}

export default About;
