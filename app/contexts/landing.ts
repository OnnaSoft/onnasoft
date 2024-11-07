import { createContext } from "react";

export type LandingContextType = {
    blogUrl: string;
    enableChat: boolean;
}

const LandingContext = createContext<LandingContextType>({
    blogUrl: "",
    enableChat: false,
});

export default LandingContext;