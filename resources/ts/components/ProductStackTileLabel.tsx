import React, { CSSProperties, useCallback, useEffect, useState } from "react";

import { type LabelId } from "../LabelId.type";
import { LabelInteractionState } from "../LabelInteractionState.interface";
import { useAnimationFrame } from "../hooks/useAnimationFrame";

import {
  label__description,
  label__title,
  label as labelCssClass,
} from "./ProductStackTileLabel.module.css";

export function ProductStackTileLabel({
  description,
  href,
  id,
  label,
  onInteractionStateChange,
  productColor,
}: {
  description: string;
  href: string;
  id: LabelId;
  label: string;
  onInteractionStateChange: (state: LabelInteractionState) => void;
  productColor: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [labelRef, setLabelRef] = useState<null | HTMLElement>(null);

  const frameCallback = useCallback(
    function () {
      if (labelRef && labelRef.matches(":hover")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    },
    [labelRef, setIsHovered],
  );

  useAnimationFrame(frameCallback);

  useEffect(
    function () {
      onInteractionStateChange({
        id,
        isHovered,
      });
    },
    [id, isHovered, onInteractionStateChange],
  );

  return (
    <a
      className={labelCssClass}
      href={href}
      id={id}
      ref={setLabelRef}
      style={
        {
          "--product-color": productColor,
        } as CSSProperties
      }
      target="_blank"
    >
      <div className={label__title}>{label}</div>
      <div className={label__description}>{description}</div>
    </a>
  );
}
