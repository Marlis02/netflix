import React, { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

import { Button } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="slider_con">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="myswiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="slide-text">
          <img
            className="slide_img"
            src="https://i.ytimg.com/vi/cWd8mWYeVbM/maxresdefault.jpg"
            alt="dfsd"
          />
          <p className="slide_title">UNHARTED</p>
          <p className="slide_desc">
            Нейтан Дрейк не видел старшего брата Сэма 15 лет, с тех пор как тот
            сбежал из сиротского приюта. Парень работает барменом и промышляет
            мелким воровством, когда на него выходит Виктор Салливан по прозвищу
            Салли и предлагает отправиться на поиски давно потерянных сокровищ
            Магеллана. Узнав, что Салли знаком с Сэмом, Нейтан соглашается на
            авантюру, надеясь также отыскать и брата.
          </p>
          <NavLink to="/detail/0ksXGliF756C9UhW6sz1">
            <Button style={{}} className="slide_btn" variant="contained">
              <PlayArrowIcon /> Play
            </Button>
          </NavLink>
          <Button className="slide_btn1" variant="contained">
            <InfoSharpIcon /> More info
          </Button>
        </SwiperSlide>
        <SwiperSlide className="slide-text">
          <img
            className="slide_img"
            src="https://media.npr.org/assets/img/2022/02/28/the-batman-_wide-856e1f8c8d6ee1b571c16a8c1cacb40aa2c23ef0-s1400-c100.jpeg"
            alt="dfsd"
          />
          <p className="slide_title">Batman</p>
          <p className="slide_desc">
            С помощью команды SELECT результаты были возвращены в том же
            порядке,в котором записи были добавлены в базу данных. Это порядок
            сортировки по умолчанию. сортировки по умолчанию.
          </p>
          <NavLink to="/detail/JLpdFoYLQaxWMf0t5ICD">
            <Button style={{}} className="slide_btn" variant="contained">
              <PlayArrowIcon /> Play
            </Button>
          </NavLink>
          <Button className="slide_btn1" variant="contained">
            <InfoSharpIcon /> More info
          </Button>
        </SwiperSlide>
        <SwiperSlide className="slide-text">
          <img
            className="slide_img"
            src="https://phonoteka.org/uploads/posts/2022-09/1664201677_5-phonoteka-org-p-ragnar-oboi-instagram-5.jpg"
            alt="dfsd"
          />
          <p className="slide_title">Batman</p>
          <p className="slide_desc">
            С помощью команды SELECT результаты были возвращены в том же
            порядке,в котором записи были добавлены в базу данных. Это порядок
            сортировки по умолчанию. сортировки по умолчанию.
          </p>
          <Button style={{}} className="slide_btn" variant="contained">
            <PlayArrowIcon /> Play
          </Button>
          <Button className="slide_btn1" variant="contained">
            <InfoSharpIcon /> More info
          </Button>
        </SwiperSlide>
        <SwiperSlide className="slide-text">
          <img
            className="slide_img"
            src="https://img3.akspic.ru/crops/4/9/6/6/6/166694/166694-kalmar-li_chzhon_chzhe-son_gi_hun-park_he_su-hoyeon_young-1920x1080.jpg"
            alt="dfsd"
          />
          <p className="slide_title">Batman</p>
          <p className="slide_desc">
            С помощью команды SELECT результаты были возвращены в том же
            порядке,в котором записи были добавлены в базу данных. Это порядок
            сортировки по умолчанию. сортировки по умолчанию.
          </p>
          <Button style={{}} className="slide_btn" variant="contained">
            <PlayArrowIcon /> Play
          </Button>
          <Button className="slide_btn1" variant="contained">
            <InfoSharpIcon /> More info
          </Button>
        </SwiperSlide>
        <SwiperSlide className="slide-text">
          <img
            className="slide_img"
            src="https://www.rabstol.net/uploads/gallery/main/82/rabstol_net_game_of_thrones_17.jpg"
            alt="dfsd"
          />
          <p className="slide_title">Batman</p>
          <p className="slide_desc">
            С помощью команды SELECT результаты были возвращены в том же
            порядке,в котором записи были добавлены в базу данных. Это порядок
            сортировки по умолчанию. сортировки по умолчанию.
          </p>
          <Button style={{}} className="slide_btn" variant="contained">
            <PlayArrowIcon /> Play
          </Button>
          <Button className="slide_btn1" variant="contained">
            <InfoSharpIcon /> More info
          </Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
