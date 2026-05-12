import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";
import type { StudioConfig } from "../types/studio";

export const getStudioConfig = async () => {
  const docRef = doc(db, "studio", "main");

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as StudioConfig;
};