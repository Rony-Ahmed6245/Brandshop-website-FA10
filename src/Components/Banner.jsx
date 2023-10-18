
const Banner = () => {
    // Animation
  




    return (
        <div className="banner h-screen w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center py-4">
                    <div data-aos="zoom-in-up" className="text-white text-center md:text-justify">
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-8xl font-bold p">Healthy Smoothie</h1>
                            <p>Food is any substance consumed to provide nutritional support and energy to an organism. It can be raw, processed, or formulated and is consumed orally by animals for growth</p>
                        </div>
                        <img className="absolute md:-z-0 -z-10 -mt-20" src="https://i.ibb.co/1ZPL0Wm/icon-2.png" alt="" />
                    </div>
                    <div data-aos="zoom-in-up">
                        <img className=" w-full p-4" src="https://i.ibb.co/DVDTC9j/content-image-2.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;