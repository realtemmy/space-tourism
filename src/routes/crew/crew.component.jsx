import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";

import Navigation from "../../components/navigation/navigation.component";
import "./crew.style.scss";

const Crew = () => {
  const { crewCount, setCrewCount, crewData } = useContext(DataContext);

  const { name, role, bio, images } = crewData[crewCount];

  return (
    <div className="crew-container">
      <Navigation />
      <div className="container">
        <div className="text-container">
          <h2 className="title">
            <span>02 </span> Meet your crew
          </h2>
          <div className="role">{role}</div>
          <div className="name">{name}</div>
          <p className="bio">{bio}</p>
          <div className="pages">
            <div className="page" onClick={() => setCrewCount(0)}></div>
            <div className="page" onClick={() => setCrewCount(1)}></div>
            <div className="page" onClick={() => setCrewCount(2)}></div>
            <div className="page" onClick={() => setCrewCount(3)}></div>
          </div>
        </div>
        <div className="image-container">
          <img src={images.png} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Crew;
