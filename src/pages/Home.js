import Styled from "styled-components"

import HeroSection from "../sections/HeroSection"
import About from "../sections/About"
import Services from "../sections/Services"
import Testimonials from "../sections/Testimonials"
import Contact from "../sections/Contact"

const Container = Styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`

const Home = () => {
    return (
        <div>
            <Container>
                <HeroSection />
                <About />
                <Services />
                <Testimonials />
                <Contact />
            </Container>
        </div>
    );
}

export default Home;