import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";
import Navigation from "../../components/navigation/navigation.component";
import TechDirectory from "../../components/tech-directory/tech-directory.component";

import "./technology.style.scss";

const Technology = () => {
  const { techCount, techData } = useContext(DataContext);

  const { name, description, images } = techData[techCount];

  const techPages = [
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
    <div className="tech-container">
      <Navigation />
      <h2 className="title">
        <span>03 </span>space launch 101
      </h2>
      <div className="tech-content">
        <div className="text-container">
          <div className="num-links">
            {techPages.map((page, idx) => (
              <TechDirectory
                key={idx}
                page={page}
                idx={idx}
                pages={techPages}
              />
            ))}
          </div>
          <div className="text-context">
            <div className="tech">The terminology</div>
            <div className="name">{name}</div>
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="image-container">
          <img src={images.portrait} alt={name} />
        </div>
      </div>
    </div>
  );
};
export default Technology;
