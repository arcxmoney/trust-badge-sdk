// @ts-ignore
import React from "react";
import StarRating from "./stars-rating";
import { Typography } from "./typography";
import {useProjectData} from "../hooks/useProjectData";

export const TrustBadge = ({
  projectId,
  onLoaded
}: {
  projectId: number;
  onLoaded: (loaded: boolean) => void;
}) => {
  const { didLoad, starRating, reviewCount, error } = useProjectData(projectId, onLoaded);

  if (!didLoad) {
    return <Typography variant="small">Loading...</Typography>
  }

  if (error) {
    return <Typography variant="small">Error: {error.message}</Typography>
  }
  // Calculate the percentage width for the two sections
  const boxClasses = `flex flex-col z-50 flex h-[155px] w-[168px] items-center rounded-[8px] border-2 border-charcoal p-2 shadow-tooltip relative`;

  return (
    <div className={boxClasses}>
      <Typography className="text-5xl font-extrabold">{starRating}</Typography>
      <div className="flex h-[36px] w-full justify-center">
        <StarRating rating={starRating} />
      </div>
      <Typography variant="small" className="prose-stone pb-2">
        {reviewCount} reviews
      </Typography>
      <a
        className="rounded-4 absolute bottom-0 left-0 flex h-[32px] w-full items-center justify-between border-b-2 border-t-2 border-charcoal bg-beige px-2"
        href={`https://www.frenreviews.com/projects/${projectId}`}
      >
        <img src="/fren-reviews-icon.svg" alt="Icon" width="20" height="20" />
        <div className="flex items-center justify-center">
          <Typography variant="small" className="prose-stone">
            Read reviews
          </Typography>
          <img
            className="ml-1 mt-px"
            src="/right-icon.svg"
            alt="arrow right"
            width={12}
            height={12}
          />
        </div>
      </a>
    </div>
  );
};
