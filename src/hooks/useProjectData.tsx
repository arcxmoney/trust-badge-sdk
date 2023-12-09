import { useState, useEffect } from "react";
import { fetchProject } from "../utils";

interface ProjectData {
  didLoad: boolean;
  starRating: number;
  reviewCount: number;
  error: Error | null;
}

export function useProjectData(projectId: number, onLoaded: (loaded: boolean) => void): ProjectData {

  const [didLoad, setDidLoad] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getProject = async () => {
      if (didLoad) return;

      try {
        const project = await fetchProject(projectId);
        setStarRating(Number(project.averageRating.toFixed(2)));
        setReviewCount(project.reviewCount); 
        setDidLoad(true);
      } catch (error) {
        if(error instanceof Error) {
          setError(error);  
        }
      }
    };

    getProject();
  }, [projectId, onLoaded, didLoad]);

  return {
    didLoad,
    starRating,
    reviewCount,
    error
  };

}
