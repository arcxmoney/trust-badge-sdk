function Star({ rating, threshold, ...props }: { rating: number; threshold: number }) {
    let fill;
  
    if (rating < threshold) {
      fill = "none"; // Empty
    }
  
    if (rating >= threshold - 0.5) {
      fill = "url(#half-rating)"; // Half-filled
    }
  
    if (rating >= threshold) {
      fill = "#D4F178"; // Filled
    }
  
    return (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient id="half-rating">
            <stop offset="50%" stopColor="#D4F178" />
            <stop offset="50%" stopColor="white" />
          </linearGradient>
        </defs>
        <path
          fill={fill}
          d="M13.3333 1L16.86 8.1459L24.746 9.2918L19.0397 14.8541L20.3868 22.7082L13.3333 19L6.27991 22.7082L7.62699 14.8541L1.92065 9.2918L9.80662 8.1459L13.3333 1Z"
          stroke="#1E1C1D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  export default function StarsRating({ rating }: { rating: number }) {
    return (
      <>
        <Star rating={rating} threshold={1} />
        <Star rating={rating} threshold={2} />
        <Star rating={rating} threshold={3} />
        <Star rating={rating} threshold={4} />
        <Star rating={rating} threshold={5} />
      </>
    );
  }
  