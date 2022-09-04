import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
// import Destination from "./routes/destination/destination.component";
import Destination from "./routes/destination/destination.component";
import Crew from "./routes/crew/crew.component";
import Technology from "./routes/technology/technology.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/*" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/tech" element={<Technology />} />
    </Routes>
  );
};

export default App;
