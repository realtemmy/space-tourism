import { useContext } from "react";
import { DataContext } from "../../contexts/data-context";

const DestinationDirectory = ({ page, idx, pages }) => {
  const { setDestinationCount, destinationCount } = useContext(DataContext);
    pages[destinationCount].isActive = true
  return (
    <div
      className={page.isActive ? "active" : "link"}
      onClick={() => setDestinationCount(idx)}
    >
      {page.name}
    </div>
  );
};

export default DestinationDirectory;
