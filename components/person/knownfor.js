import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { helper } from "../../helper/helper";
import { Skeleton, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { api } from "../../api/api";

import Image from 'next/image'
const { Meta } = Card;
SwiperCore.use([Navigation]);
export default function KnownFor() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [dataCast, setDataCast] = useState({});
  useEffect(() => {
    if (!router.isReady) return;
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPeopleMovieById(id);

      if (!helper.isEmptyObject(data)) {
        setDataCast(data.cast);
      }
      setLoading(false);
    };
    getData();
  }, [router.isReady,id]);
  if (loading || helper.isEmptyObject(dataCast)) {
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
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {dataCast.slice(0, 12).map((item, index) => {
        return (
          <SwiperSlide key={item.id} style={{ paddingBottom: "20px" }}>
           <Link href={`/detail/movie/${item.id}`}>
              <a>
                <Card
                  hoverable
                  style={{ width: 150 }}
                  cover={
                    item.poster_path === null && <Image src="/error-image-generic.png" alt="me" width="300" height="450" />
                    ||
                    <img
                      alt={item.original_title}
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    />
                  }
                >
                  <Meta
                    title={item.original_title}
                    description={item.release_date}
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
