import Copyright from "./Copyright/Copyright";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import StayWithUs from "./StayWithUs/StayWithUs";
const Footer = () => {
	return (
		<div className="footer">
			<div className="stay-with-us-wrapper desktop hiddnen lg::block">
				<StayWithUs />
			</div>
			<div className="footer-wrapper relative bg-[#25282B] lg:pt-[100px] lg:pb-[70px] ">
				<div className="container mx-auto px-0 footer-main flex flex-col lg:flex-row items-center lg:items-start justify-between text-white">
					<DesktopFooter />
					<MobileFooter />
				</div>
				<Copyright />
			</div>
		</div>
	);
};

export default Footer;
