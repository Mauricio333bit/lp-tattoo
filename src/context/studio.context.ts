import { createContext } from "react";

import type { StudioConfig } from "../types/studio";

export interface StudioContextProps {
  studio: StudioConfig | null;
  loading: boolean;
}

export const StudioContext =
  createContext<StudioContextProps>({
    studio: null,
    loading: true,
  });