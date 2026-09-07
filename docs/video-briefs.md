# Video briefs for the six animated explainers

Each scene in the app is drawn live as animated SVG, which keeps the app small and fully
offline. If you ever want a filmed or AI generated version of the same scene, for a YouTube
channel or a lesson starter, these are ready to paste into an AI video tool.

They were produced with the Vivideo prompt builder using the "Explainer concept visual" style,
then matched to the palette used throughout the app.

Shared settings for all six: 16:9, text to video, static frame with smooth transitions, flat even
lighting, clear and approachable mood, steady physically coherent motion.

Shared negative prompt: no text, no captions, no watermark, no distorted anatomy, no warped
geometry, no duplicate objects, no jittery motion, no flicker, no blur, no low quality artifacts.

---

## 1. How a web page reaches your phone (16 seconds)

**Prompt**

A friendly pastel robot cat mascot watches as a tapped link on a phone becomes a request that
travels to a DNS server, gets split into four numbered packets, and those packets fly along
glowing routes through two routers to a web server and back, reassembling in order on the phone
screen. Educational explainer for GCSE Computer Science students. Glowing numbered data packets
travelling between a phone, a DNS server and a web server, packets split apart, take different
glowing routes, then snap back into order on the phone, abstract dark teal digital space with
soft lilac and aqua light trails, static frame with smooth transitions, flat even lighting, clean
flat vector explainer animation, rounded shapes, palette limited to lilac, purple, aqua and deep
teal, clear and approachable, horizontal 16:9 framing with balanced headroom, steady, physically
coherent motion.

**Also avoid:** text captions, brand logos, photorealistic humans, dark horror tones.

---

## 2. Inside the processor (15 seconds)

**Prompt**

Inside a processor, a single instruction travels round the fetch decode execute cycle. A glowing
address leaves the program counter, lights up the memory address register, travels the address bus
to a memory bank, and the instruction returns along the data bus into the memory data register
before the accumulator fills with a value. Glowing register boxes inside a stylised CPU with light
pulses moving between them and a RAM bank, a pulse of light travels from the program counter to
memory and back, lighting each register in turn, abstract circuit board interior in deep teal with
gold light pulses, static frame with smooth transitions, flat even lighting, clean flat vector
explainer animation, rounded boxes, palette limited to lilac, aqua, gold and deep teal, clear and
approachable, horizontal 16:9 framing with balanced headroom, steady, physically coherent motion.

**Also avoid:** text captions, brand logos, photorealistic circuitry, cluttered background.

---

## 3. Sound becomes numbers (14 seconds)

**Prompt**

A smooth continuous sound wave is measured at regular intervals. Vertical measuring lines drop
onto the wave, each topped with a glowing dot, and the dots snap to a grid of discrete levels
before turning into rows of binary digits underneath. A lilac sound wave being sampled into
glowing dots and then binary digits, sample lines appear along the wave, dots snap onto a level
grid, binary numbers scroll in below, abstract dark teal studio space with a faint horizontal axis
line, static frame with smooth transitions, flat even lighting, clean flat vector explainer
animation, palette limited to lilac, aqua, gold and deep teal, clear and approachable, horizontal
16:9 framing with balanced headroom, steady, physically coherent motion.

**Also avoid:** text captions, brand logos, audio waveform screenshots, realistic recording studio.

---

## 4. A picture becomes bits (13 seconds)

**Prompt**

A simple pixel heart drawn on a grid is scanned row by row by a moving highlight. As each pixel is
scanned it fills with colour and a matching row of ones and zeros appears alongside the grid,
until the whole picture has become binary. A pixel grid picture being scanned and converted into
rows of binary digits, a gold scan highlight sweeps across the grid pixel by pixel while binary
rows appear beside it, abstract deep teal space with the grid floating in the centre, static frame
with smooth transitions, flat even lighting, clean flat vector explainer animation, crisp square
pixels, palette limited to aqua, lilac, gold and deep teal, clear and approachable, horizontal
16:9 framing with balanced headroom, steady, physically coherent motion.

**Also avoid:** text captions, brand logos, photographic images, gradients inside pixels.

---

## 5. Bubble sort in motion (15 seconds)

**Prompt**

Five numbered bars of different heights sit in a row. Pairs of neighbouring bars light up gold,
compare, and swap places when they are the wrong way round, until the tallest bar reaches the
right hand end and locks in teal, and finally the whole row is in order. Five numbered bars of
different heights being sorted by comparing and swapping neighbours, neighbouring bars highlight,
swap positions with a smooth arc, and lock into place once sorted, abstract deep teal stage with a
soft ground line beneath the bars, static frame with smooth transitions, flat even lighting, clean
flat vector explainer animation, rounded bars, palette limited to gold, aqua, lilac and deep teal,
clear and approachable, horizontal 16:9 framing with balanced headroom, steady, physically
coherent motion.

**Also avoid:** text captions, brand logos, chaotic motion, more than five bars.

---

## 6. Wrapping a message in layers (14 seconds)

**Prompt**

A small white block labelled as data sits in the centre. One by one, four coloured frames wrap
around it like nested parcels, each larger than the last, showing a message being encapsulated as
it passes down through the four layers of a network model. A small data block being wrapped in
four nested coloured frames, each frame expands outward and locks around the previous one in
sequence, abstract deep teal space with four faint stacked layer bars on the left, static frame
with smooth transitions, flat even lighting, clean flat vector explainer animation, nested rounded
rectangles, palette limited to lilac, aqua, gold and deep teal, clear and approachable, horizontal
16:9 framing with balanced headroom, steady, physically coherent motion.

**Also avoid:** text captions, brand logos, physical parcels or boxes, cluttered background.

---

## Narration scripts

The narration for each scene already exists in the app, as the chapter captions in
`src/presentations/VideoScenes.tsx`. Read them in order and they form a complete voiceover script
timed to the same beats.

## Why the app itself does not ship video files

A single 15 second clip at a sensible quality is several megabytes. Six of them would be larger
than the entire rest of the app, would need decoding on older phones, and would look soft on a
high resolution screen. Drawing the same scenes as SVG keeps the download small, keeps every line
sharp at any size, and lets the student scrub and jump between chapters instantly.
