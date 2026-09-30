import type { SVGProps } from "react";

const dasar: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
  focusable: false,
};

/** Ikon digambar dengan satu bobot garis, seperti benang 1,5 px. */

export function IkonPanahKanan(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...dasar} {...props}>
      <path d="M3 12h17M14 5l7 7-7 7" />
    </svg>
  );
}

export function IkonKiri(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...dasar} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function IkonKanan(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...dasar} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IkonTutup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...dasar} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
