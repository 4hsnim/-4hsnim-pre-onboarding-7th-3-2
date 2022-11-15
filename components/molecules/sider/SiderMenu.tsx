import Atoms from "../../atoms";
import Image from "next/image";

import dashboard from "../../../assets/dashboard.svg";
import bank from "../../../assets/bank.svg";
import user from "../../../assets/user.svg";
import logout from "../../../assets/logout.svg";

const SiderMenu = () => {
  return (
    <>
      <Atoms.MenuWrpper>
        <Image src={dashboard} alt="대시보드" width={24} height={24} />
        <Atoms.MenuButton>대시보드</Atoms.MenuButton>
      </Atoms.MenuWrpper>
      <Atoms.MenuWrpper>
        <Image src={bank} alt="계좌 목록" width={24} height={24} />
        <Atoms.MenuButton>계좌 목록</Atoms.MenuButton>
      </Atoms.MenuWrpper>
      <Atoms.MenuWrpper>
        <Image src={user} alt="사용자" width={24} height={24} />
        <Atoms.MenuButton>사용자</Atoms.MenuButton>
      </Atoms.MenuWrpper>
      <Atoms.MenuWrpper>
        <Image src={logout} alt="로그아웃" width={24} height={24} />
        <Atoms.MenuButton>로그아웃</Atoms.MenuButton>
      </Atoms.MenuWrpper>
    </>
  );
};

export default SiderMenu;
