import { FilterFilled, YoutubeOutlined } from "@ant-design/icons";
import { Modal, Button, Row, Col } from "antd";
import Link from "next/link";
import { useState } from "react";
import { helper } from "../../helper/helper";
import styled from "styled-components";

const BannerContainer = styled.div``;
const BannerBackground = styled.div`
  position: relative;
  text-align: center;
  color: white;
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: brightness(0.25);
  }
`;
const BannerContent = styled.div`
  position: absolute;
  width: 100%;
  top: 15%;
  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    filter: brightness(1);
    
    @media only screen and (max-width: 800px) {
      height: 90%;
    }
  }
  h4 {
    color: white;
    font-weight: 500;
  }
  h4 .time {
    padding: 0 10px;
    border-right: 1px solid rgb(255, 255, 255, 0.5);
  }
  h4 a {
    padding: 0 10px;
    border-right: 1px solid rgb(255, 255, 255, 0.5);
  }
  h4 a:last-child {
    border-right: none;
  }
  h1 {
    color: white;
  }
  p {
    font-weight: 1em;
    font-weight: 300;
    line-height: 1.5em;
    color: #fff;
    margin: 10px 0 20px;
  }
  .play {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 1.2em;
    cursor: pointer;
  }
`;
const BannerImage = styled.div``;
export default function Banner({ dataMovie }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let key = null;
  if (dataMovie.videos.results.length === 0) {
    key = null;
  } else {
    key = dataMovie.videos.results[0].key;
  }
  console.log(dataMovie.backdrop_path);

  return (
    <Row>
      <Col span={24}>
        <BannerContainer>
          <BannerBackground>
            {(dataMovie.backdrop_path == null && (
              <img
                style={{
                  width: "1250px",
                  height: "703px",
                  backgroundColor: "black",
                }}
              ></img>
            )) || (
              <img
              style={{
                width: "1250px",
                height: "703px",
              }}
                src={`https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}`}
              ></img>
            )}
            <BannerContent>
              <Row>
                <Col span={10} offset={1}>
                  {(dataMovie.poster_path == null && (
                    <img
                      style={{
                        width: "300px",
                        height: "450px",
                        backgroundColor: "black",
                      }}
                    ></img>
                  )) || (
                    <img
                      style={{
                        width: "300px",
                        height: "450px",
                        backgroundColor: "black",
                      }}
                      src={`https://image.tmdb.org/t/p/w300/${dataMovie.poster_path}`}
                    
                    ></img>
                  )}
                </Col>
                <Col span={10} offset={1}>
                  <h4>
                    <span className="time">{dataMovie.release_date}</span>
                    {dataMovie.genres.map((item, _) => {
                      return (
                        <Link href={`/genres/${item.id}`} key={item.id}>
                          <a>
                            <span>{item.name}</span>
                          </a>
                        </Link>
                      );
                    })}
                  </h4>
                  <h1>{dataMovie.original_title}</h1>
                  <p>{dataMovie.overview}</p>
                  <Button type="link" onClick={showModal} className="play">
                    <YoutubeOutlined /> Watch Trailer
                  </Button>
                  <Modal
                    title="Watch Trailer"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                  >
                    {(dataMovie.videos == null && (
                      <div>Not found data</div>
                    )) || (
                      <iframe
                        src={`https://www.youtube.com/embed/${key}`}
                        title={dataMovie.name}
                        width="100%"
                        height="350"
                      ></iframe>
                    )}
                  </Modal>
                </Col>
              </Row>
            </BannerContent>
          </BannerBackground>
        </BannerContainer>
      </Col>
    </Row>
  );
}
