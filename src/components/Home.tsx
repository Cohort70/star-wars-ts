import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return (heroId in characters) ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;