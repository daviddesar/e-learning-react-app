import React from "react";
import "./category.scss";
import SchoolCard from "./SchoolCard/SchoolCard";

export default function Category() {
  return (
    <div className="category">
      <div className="category__container">
        <div className="category__left">
          <p className="left__title">
            Check Out Our Newest And Most Popular Programs
          </p>
          <p className="left__subtitle">
            With our growing catalog of over 30 Nanodegree programs from
            beginner to advanced, you're sure to find one that fits your career
            goals. <br />
            You’ll have access to career coaching sessions, interview prep advice, and resume and online professional profile reviews to help you grow in your career.
          </p>
          <a href="/" className="left__link">
            SEE ALL PROGRAMS <i className="fa fa-angle-right"></i>
          </a>
        </div>
        <div className="category__right">
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/4MYnzcSM3OAgxOPzYJh02J/67baf6b3c24f4ebd9b1d0f4894e4d9c5/hero-bg-1180x624__1_.jpg"
            itemTitle="UX Designer"
            introSubject="Business"
          />
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/69rPUREWYS2lQL9YATz1Pq/a7b83cdf8756e0d04d81cae9a8277584/hero-bg-1180x624.jpg"
            itemTitle="Data Streaming"
            introSubject="Data Science"
          />
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/2OvOroBjUKUxDP1TBANhDt/388c1cd10c425df6e57e43423047f844/nd088_-_hero.jpg"
            itemTitle="AI Product Manager"
            introSubject="Artificial Intelligence"
          />
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/2OvOroBjUKUxDP1TBANhDt/388c1cd10c425df6e57e43423047f844/nd088_-_hero.jpg"
            itemTitle="Intro To Programming"
            introSubject="Programming"
          />
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/69rPUREWYS2lQL9YATz1Pq/a7b83cdf8756e0d04d81cae9a8277584/hero-bg-1180x624.jpg"
            itemTitle="Digital Marketing"
            introSubject="Marketing"
          />
          <SchoolCard
            imgLink="https://images.ctfassets.net/2y9b3o528xhq/4MYnzcSM3OAgxOPzYJh02J/67baf6b3c24f4ebd9b1d0f4894e4d9c5/hero-bg-1180x624__1_.jpg"
            itemTitle="Data Structures And Algorithms"
            introSubject="Programming"
          />
        </div>
      </div>
    </div>
  );
}
