import Atoms from "../atoms";
import Molecules from "../molecules";

const Form = () => {
  return (
    <Atoms.FormContainer>
      <Atoms.Label>로그인</Atoms.Label>
      <Molecules.Id />
      <Molecules.Password />
      <Atoms.Button login>로그인</Atoms.Button>
    </Atoms.FormContainer>
  );
};

export default Form;
