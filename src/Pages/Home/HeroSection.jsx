export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Pauline Wang'ombe</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Frontend</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    I am currently awaiting graduating with a Bachelor of Business and Information Technology. I am interested in the field of cybersecurity, IoT, Cloud and have dabbled in UI/UX. 
                    <br /> I think VR/AR is a very underrated upcoming technology. It has many great uses and should be tapped into more.
                    </p>   
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>

        </section>
    );
}