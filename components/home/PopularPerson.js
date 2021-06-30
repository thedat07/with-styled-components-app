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
export default function PopularPerson() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dataCast, setDataCast] = useState({});
  useEffect(() => {
    if (!router.isReady) return;
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPerson();

      if (!helper.isEmptyObject(data)) {
        setDataCast(data.results);
      }
      setLoading(false);
    };
    getData();
  }, []);
  if (loading || helper.isEmptyObject(dataCast)) {
    return <Skeleton active />;
  }
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
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
      {dataCast.slice(0, 12).map((item, index) => {
        return (
          <SwiperSlide key={item.id} >
            <Link href={`/person/${item.id}`}>
              <a>
                <Card
                  hoverable
                  style={{width: 170}}
                  cover={
                    item.profile_path === null && <Image src="/error-image-generic.png" alt="me" width="300" height="450" />
                    ||
                    <img
                      alt={item.poster_path}
                      src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                    />
                  }
                >
                  <Meta
                    title={item.name}
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
