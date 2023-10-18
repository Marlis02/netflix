import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop">
        <h1 className="aboutPage_h1">О нас</h1>
      </div>
      <div className="content_aboutPage">
        <div className="block_1">
          <div className="blockImg">
            <img
              className="img1_aboutPage"
              src="https://okko.tv/assets/compiled-images/d8dc57d0.webp"
              alt="There's an img"
            />
          </div>
          <div className="info1">
            <h3 className="first_h3">
              Передовые технологии звука и изображения
            </h3>
            <p className="text_block1">
              Хотите получить от домашнего просмотра те же ощущения, что в
              кинотеатре? В Okko доступно кино со звуком Dolby Atmos и Dolby
              Digital Plus, а также целая коллекция фильмов в качестве Ultra HD
              4K и даже 8K. Никаких помех — полное погружение в мир
              кинематографа!
            </p>
          </div>
        </div>
        <div className="block_2">
          <div>
            <h3 className="second_h3">Что интересного в Netflix</h3>
            <p className="text_block2">
              Популярные сериалы от AMEDIATEKA и START, российские фильмы и
              мировые блокбастеры, артхаус и детский раздел, а также
              образовательные программы, лекции, онлайн-трансляции концертов и
              спектаклей. Кроме того, что есть во всех кинотеатрах, в Netflix
              много собственного, эксклюзивного контента: сериалы,
              документальные расследования, увлекательные шоу. В каталоге тысячи
              наименований, но выбрать кино на вечер можно за пять минут.
              Помогут подборки от редакции и персональные рекомендации,
              учитывающие интересы конкретного зрителя.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              marginLeft: "8%",
            }}
          >
            <img
              className="img2_aboutPage"
              src="https://okko.tv/assets/compiled-images/752d3bac.webp"
              alt="asdsad"
            />
          </div>
        </div>
        <div className="divBtn" style={{ width: "100%", textAlign: "center" }}>
          <NavLink to="/">
            <button className="btn_aboutPage">На главную</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
