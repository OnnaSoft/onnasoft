import { createContext } from "react";

export type LandingContextType = {
  blogUrl: string;
  hydrated: boolean;
};

const LandingContext = createContext<LandingContextType>({
  blogUrl: "",
  hydrated: false,
});

export default LandingContext;
