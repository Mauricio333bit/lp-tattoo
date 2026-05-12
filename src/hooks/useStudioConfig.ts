import { useEffect, useState } from "react";

import { getStudioConfig } from "../services/studio.service";

import type { StudioConfig } from "../types/studio";

export const useStudioConfig = () => {
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
        console.error(
          "Error fetching studio config:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudio();
  }, []);

  return {
    studio,
    loading,
  };
};