import { useMediaQuery } from "react-responsive";

export const isDesktop = useMediaQuery({
  query: "(min-width: 1024px) and (orientation: landscape)",
});
