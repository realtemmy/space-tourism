import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";
import Navigation from "../../components/navigation/navigation.component";

import "./technology.style.scss";

const Technology = () => {
  const { techCount, setTechCount, techData } = useContext(DataContext);

  const { name, description, images } = techData[techCount];
  // console.log(images)

  return (
    <div className="tech-container">
      <Navigation />
      <h2 className="title">
        <span>03 </span>space launch 101
      </h2>
      <div className="tech-content">
        <div className="tech">The terminology</div>
        <div className="text-container">
          <div className="num-links">
            <div className="num-link" onClick={() => setTechCount(0)}>
              1
            </div>
            <div className="num-link" onClick={() => setTechCount(1)}>
              2
            </div>
            <div className="num-link" onClick={() => setTechCount(2)}>
              3
            </div>
          </div>
          <div className="text-context">
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
