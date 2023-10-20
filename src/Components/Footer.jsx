

const Footer = () => {
    return (
        <div className="footer-bg">
            <footer className="footer p-10  text-neutral-content max-w-7xl mx-auto px-4 md:px-4">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <div className="flex w-10">
                        <img className="w-[70px] " src={'https://i.ibb.co/1ZPL0Wm/icon-2.png'} alt="" />
                        <h1 className="text-3xl font-bold uppercase">food<span className="text-4xl lowercase">i</span>ly</h1>
                    </div>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;