import React from "react";
import Slide from "../components/slide";

function SinglePage({ pageContext }) {
    const { dataSource } = pageContext;
    const { countryByCc, globalStats } = dataSource;

    console.log(countryByCc);
    console.log(globalStats);

    return (
        <div>
            <h1>코로나 보드</h1>
            <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
        </div>
    )
}

export default SinglePage;