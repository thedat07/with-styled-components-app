import { Skeleton } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { helper } from "../../helper/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
export default function CarouselHome() {
  const [loading, setLoading] = useState(false);
  const [dataPopularMovies, setDataPopularMovies] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPopularMovies(1);

      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty("results")) {
          setDataPopularMovies(data.results);
        }
      }
      setLoading(false);
    };
    getData();
  }, []);
  if (loading || helper.isEmptyObject(dataPopularMovies)) {
    return <Skeleton active />;
  }
  return (
    <div className="container-fluid">
      {/* <Swiper className="mySwiper">
        {dataPopularMovies.slice(0, 12).map((item, _) => {
          return (
            <div className="content">
              <img
                alt={item.original_title}
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              />
            </div>
          );
        })}
      </Swiper> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {dataPopularMovies.slice(0, 5).map((item, _) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                alt={item.original_title}
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
