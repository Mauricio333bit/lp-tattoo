import {
  useEffect,
  useState,
} from "react";

import { getStudioConfig } from "../services/studio.service";

import { StudioContext } from "./studio.context";

import type { StudioConfig } from "../types/studio";

interface Props {
  children: React.ReactNode;
}

export const StudioProvider = ({
  children,
}: Props) => {
  const [studio, setStudio] =
    useState<StudioConfig | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudio = async () => {
      try {
        const data = await getStudioConfig();

        if (data) {
          setStudio(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudio();
  }, []);

  return (
    <StudioContext.Provider
      value={{
        studio,
        loading,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};