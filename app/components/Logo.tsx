export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:drop-shadow-lg transition-all duration-300"
    >
      {/* Shield background */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ef0c1" stopOpacity="1" />
          <stop offset="100%" stopColor="#2dd89f" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Main shield shape */}
      <path
        d="M20 2L34 8V16C34 26 20 36 20 36C20 36 6 26 6 16V8L20 2Z"
        fill="url(#shieldGradient)"
        stroke="#ffffff"
        strokeWidth="1.5"
      />

      {/* Lock icon inside shield */}
      <g transform="translate(20, 22) scale(1)">
        {/* Lock body */}
        <rect x="-5" y="-2" width="10" height="7" rx="1.5" fill="white" />
        
        {/* Lock shackle */}
        <path
          d="M-4 -2C-4 -5 -2 -7 0 -7C2 -7 4 -5 4 -2"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Keyhole */}
        <circle cx="0" cy="2" r="1" fill="#0b1021" />
      </g>

      {/* Checkmark accent */}
      <path
        d="M28 14L30 16L32 12"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
