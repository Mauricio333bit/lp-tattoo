import { useContext } from "react";

import { StudioContext } from "../context/studio.context";

export const useStudio = () =>
  useContext(StudioContext);