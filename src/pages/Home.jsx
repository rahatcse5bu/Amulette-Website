import Hero from "../components/Home/Hero/Hero";
import ExperienceAmulette from "../components/Home/ExperinceAmulette/ExperienceAmulette";
import AmuletteFeatures from "../components/Home/AmuletteFeatures/AmuletteFeatures";
import OurProducts from "../components/Home/OurProducts/OurProducts";
import CoreValues from "../components/Home/CoreValues/CoreValues";
import DownloadApp from "../components/Home/DownloadApp/DownloadApp";
import ContactUs from "../components/Home/ContactUs/ContactUs";


const Home = () => {
	return (
		<div className="home-wrapper">
			<div className="home containerr mx-auto text-black">
				<Hero />
				<ExperienceAmulette />
				<AmuletteFeatures />
				<OurProducts />
				<CoreValues />
				<DownloadApp />
				<ContactUs />
			
			</div>
		</div>
	);
};

export default Home;
