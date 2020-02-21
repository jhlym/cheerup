import React from "react";
import TextCard from "../../components/Card/TextCard";

const ListContainer = () => {
  return (
    <React.Fragment>
      {/* 초기 10개 가져옴 */}
      <TextCard>test</TextCard>
      <TextCard>test</TextCard>
      <TextCard>test</TextCard>
      {/* web socket을 이용해서 실시간으로 가져옴 */}
    </React.Fragment>
  );
};

export default ListContainer;
