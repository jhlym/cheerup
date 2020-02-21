import React from "react";
import { Input, SubmitButton } from "../../components/Styles/Element";
import { CenterBox } from "../../components/Styles";

const InputContainer = () => {
  return (
    <CenterBox>
      <Input
        type="text"
        placeholder="긍정의 메세지를 전해보세요!!😀"
        width="80%"
      />
      {/* web socket을 이용한 실시간 전송 */}
      <SubmitButton>전송</SubmitButton>
    </CenterBox>
  );
};

export default InputContainer;
