import { Arrow, Box, C, Frame, Node, T } from './parts';

export function LanWan() {
  return (
    <Frame vb="0 0 360 200">
      <Box x={10} y={30} w={150} h={150} fill={C.aquaSoft} stroke={C.teal} />
      <T x={85} y={50} bold size={12.5} fill={C.tealDeep}>
        LAN
      </T>
      <T x={85} y={66} size={10} fill={C.ink}>
        one site, own cables
      </T>
      <circle cx={85} cy={110} r={16} fill={C.teal} />
      <T x={85} y={114} size={9.5} fill="#fff" bold>
        switch
      </T>
      {[
        [40, 90],
        [130, 90],
        [40, 150],
        [130, 150],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={85} y1={110} x2={x} y2={y} stroke={C.teal} strokeWidth={1.8} />
          <rect x={x - 15} y={y - 12} width={30} height={22} rx={5} fill={C.white} stroke={C.purple} />
        </g>
      ))}

      <Box x={200} y={30} w={150} h={150} fill={C.lilacSoft} stroke={C.purple} />
      <T x={275} y={50} bold size={12.5} fill={C.purpleDeep}>
        WAN
      </T>
      <T x={275} y={66} size={10} fill={C.ink}>
        many sites, hired lines
      </T>
      <circle cx={240} cy={110} r={13} fill={C.purple} />
      <circle cx={310} cy={100} r={13} fill={C.purple} />
      <circle cx={275} cy={155} r={13} fill={C.purple} />
      <line x1={240} y1={110} x2={310} y2={100} stroke={C.purple} strokeWidth={2} />
      <line x1={240} y1={110} x2={275} y2={155} stroke={C.purple} strokeWidth={2} />
      <line x1={310} y1={100} x2={275} y2={155} stroke={C.purple} strokeWidth={2} />
      <T x={275} y={182} size={9.5} fill={C.purpleDeep}>
        the internet is the biggest WAN
      </T>
      <Arrow x1={162} y1={105} x2={198} y2={105} label="link" />
    </Frame>
  );
}

export function Topologies() {
  return (
    <Frame vb="0 0 360 190">
      <T x={90} y={20} size={12.5} bold fill={C.tealDeep}>
        Star topology
      </T>
      <circle cx={90} cy={100} r={18} fill={C.teal} />
      <T x={90} y={104} size={9.5} fill="#fff" bold>
        switch
      </T>
      {[
        [90, 45],
        [40, 80],
        [140, 80],
        [55, 145],
        [125, 145],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={90} y1={100} x2={x} y2={y} stroke={C.aqua} strokeWidth={2} />
          <circle cx={x} cy={y} r={11} fill={C.white} stroke={C.purple} strokeWidth={2} />
        </g>
      ))}
      <T x={90} y={178} size={10} fill={C.ink}>
        one cable fails, one device drops
      </T>

      <line x1={182} y1={14} x2={182} y2={182} stroke={C.line} strokeWidth={2} />

      <T x={272} y={20} size={12.5} bold fill={C.purpleDeep}>
        Mesh topology
      </T>
      {(() => {
        const pts: [number, number][] = [
          [272, 50],
          [222, 95],
          [322, 95],
          [242, 150],
          [302, 150],
        ];
        return (
          <g>
            {pts.map((a, i) =>
              pts.slice(i + 1).map((b, j) => (
                <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={C.lilac} strokeWidth={1.6} />
              )),
            )}
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={11} fill={C.white} stroke={C.purple} strokeWidth={2} />
            ))}
          </g>
        );
      })()}
      <T x={272} y={178} size={10} fill={C.ink}>
        many routes, no single point of failure
      </T>
    </Frame>
  );
}

export function TcpIpLayers() {
  const layers = [
    ['Application', 'HTTP, HTTPS, FTP, SMTP, IMAP', C.lilacSoft, C.purple],
    ['Transport', 'TCP and UDP, splits data into packets', C.aquaSoft, C.teal],
    ['Internet', 'IP, adds addresses and routes packets', C.goldSoft, C.gold],
    ['Link', 'the physical cable, Wi Fi and MAC addresses', C.white, C.purple],
  ];
  return (
    <Frame vb="0 0 360 215">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        The four layer TCP IP model
      </T>
      {layers.map((l, i) => (
        <g key={l[0]}>
          <Box x={40} y={28 + i * 44} w={280} h={38} fill={l[2]} stroke={l[3]} />
          <T x={110} y={45 + i * 44} size={12} bold fill={C.tealDeep} anchor="start">
            {l[0]}
          </T>
          <T x={110} y={59 + i * 44} size={9.8} fill={C.ink} anchor="start">
            {l[1]}
          </T>
          <T x={70} y={52 + i * 44} size={14} bold fill={C.purple}>
            {4 - i}
          </T>
        </g>
      ))}
      <Arrow x1={26} y1={34} x2={26} y2={198} color={C.purple} />
      <T x={14} y={120} size={9.5} fill={C.purple} bold>
        sending
      </T>
      <Arrow x1={334} y1={198} x2={334} y2={34} color={C.teal} />
      <T x={348} y={120} size={9.5} fill={C.teal} bold>
        receiving
      </T>
    </Frame>
  );
}

export function DnsLookup() {
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        What happens when you type bbc.co.uk
      </T>
      <Node x={10} y={40} w={92} h={48} title="Your device" sub="browser" fill={C.aquaSoft} stroke={C.teal} />
      <Node x={134} y={40} w={92} h={48} title="DNS server" sub="name to IP" fill={C.lilacSoft} stroke={C.purple} />
      <Node x={258} y={40} w={92} h={48} title="Web server" sub="holds the site" fill={C.goldSoft} stroke={C.gold} />
      <Arrow x1={104} y1={56} x2={132} y2={56} label="1 name" labelDy={-8} />
      <Arrow x1={132} y1={78} x2={104} y2={78} label="2 IP" labelDy={16} />
      <Arrow x1={104} y1={120} x2={300} y2={104} label="3 request to that IP" labelDy={-8} />
      <Arrow x1={300} y1={130} x2={104} y2={146} label="4 web page sent back" labelDy={16} />
      <T x={180} y={186} size={10.5} fill={C.purpleDeep}>
        If DNS does not know the name it asks another DNS server higher up
      </T>
    </Frame>
  );
}

export function PacketJourney() {
  return (
    <Frame vb="0 0 360 190">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        A packet carries three parts
      </T>
      <Box x={30} y={30} w={300} h={54} fill={C.white} stroke={C.purple} />
      <rect x={30} y={30} width={100} height={54} rx={10} fill={C.aquaSoft} />
      <rect x={230} y={30} width={100} height={54} rx={10} fill={C.lilacSoft} />
      <T x={80} y={52} size={11.5} bold fill={C.tealDeep}>
        Header
      </T>
      <T x={80} y={68} size={9.5} fill={C.ink}>
        addresses, number
      </T>
      <T x={180} y={52} size={11.5} bold fill={C.purpleDeep}>
        Payload
      </T>
      <T x={180} y={68} size={9.5} fill={C.ink}>
        the actual data
      </T>
      <T x={280} y={52} size={11.5} bold fill={C.purpleDeep}>
        Trailer
      </T>
      <T x={280} y={68} size={9.5} fill={C.ink}>
        error check
      </T>

      <T x={180} y={110} size={11} fill={C.ink}>
        Packets can take different routes and arrive out of order
      </T>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={36 + i * 78} y={124} width={62} height={26} rx={7} fill={C.aqua} />
          <T x={67 + i * 78} y={141} size={11} fill="#fff" bold>
            {`packet ${[3, 1, 4, 2][i]}`}
          </T>
        </g>
      ))}
      <T x={180} y={172} size={11} bold fill={C.tealDeep}>
        TCP puts them back in order and asks again for anything missing
      </T>
    </Frame>
  );
}

export function ClientServerP2p() {
  return (
    <Frame vb="0 0 360 190">
      <T x={90} y={18} size={12.5} bold fill={C.tealDeep}>
        Client server
      </T>
      <rect x={62} y={32} width={56} height={34} rx={8} fill={C.teal} />
      <T x={90} y={54} size={10.5} fill="#fff" bold>
        server
      </T>
      {[
        [35, 130],
        [90, 145],
        [145, 130],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={90} y1={66} x2={x} y2={y - 12} stroke={C.aqua} strokeWidth={2} />
          <rect x={x - 20} y={y - 12} width={40} height={26} rx={6} fill={C.white} stroke={C.purple} strokeWidth={2} />
          <T x={x} y={y + 5} size={9} fill={C.purpleDeep}>
            client
          </T>
        </g>
      ))}
      <T x={90} y={175} size={9.5} fill={C.ink}>
        central control, easy backups
      </T>

      <line x1={182} y1={14} x2={182} y2={182} stroke={C.line} strokeWidth={2} />

      <T x={272} y={18} size={12.5} bold fill={C.purpleDeep}>
        Peer to peer
      </T>
      {(() => {
        const pts: [number, number][] = [
          [272, 50],
          [222, 110],
          [322, 110],
          [272, 150],
        ];
        return (
          <g>
            {pts.map((a, i) =>
              pts.slice(i + 1).map((b, j) => (
                <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={C.lilac} strokeWidth={1.8} />
              )),
            )}
            {pts.map(([x, y], i) => (
              <g key={i}>
                <rect x={x - 20} y={y - 12} width={40} height={24} rx={6} fill={C.white} stroke={C.purple} strokeWidth={2} />
                <T x={x} y={y + 4} size={9} fill={C.purpleDeep}>
                  peer
                </T>
              </g>
            ))}
          </g>
        );
      })()}
      <T x={272} y={175} size={9.5} fill={C.ink}>
        every device is equal, no server needed
      </T>
    </Frame>
  );
}

export function ThreatsWheel() {
  const threats = ['Malware', 'Phishing', 'Social engineering', 'Brute force', 'Denial of service', 'Data interception', 'SQL injection'];
  return (
    <Frame vb="0 0 360 250">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Seven network threats you must be able to name
      </T>
      {threats.map((t, i) => (
        <g key={t}>
          <rect
            x={26}
            y={30 + i * 30}
            width={308}
            height={24}
            rx={8}
            fill={i % 2 ? C.lilacSoft : C.aquaSoft}
            stroke={i % 2 ? C.purple : C.teal}
          />
          <T x={44} y={46 + i * 30} size={11.5} bold fill={C.tealDeep} anchor="start">
            {t}
          </T>
          <T x={318} y={46 + i * 30} size={10} fill={C.purpleDeep} anchor="end">
            {
              [
                'harmful software',
                'fake message asking for details',
                'tricking the person, not the computer',
                'guessing passwords automatically',
                'flooding a server with traffic',
                'packet sniffing data in transit',
                'typing database commands into a text box',
              ][i]
            }
          </T>
        </g>
      ))}
    </Frame>
  );
}
