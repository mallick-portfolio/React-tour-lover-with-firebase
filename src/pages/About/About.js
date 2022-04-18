import React from "react";
import myImg from '../../images/about.jpg'
const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <img src={myImg} className="w-100" alt="" />
        </div>
        <div className="col-lg-8 d-flex justify-content-center align-items-center col-md-12">
          <p className="p-5">
           Hi, My name is Tamal Mallick. I am 23 years old.Present, I am a student
            of Computer Science and Engineering at Islamic University
            Bangaldesh. I chose that field of study because I’ve always been
            interested in programming and logic, and a couple of family members
            told me it leads to great career options, too.I would like to have a
            good career in an international company, and grow both personally
            and professionally. My goal is to become an excellent Web
            Developer.I will try to fill up my goal. I will try to learn new
            things regular and try to do practice more and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
