import { useLocation, useNavigate } from "@remix-run/react";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const url = new URL(href);

    if (location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const targetId = url.hash.replace("#", "");
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
