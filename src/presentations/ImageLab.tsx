import { useState } from 'react';

const W = 12;
const H = 10;

const PALETTES: Record<number, string[]> = {
  1: ['#ffffff', '#055b5c'],
  2: ['#ffffff', '#ccabd8', '#6ec6ca', '#055b5c'],
  4: ['#ffffff', '#f2e6f8', '#ede2f4', '#ccabd8', '#b391c9', '#8474a1', '#5f5279', '#dff2f3', '#b8e3e5', '#6ec6ca', '#3aa9ae', '#08979d', '#055b5c', '#e0a02a', '#c0392b', '#21313a'],
};

function formatBits(bits: number): string {
  const bytes = bits / 8;
  if (bytes < 1000) return `${bytes.toFixed(1)} bytes`;
  if (bytes < 1_000_000) return `${(bytes / 1000).toFixed(2)} kB`;
  return `${(bytes / 1_000_000).toFixed(2)} MB`;
}

export default function ImageLab() {
  const [depth, setDepth] = useState<1 | 2 | 4>(1);
  const [pixels, setPixels] = useState<number[]>(() => {
    const heart = [
      '000000000000',
      '001100011000',
      '011110111100',
      '011111111100',
      '011111111100',
      '001111111000',
      '000111110000',
      '000011100000',
      '000001000000',
      '000000000000',
    ];
    return heart.join('').split('').map(Number);
  });
  const [brush, setBrush] = useState(1);
  const [realW, setRealW] = useState(1920);
  const [realH, setRealH] = useState(1080);
  const [realDepth, setRealDepth] = useState(24);

  const palette = PALETTES[depth];
  const colours = palette.length;

  const gridBits = W * H * depth;
  const realBits = realW * realH * realDepth;

  return (
    <div>
      <div className="stage">
        <div className="pixel-grid" style={{ gridTemplateColumns: `repeat(${W}, 1fr)` }}>
          {pixels.map((p, i) => (
            <button
              key={i}
              className="pixel"
              style={{ background: palette[p % colours], padding: 0 }}
              onClick={() => setPixels(pixels.map((v, j) => (i === j ? brush % colours : v)))}
              aria-label={`pixel ${i}`}
            />
          ))}
        </div>
      </div>

      <div className="card flat">
        <div className="card-title">Colour depth</div>
        <div className="chip-row" style={{ marginBottom: 10 }}>
          {([1, 2, 4] as const).map((d) => (
            <button
              key={d}
              className={`chip ${depth === d ? 'teal' : ''}`}
              onClick={() => {
                setDepth(d);
                setBrush(1);
              }}
            >
              {`${d} bit = ${2 ** d} colours`}
            </button>
          ))}
        </div>

        <div className="card-title">Brush colour</div>
        <div className="chip-row">
          {palette.map((c, i) => (
            <button
              key={i}
              onClick={() => setBrush(i)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: c,
                border: brush === i ? '3px solid #08979d' : '1px solid #e4e0ee',
              }}
              aria-label={`colour ${i}`}
            />
          ))}
        </div>

        <div className="kv" style={{ marginTop: 12 }}>
          <span>Grid size</span>
          <b>{`${W} x ${H} = ${W * H} pixels`}</b>
        </div>
        <div className="kv">
          <span>Bits per pixel</span>
          <b>{depth}</b>
        </div>
        <div className="kv">
          <span>File size of this drawing</span>
          <b>{`${gridBits} bits = ${formatBits(gridBits)}`}</b>
        </div>
        <div className="tiny muted" style={{ marginTop: 6 }}>
          Real image files are a little bigger than this because they also store metadata such as the width, height,
          colour depth and the date the photo was taken.
        </div>
      </div>

      <div className="card flat">
        <div className="card-title">Try it on a real photograph</div>
        <label className="tiny muted">{`Width: ${realW} pixels`}</label>
        <input type="range" min={100} max={4000} step={20} value={realW} onChange={(e) => setRealW(Number(e.target.value))} />
        <label className="tiny muted">{`Height: ${realH} pixels`}</label>
        <input type="range" min={100} max={4000} step={20} value={realH} onChange={(e) => setRealH(Number(e.target.value))} />
        <label className="tiny muted">{`Colour depth: ${realDepth} bits, giving ${(2 ** realDepth).toLocaleString()} colours`}</label>
        <input type="range" min={1} max={32} value={realDepth} onChange={(e) => setRealDepth(Number(e.target.value))} />
        <div className="kv" style={{ marginTop: 8 }}>
          <span>Working</span>
          <b className="tiny">{`${realW} x ${realH} x ${realDepth}`}</b>
        </div>
        <div className="kv">
          <span>File size</span>
          <b>{`${realBits.toLocaleString()} bits = ${formatBits(realBits)}`}</b>
        </div>
      </div>

      <div className="step-note">
        <b>What to notice</b>
        <ul className="bullets" style={{ marginTop: 6, marginBottom: 0 }}>
          <li>Double the width and the height and the file becomes four times bigger, not twice as big.</li>
          <li>More colour depth means smoother shading but a bigger file every single time.</li>
          <li>Resolution means how many pixels there are. Low resolution images look blocky when you stretch them.</li>
          <li>In the exam, always show your working as width x height x colour depth, then convert bits into bytes by dividing by 8.</li>
        </ul>
      </div>
    </div>
  );
}
