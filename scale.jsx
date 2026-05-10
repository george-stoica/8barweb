/* global React */
const { useEffect } = React;

// Measurement scale — brand signature element (10 ticks, "8" highlighted in amber)
function MeasurementScale({ height = 110, ticks = 10, highlight = 8 }) {
  const W = 1180;
  const H = height;
  const padX = 12;
  const baseY = H - 28;
  const labelY = 22;
  const tallTickH = 56;
  const shortTickH = 22;
  const stepX = (W - padX * 2) / (ticks - 1);

  return (
    <svg
      className="scale"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Precision measurement scale, eight mark highlighted"
    >
      {/* baseline */}
      <line x1={padX} y1={baseY} x2={W - padX} y2={baseY} stroke="var(--subtle)" strokeWidth="1" />

      {Array.from({ length: ticks }).map((_, i) => {
        const x = padX + i * stepX;
        const isHi = i === highlight;
        const tickH = isHi ? tallTickH : shortTickH;
        return (
          <g key={i}>
            <line
              x1={x}
              y1={baseY}
              x2={x}
              y2={baseY - tickH}
              stroke={isHi ? 'var(--amber)' : 'var(--steel)'}
              strokeWidth={isHi ? 2 : 1}
            />
            {isHi && (
              <text
                x={x}
                y={baseY - tickH - 12}
                textAnchor="middle"
                fontFamily="Inter, Helvetica, sans-serif"
                fontWeight="700"
                fontSize="14"
                fill="var(--amber)"
                letterSpacing="0.02em"
              >
                8
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

window.MeasurementScale = MeasurementScale;
