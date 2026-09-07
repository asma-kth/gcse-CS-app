import { useState } from 'react';

function toBin(n: number, bits = 8): string {
  return n.toString(2).padStart(bits, '0');
}

export default function CharacterLab() {
  const [text, setText] = useState('Hi Byte!');

  const chars = [...text].slice(0, 24);
  const asciiBits = chars.length * 8;
  const unicodeBits = chars.length * 16;

  return (
    <div>
      <div className="card flat">
        <label className="tiny muted">Type something and watch it turn into numbers</label>
        <input
          type="text"
          value={text}
          maxLength={24}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', marginTop: 6 }}
        />
      </div>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Character</th>
              <th>Denary code</th>
              <th>Binary (8 bit)</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {chars.map((ch, i) => {
              const code = ch.codePointAt(0) ?? 0;
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 800 }}>{ch === ' ' ? 'space' : ch}</td>
                  <td>{code}</td>
                  <td style={{ fontFamily: 'monospace' }}>{code < 256 ? toBin(code) : toBin(code, 16)}</td>
                  <td style={{ fontFamily: 'monospace' }}>{code.toString(16).toUpperCase()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="card flat" style={{ marginTop: 12 }}>
        <div className="kv">
          <span>{`Characters typed`}</span>
          <b>{chars.length}</b>
        </div>
        <div className="kv">
          <span>Size using ASCII, 1 byte each</span>
          <b>{`${asciiBits} bits = ${asciiBits / 8} bytes`}</b>
        </div>
        <div className="kv">
          <span>Size using 16 bit Unicode</span>
          <b>{`${unicodeBits} bits = ${unicodeBits / 8} bytes`}</b>
        </div>
      </div>

      <div className="step-note">
        <b>The three facts examiners look for</b>
        <ul className="bullets" style={{ marginTop: 6, marginBottom: 0 }}>
          <li>A character set is an agreed list that pairs every character with a binary code.</li>
          <li>ASCII uses 7 bits (often stored in 1 byte) and covers 128 characters, which is enough for English only.</li>
          <li>Unicode uses more bits, so it covers over 140000 characters from every language plus emoji, but files are bigger.</li>
          <li>Notice that A is 65 and a is 97, so the codes for capitals and lower case are 32 apart. Digits start at 48.</li>
        </ul>
      </div>
    </div>
  );
}
