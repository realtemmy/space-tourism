import { createContext, useState } from "react";

import DATA from '../data.json';

export const DataContext = createContext({
  destinationData: [],
  crewData: [],
  techData: [],
  destinationCount: 0,
  setDestinationCount: () => {},
  crewCount: 0,
  setCrewCount: ()=>{},
  techCount: 0,
  setTechCount: ()=>{}
});


export const DataProvider = ({children}) =>{

    const [destinationData] = useState(DATA.destinations);
    const[crewData] = useState(DATA.crew);
    const [techData,] = useState(DATA.technology);

    const [destinationCount, setDestinationCount] = useState(0);
    const [crewCount, setCrewCount] = useState(0);
    const [techCount, setTechCount] = useState(0);
    // const [activeClass, setActiveClass] = useState({activeObject: null})

    // console.log(techData)

    const value = {
      destinationData,
      crewData,
      techData,
      destinationCount,
      setDestinationCount,
      crewCount,
      setCrewCount,
      techCount,
      setTechCount
    };

    return <DataContext.Provider value={value}>{ children }</DataContext.Provider>
}