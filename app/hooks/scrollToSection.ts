import { useLocation, useNavigate } from "@remix-run/react";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (targetId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        navigate("/#" + targetId);
      }, 800);
    }, 100);
  };
};
