import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";

const TechDirectory = ({ page, idx, pages }) => {
  const { setTechCount, techCount } = useContext(DataContext);
  pages[techCount].isActive = true;

  return (
    <div
      className={page.isActive ? "active" : "num-link"}
      onClick={() => setTechCount(idx)}
    >{page.id}</div>
  );
};

export default TechDirectory;
