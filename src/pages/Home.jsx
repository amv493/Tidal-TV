import { NavBar } from './../components/NavBar';
import { Header } from "../components/Header";
import { BrowseShows } from "../components/BrowseShows";

export default function Home() {
    return (
        <div className=''>
            <NavBar/>
            <Header />
            <BrowseShows />
        </div>
    );
}