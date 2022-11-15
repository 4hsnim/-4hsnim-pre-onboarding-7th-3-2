import React from "react";
import Atoms from "../atoms";

const Password = () => {
  return (
    <div>
      <Atoms.Label>비밀번호</Atoms.Label>
      <Atoms.Input placeholder="비밀번호를 입력하세요" />
    </div>
  );
};

export default Password;
