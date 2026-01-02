import Hero from "./sections/Hero"
import TrendingGames from "./sections/TrendingGames";
import About from "./sections/About";
import Process from "./sections/Process";
import Projects from "./sections/Projects";

const Home = () => {
    return (<>
        <Hero></Hero>
        <TrendingGames></TrendingGames>
        <About></About>
        <Process></Process>
        <Projects></Projects>
    </>
    )
}

export default Home;
