import React from "react";
import { Col } from "antd";

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${props.movieId}`}>
          <img
            style={{ width: "100%", height: "320px" }}
            src={props.image}
            alt={props.movieName}
          />
        </a>
      </div>
    </Col>
  ); // 한 컬럼에 24사이즈, lg 라지사이즈일땐 하나 6(x4=24이므로 4개 카드), md 미들 사이즈일땐 하나 8(x3=24이므로 3개카드), xs 작은 사이즈일땐 하나 24(x1=24이므로 1개카드)
}

export default GridCards;
