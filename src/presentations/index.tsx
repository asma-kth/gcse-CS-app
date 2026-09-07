import type { ComponentType } from 'react';
import FetchExecute from './FetchExecute';
import BinaryLab from './BinaryLab';
import SoundLab from './SoundLab';
import ImageLab from './ImageLab';
import NetworkLayers from './NetworkLayers';
import AlgorithmLab from './AlgorithmLab';
import LogicLab from './LogicLab';
import CharacterLab from './CharacterLab';
import TraceTable from './TraceTable';
import { PythonDrill, ErlDrill } from './CodeDrill';

export interface DemoMeta {
  id: string;
  name: string;
  blurb: string;
  icon: string;
  component: ComponentType;
}

export const DEMOS: DemoMeta[] = [
  {
    id: 'fetch-execute',
    name: 'Fetch decode execute',
    blurb: 'Step through a real program one register at a time and watch the CPU work.',
    icon: '⚙️',
    component: FetchExecute,
  },
  {
    id: 'binary',
    name: 'Binary and hex lab',
    blurb: 'Flip bits, convert to hex, add binary numbers and try shifts.',
    icon: '🔢',
    component: BinaryLab,
  },
  {
    id: 'sound',
    name: 'Sound representation',
    blurb: 'Drag the sample rate and bit depth and see quality and file size change.',
    icon: '🎵',
    component: SoundLab,
  },
  {
    id: 'image',
    name: 'Image representation',
    blurb: 'Draw on a pixel grid and calculate file sizes from colour depth.',
    icon: '🖼️',
    component: ImageLab,
  },
  {
    id: 'network-layers',
    name: 'Network layers',
    blurb: 'Follow a message down the four TCP IP layers and back up again.',
    icon: '🌐',
    component: NetworkLayers,
  },
  {
    id: 'algorithms',
    name: 'Algorithm visualiser',
    blurb: 'Watch bubble, insertion and merge sort plus both searches, step by step.',
    icon: '🔍',
    component: AlgorithmLab,
  },
  {
    id: 'logic',
    name: 'Logic gate simulator',
    blurb: 'Flip switches, build truth tables and see the output light up.',
    icon: '💡',
    component: LogicLab,
  },
  {
    id: 'characters',
    name: 'Characters and ASCII',
    blurb: 'Type text and watch it become denary, binary and hex.',
    icon: '🔤',
    component: CharacterLab,
  },
  {
    id: 'trace-table',
    name: 'Trace table trainer',
    blurb: 'Practise filling in trace tables and get them marked instantly.',
    icon: '📋',
    component: TraceTable,
  },
  {
    id: 'python-drill',
    name: 'Python output drill',
    blurb: 'Read a short program, predict the output and get marked instantly.',
    icon: '🐍',
    component: PythonDrill,
  },
  {
    id: 'erl-drill',
    name: 'ERL output drill',
    blurb: 'The same idea using OCR Exam Reference Language, exactly as it appears in the exam.',
    icon: '📘',
    component: ErlDrill,
  },
];

export const DEMO_MAP: Record<string, DemoMeta> = Object.fromEntries(DEMOS.map((d) => [d.id, d]));
