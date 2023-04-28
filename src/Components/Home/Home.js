import React from "react";
import './Home.css';

function Home() {
    return (
        // 
        <section className="container flex-col pt-20 md:pt-80 md:max-w[33%]" id="intro">
        <div className="relative m-auto h-screen">
            <figure className="absolute top-0 right-0">
            <img className="rounded-full opacity-75 w-64 sm:w-96 -z-10" src="https://ca.slack-edge.com/T029VH0R0BT-U03SQCKMB3R-4ca6abeea2b3-192" alt="Jane Harrison" />
            </figure>
            <div className="absolute inset-0 flex-col justify-around pt-20 z-20">
            <h1 className="text-left text-7xl md:text-8xl mb-6 z-10 font-light w-[50%]">Hi, I'm <span className="lowercase font-bold">Jane</span>.</h1>
            <p className="text-right text-7xl md:text-8xl z-10 font-light">I solve problems with <span className="font-bold">code</span>.</p>
            </div>
        </div>
        </section>
    );

}

export default Home;
