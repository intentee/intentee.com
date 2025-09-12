import React from "react";

import {
  label__description,
  label__title,
  label as labelCssClass,
} from "./ProductStackTileLabel.module.css";

export function ProductStackTileLabel({
  description,
  label,
}: {
  description: string;
  label: string;
}) {
  return (
    <div className={labelCssClass}>
      <div className={label__title}>{label}</div>
      <div className={label__description}>{description}</div>
    </div>
  );
}
