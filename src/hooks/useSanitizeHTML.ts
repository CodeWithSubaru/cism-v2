"use client";
import DOMPurify from "dompurify";
import React, { useEffect } from "react";

function useSanitizeHTML(htmlStringContent: string): string {
  const [domLoaded, setDomLoaded] = React.useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (htmlStringContent === "") return "";

  return domLoaded ? DOMPurify.sanitize(htmlStringContent) : "";
}

export default useSanitizeHTML;
