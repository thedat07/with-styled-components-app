import Slider from "react-slick";
export default function SlickSlider({ ...item }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{item}</Slider>;
}
