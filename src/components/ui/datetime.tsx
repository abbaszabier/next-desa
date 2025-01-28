"use client";

import { useRealtimeDateTime } from "@/hooks";
import { useState, useEffect } from "react";

const DateTime = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const dateTime = useRealtimeDateTime();

  if (!isClient) return null;

  const formattedDateTime = isClient
    ? `${dateTime.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })} ${dateTime.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })}`
    : "Loading...";

  return (
    <div className="text-base dark:text-gray-100 font-normal text-gray-700">
      {formattedDateTime}
    </div>
  );
};

export default DateTime;
