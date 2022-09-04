import { useContext } from "react";
import Navigation from "../../components/navigation/navigation.component";
import { DataContext } from "../../contexts/data-context";

import "./destination.style.scss";

const Destination = () => {
  const { destinationCount, setDestinationCount, destinationData } =
    useContext(DataContext);

  const { name, description, distance, travel, images } =
    destinationData[destinationCount];

  const destPages = [
    {
      name: "Moon",
      isActive: true,
    },
    {
      name: "Mars",
      isActive: false,
    },
    {
      name: "Europa",
      isActive: false,
    },
    {
      name: "Titan",
      isActive: false,
    },
  ];

  return (
    <div className="destination-container">
      <Navigation />
      <h2 className="title">
        <span>01</span> pick your destination
      </h2>
      <div className="content">
        <div className="left">
          <div className="image-container">
            <img src={images.png} alt={name} />
          </div>
        </div>
        <div className="right">
          <div className="links">
            {destPages.map((page, idx) => {
              return (
                <div
                  className={page.isActive ? "active" : "link"}
                  key={idx}
                  onClick={() => setDestinationCount(idx)}
                >
                  {page.name}
                </div>
              );
            })}
          </div>
          <div className="name">{name}</div>
          <p className="description">{description}</p>
          <div className="base-text">
            <div>
              avg. distance <span>{distance}</span>
            </div>
            <div>
              est. time travel <span>{travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
