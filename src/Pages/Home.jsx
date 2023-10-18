import Banner from "../Components/Banner";
import Beverage from "../Components/Beverage";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Offer from "../Components/Offer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Offer></Offer>
            <Beverage></Beverage>
            <Footer></Footer>
        </div>
    );
};

export default Home;