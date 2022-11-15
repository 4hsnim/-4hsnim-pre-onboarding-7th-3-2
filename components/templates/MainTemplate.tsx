import Atoms from "../atoms";
import Molecules from "../molecules";

import bar from "../../assets/bar.svg";
import circle from "../../assets/circle.svg";
import circleQuestion from "../../assets/circle-question.svg";
import bell from "../../assets/bell.svg";
import Image from "next/image";

const MainTemplate = () => {
  return (
    <Atoms.Container flexDirection="row">
      <Atoms.SiderContainer>
        <Atoms.Title fontSize="5rem" color="white">
          PREFACE
        </Atoms.Title>
        <Molecules.SiderMenu />
      </Atoms.SiderContainer>
      <Atoms.Container>
        <Atoms.HeaderWrpper>
          <Atoms.HeaderIconWrapper>
            <Image src={bar} alt="bar" width={24} height={24} />
            <Atoms.Title fontSize="1.6rem">투자계좌</Atoms.Title>
          </Atoms.HeaderIconWrapper>

          <Atoms.HeaderIconWrapper>
            <Image src={circle} alt="circle" width={24} height={24} />
            <Atoms.Text>개발</Atoms.Text>
            <Image
              src={circleQuestion}
              alt="circleQuestion"
              width={24}
              height={24}
            />
            <Image src={bell} alt="bell" width={24} height={24} />
          </Atoms.HeaderIconWrapper>
        </Atoms.HeaderWrpper>
      </Atoms.Container>
    </Atoms.Container>
  );
};

export default MainTemplate;

export const LOGO_URL = "https://i.imgur.com/GQdmP1A.png" as const;
export const HEADER_ICON = "https://i.imgur.com/FIViGta.png" as const;
export const LOGIN_LOGO_LEFT = "https://i.imgur.com/IVhgP5y.png" as const;
export const LOGIN_LOGO_RIGHT = "https://i.imgur.com/TSAQGdc.png" as const;
