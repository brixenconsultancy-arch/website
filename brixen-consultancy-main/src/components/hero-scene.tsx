/* Decorative construction line-art for the hero background:
   building skyline, tower crane, arched + cable-stayed bridge,
   and an excavator. White strokes over the brick gradient. */

export function HeroScene() {
  const s = "#ffffff";
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] select-none">
      {/* fade the scene into the hero from the top */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, #000 38%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 38%)",
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 460"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
          fill="none"
        >
          {/* ground line */}
          <line x1="0" y1="430" x2="1440" y2="430" stroke={s} strokeOpacity="0.18" strokeWidth="1.5" />

          {/* ---- skyline (right) ---- */}
          <g stroke={s} strokeOpacity="0.16" strokeWidth="1.5">
            <rect x="1140" y="250" width="70" height="180" fill={s} fillOpacity="0.04" />
            <rect x="1220" y="200" width="58" height="230" fill={s} fillOpacity="0.05" />
            <rect x="1288" y="288" width="64" height="142" fill={s} fillOpacity="0.04" />
            <rect x="1362" y="232" width="60" height="198" fill={s} fillOpacity="0.05" />
          </g>
          <g fill={s} fillOpacity="0.14">
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2].map((c) => (
                <rect key={`a${r}-${c}`} x={1152 + c * 18} y={266 + r * 26} width="8" height="10" />
              ))
            )}
            {[0, 1, 2, 3, 4].map((r) =>
              [0, 1, 2].map((c) => (
                <rect key={`b${r}-${c}`} x={1232 + c * 15} y={216 + r * 26} width="7" height="10" />
              ))
            )}
          </g>

          {/* ---- tower crane (center-right) ---- */}
          <g stroke={s} strokeOpacity="0.22" strokeWidth="2">
            <line x1="980" y1="430" x2="980" y2="120" />
            <line x1="966" y1="430" x2="980" y2="120" strokeOpacity="0.12" />
            <line x1="994" y1="430" x2="980" y2="120" strokeOpacity="0.12" />
            {/* mast lattice */}
            <g strokeOpacity="0.1" strokeWidth="1">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line key={`m${i}`} x1="970" y1={150 + i * 40} x2="990" y2={170 + i * 40} />
              ))}
            </g>
            {/* jib */}
            <line x1="855" y1="120" x2="1120" y2="120" />
            <line x1="900" y1="108" x2="1100" y2="108" strokeOpacity="0.14" />
            {/* counter-jib tie */}
            <line x1="900" y1="108" x2="980" y2="120" strokeOpacity="0.14" />
            <line x1="1100" y1="108" x2="980" y2="120" strokeOpacity="0.14" />
            {/* hook */}
            <line x1="1060" y1="120" x2="1060" y2="210" />
            <rect x="1052" y="210" width="16" height="10" />
            {/* operator cab */}
            <rect x="966" y="120" width="28" height="22" />
          </g>

          {/* ---- arched bridge (center-left) ---- */}
          <g stroke={s} strokeOpacity="0.2" strokeWidth="2">
            {/* deck */}
            <line x1="120" y1="300" x2="760" y2="300" />
            <line x1="120" y1="312" x2="760" y2="312" strokeOpacity="0.12" />
            {/* arches */}
            <path d="M150 300 Q245 215 340 300" />
            <path d="M340 300 Q435 215 530 300" />
            <path d="M530 300 Q625 215 720 300" />
            {/* spandrel posts */}
            <g strokeOpacity="0.12" strokeWidth="1.4">
              {[180, 245, 310, 375, 435, 530, 595, 660, 690].map((x, i) => (
                <line key={`p${i}`} x1={x} y1="300" x2={x} y2={300 - Math.max(8, 70 - Math.abs((x % 190) - 95))} />
              ))}
            </g>
            {/* piers */}
            <line x1="150" y1="300" x2="150" y2="430" />
            <line x1="340" y1="300" x2="340" y2="430" />
            <line x1="530" y1="300" x2="530" y2="430" />
            <line x1="720" y1="300" x2="720" y2="430" />
          </g>

          {/* ---- cable-stayed pylon (left edge) ---- */}
          <g stroke={s} strokeOpacity="0.16" strokeWidth="1.6">
            <line x1="60" y1="430" x2="60" y2="150" />
            {[200, 240, 280, 320].map((y, i) => (
              <line key={`cl${i}`} x1="60" y1="150" x2={150 + i * 35} y2={y + 70} strokeOpacity="0.1" />
            ))}
            {[200, 240, 280, 320].map((y, i) => (
              <line key={`cr${i}`} x1="60" y1="150" x2={-30 - i * 0} y2={y + 70} strokeOpacity="0.08" />
            ))}
          </g>

          {/* ---- excavator (bottom, left of center) ---- */}
          <g stroke={s} strokeOpacity="0.22" strokeWidth="2" fill="none">
            <rect x="430" y="388" width="58" height="30" rx="4" fill={s} fillOpacity="0.05" />
            <rect x="442" y="372" width="30" height="20" rx="3" />
            {/* tracks */}
            <rect x="420" y="416" width="80" height="16" rx="8" fill={s} fillOpacity="0.05" />
            {/* boom + arm + bucket */}
            <line x1="486" y1="392" x2="540" y2="356" />
            <line x1="540" y1="356" x2="566" y2="396" />
            <path d="M566 396 l18 4 l-4 16 l-18 -6 z" fill={s} fillOpacity="0.06" />
          </g>
        </svg>
      </div>
    </div>
  );
}
