"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    console.error("test");
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
