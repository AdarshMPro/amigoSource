import GridList from '../components/GridList';
import Header from '../components/Header';

function Home() {
    return(
        <div>
            <Header mode="light" show="true"/>
            <div className="list">
            <GridList />
            </div>
        </div>
    );
}

export default Home;