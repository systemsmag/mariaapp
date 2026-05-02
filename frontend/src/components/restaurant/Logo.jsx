// Custom SVG monogram for La Maria și Ion.
// Two interlocked serifs: "M" and "I" sharing a center stroke,
// crowned with a small ornamental laurel leaf — handcrafted feel.

export const Logo = ({ className = "h-9 w-auto", color = "#d97706" }) => (
  <svg
    viewBox="0 0 96 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="La Maria și Ion"
    role="img"
  >
    {/* tiny laurel sprig above */}
    <path
      d="M44 6 Q48 2 52 6"
      stroke={color}
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M46 5.5 Q47.5 3.5 49 5"
      stroke={color}
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <path
      d="M48 5.5 Q49.5 3.5 51 5"
      stroke={color}
      strokeWidth="0.9"
      strokeLinecap="round"
    />

    {/* M strokes — serif feel via small flicks */}
    <path
      d="M8 54 V18 L24 44 L40 18 V54"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="miter"
      strokeLinecap="square"
      fill="none"
    />
    {/* M serifs */}
    <path d="M5 54 H11 M37 54 H43" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />

    {/* ampersand-styled small "&" between letters */}
    <text
      x="50"
      y="42"
      fontFamily="'Cormorant Garamond', serif"
      fontStyle="italic"
      fontWeight="500"
      fontSize="20"
      fill={color}
    >
      &amp;
    </text>

    {/* I — slim serif */}
    <path d="M82 18 V54" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    <path d="M77 18 H87 M77 54 H87" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />

    {/* baseline rule */}
    <path d="M6 60 H90" stroke={color} strokeWidth="0.6" opacity="0.65" />
  </svg>
);

export const Wordmark = ({ className = "" }) => (
  <span
    className={`font-display tracking-tight ${className}`}
    style={{ fontWeight: 500 }}
  >
    La Maria si Ion
  </span>
);
