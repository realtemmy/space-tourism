import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";

import Navigation from "../../components/navigation/navigation.component";
import CrewDirectory from "../../components/crew-directory/crew-directory.component";
import "./crew.style.scss";

const Crew = () => {
  const { crewCount, crewData } = useContext(DataContext);

  const { name, role, bio, images } = crewData[crewCount];

  const crewPages = [
    {
      id: 0,
      isActive: false,
    },
    {
      id: 1,
      isActive: false,
    },
    {
      id: 2,
      isActive: false,
    },
    {
      id: 3,
      isActive: false,
    },
  ];
  return (
    <div className="crew-container">
      <Navigation />
      <div className="container">
        {/* <h2 className="title">
          <span>02 </span> Meet your crew
        </h2> */}
        <div className="text-container">
          <h2 className="title">
            <span>02 </span> Meet your crew
          </h2>
          <div className="role">{role}</div>
          <div className="name">{name}</div>
          <p className="bio">{bio}</p>
          <div className="pages">
            {crewPages.map((page, idx) => (
              <CrewDirectory
                key={idx}
                page={page}
                idx={idx}
                pages={crewPages}
              />
            ))}
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
