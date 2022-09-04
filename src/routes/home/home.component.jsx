import Navigation from '../../components/navigation/navigation.component';

import './home.style.scss'

const Home = () =>{
    return (
      <div className="home-container">
        <Navigation />
        <div className="home-content">
          <div className="home-text">
            <h2>
              So you want to travel <span>space</span>
            </h2>
            <p>
              Let's face it; If u want to go to outer space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back and relax cause we'd give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore"><span>explore</span></div>
        </div>
      </div>
    );
};
export default Home;