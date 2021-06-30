import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { helper } from "../../helper/helper";
import { Skeleton, Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
SwiperCore.use([Navigation]);
export default function PopularTV({ isLoading, isData = {} }) {
  if (isLoading || helper.isEmptyObject(isData)) {
    return <Skeleton active />;
  }
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {isData.slice(0, 12).map((item, index) => {
        return (
          <SwiperSlide key={item.id} style={{ paddingBottom: "20px" }}>
            <Link href={`/detail/tv/${item.id}`}>
              <a>
                <Card
                  hoverable
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt={item.poster_path}
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    />
                  }
                >
                  <Meta
                    title={item.title || item.original_name}
                    description={item.release_date || item.first_air_date}
                  />
                </Card>
              </a>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
