import Hero from "./sections/Hero"
import TrendingGames from "./sections/TrendingGames";
import About from "./sections/About";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Subscribe from "../components/Subscribe";

const Home = () => {
    return (<>
        <Hero></Hero>
        <TrendingGames></TrendingGames>
        <About></About>
        <Process></Process>
        <Projects></Projects>
        <Subscribe></Subscribe>
    </>
    )
}

export default Home;
