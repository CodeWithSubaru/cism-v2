"use client";
import * as React from "react";
import { Toaster } from "../ui/toaster";

function ToasterContainer() {
  const [domLoaded, setDomLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded && <Toaster />;
}

export default ToasterContainer;
