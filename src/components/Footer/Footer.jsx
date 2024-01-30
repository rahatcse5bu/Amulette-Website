import Copyright from "./Copyright/Copyright";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import StayWithUs from "./StayWithUs/StayWithUs";
const Footer = () => {
  return (
    <>
      <StayWithUs />
      <div className="footer-wrapper relative bg-[#25282B] lg:pt-[100px] lg:pb-[70px] ">
        <div className="container mx-auto px-0 footer-main flex flex-col lg:flex-row items-center lg:items-start justify-between text-white">
          <DesktopFooter />
          <MobileFooter />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
