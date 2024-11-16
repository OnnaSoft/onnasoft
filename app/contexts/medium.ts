import { createContext } from "react";
import { MediumFeed } from "~/models/medium";

export type MediumContextType = MediumFeed | null;

const MediumContext = createContext<MediumContextType>(null);

export default MediumContext;
