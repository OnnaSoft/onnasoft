import { createContext } from "react";

export type LandingContextType = {
  blogUrl: string;
};

const LandingContext = createContext<LandingContextType>({
  blogUrl: "",
});

export default LandingContext;
