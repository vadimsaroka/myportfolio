import React from "react";
import Link from "next/link";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__content">
      <div className="home__header">
        <h2 className="home__top">
          <span className="animated">H</span>
          <span className="animated">e</span>
          <span className="animated">l</span>
          <span className="animated">l</span>
          <span className="animated">o</span>
          <span className="animated">,</span>
          <span className="empty"> </span>
          <span className="animated">I</span>
          <span className="animated">'</span>
          <span className="animated">m</span>
          <span className="empty"> </span>
          <span className="animated">V</span>
          <span className="animated">a</span>
          <span className="animated">d</span>
          <span className="animated">i</span>
          <span className="animated">m</span>
        </h2>
        <h2 className="home__bottom">
          <span className="animated">f</span>
          <span className="animated">r</span>
          <span className="animated">o</span>
          <span className="animated">n</span>
          <span className="animated">t</span>
          <span className="animated">-</span>
          <span className="animated">e</span>
          <span className="animated">n</span>
          <span className="animated">d</span>
          <span className="empty"> </span>
          <span className="animated">w</span>
          <span className="animated">e</span>
          <span className="animated">b</span>
          <span className="empty"> </span>
          <span className="animated">d</span>
          <span className="animated">e</span>
          <span className="animated">v</span>
          <span className="animated">e</span>
          <span className="animated">l</span>
          <span className="animated">o</span>
          <span className="animated">p</span>
          <span className="animated">e</span>
          <span className="animated">r</span>
        </h2>
      </div>
      <div className="home__btns">
        <Link href="/contact">
          <a className="home__btn from-right">Get in touch</a>
        </Link>
        <Link href="/about">
          <a className="home__btn from-right">About Me</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
