import React from "react";
import Slide from "../components/slide";

function SinglePage({ pageContext }) {
    const { dataSource } = pageContext;
    const { thirdSlideTitle } = dataSource;

    return (
        <div>
            <h1>코로나 보드</h1>
            <p>createPages로 만들어진 페이지 입니다.</p>
            <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
            <Slide title="대한민국 지역별 현황">대한민국 지역별 현황을 보여줍니다.</Slide>
            <Slide title={thirdSlideTitle}>예방행동 수칙을 보여줍니다.</Slide>
        </div>
    )
}

export default SinglePage;