import React from "react";
import { Container } from "../components/Styles";
import InputContainer from "../containers/Main/InputContainer";
import ListContainer from "../containers/Main/ListContainer";

const MainPage = () => {
  return (
    <Container>
      {/* Logo */}
      {/* Input form */}
      <InputContainer />
      {/* List form */}
      <ListContainer />
      {/* Footer */}
    </Container>
  );
};

export default MainPage;
