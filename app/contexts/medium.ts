import { createContext } from "react";
import { MediumFeed } from "~/models/medium";

export type MediumContextType = MediumFeed;

const MediumContext = createContext<MediumContextType>({
  items: [],
});

export default MediumContext;
