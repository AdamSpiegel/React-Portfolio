import React from 'react';
import "../css/AboutMe.css";

function About() {
    return (
        <section className="">
            <div className="">
                <h1 className="">Adam Spiegel</h1>
                <div className="info">
                    <p>
                        Hello! My name is Adam Spiegel and I am a Full Stack Web Developer with extensive experience in Program and Project Management. A proven team leader and collaborator with 9 years of managerial experience within the corporate health and wellness industry. Currently leveraging strong problem solving and analytical skills through the UConn Full Stack Web Development Bootcamp program, slated to graduate on September 2nd, 2021.
                    </p>
                </div>
                <div className="pic">
                    <img src={pic} alt="Pratik" id="Pratik" />
                </div>
            </div>
        </section>
    );
}

export default About;

