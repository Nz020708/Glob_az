import './Shops.scss';
import { Title } from '../TitleofSection/Title';
import React from 'react';
import Slider from 'react-slick';
import slick_img_1 from './images/mlogo.png';
import slick_img_2 from './images/mlogo2.jpg';
import slick_img_3 from './images/mlogo4.png';
import slick_img_4 from './images/mlogo5.jpg';
import slick_img_5 from './images/mlogo6.jpg';
import slick_img_6 from './images/mlogo9.png';
import slick_img_7 from './images/mlogo10.png';
import slick_img_8 from './images/mlogo11.jpg';
// import './Shops.scss';

const items = [
  {
    id: 1,
    link: 'https://www.trendyol.com/butik/liste/1/kadin',
    image: slick_img_1,
  },
  {
    id: 2,
    link: 'https://www.defacto.com.tr/',
    image: slick_img_2,
  },
  {
    id: 3,
    link: 'https://www.lcwaikiki.com/tr-TR/TR',
    image: slick_img_3,
  },
  {
    id: 4,
    link: 'https://www.n11.com/',
    image: slick_img_4,
  },
  {
    id: 5,
    link: 'https://www.flo.com.tr/',
    image: slick_img_5,
  },
  {
    id: 6,
    link: 'pierrecardin.com.tr/?redirected_by=bon.az&utm_source=performics&utm_medium=affiliate&utm_campaign=cps&utm_term=23738&pfx=1021978c76ecb5f9dfd45df48209ae&utm_content=1021978c76ecb5f9dfd45df48209ae',
    image: slick_img_6,
  },
  {
    id: 7,
    link: 'https://www.colins.com.tr/',
    image: slick_img_7,
  },
  {
    id: 8,
    link: 'https://www.bershka.com/tr/h-woman.html',
    image: slick_img_8,
  },
];

export const Shops = () => {
  const settings = {
    centerPadding: '50px',
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    speautoplaySpeeded: 5000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const renderSlides = items.map((item) => (
    <a href={item.link}>
      <img className="slick_img" key={item.id} src={item.image} alt="slick_item" />
    </a>
  ));

  return (
    <section className="shops">
      <Title value="MAĞAZALARIMIZ" isWhite={false} />
      <div className="slick_container">
        <div>
          <Slider {...settings}>{renderSlides}</Slider>
        </div>
      </div>
    </section>
  );
};
