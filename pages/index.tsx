import Link from "next/link";
import "normalize.css";
import React from "react";
import { Routes } from "../constants";
import "../global.css";

export default (): React.ReactNode => (
  <div>
    <Link href={Routes.game}>
      <a>here</a>
    </Link>
  </div>
);
