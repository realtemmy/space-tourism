import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";

const CrewDirectory = ({page, idx, pages}) =>{
    const { setCrewCount, crewCount } = useContext(DataContext);
    pages[crewCount].isActive = true;

    return (
      <div
        className={page.isActive ? "active" : "page"}
        onClick={() => setCrewCount(idx)}
      ></div>
    );
}

export default CrewDirectory;