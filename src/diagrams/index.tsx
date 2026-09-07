import type { ComponentType } from 'react';
import * as S from './systems';
import * as N from './networks';
import * as A from './algorithms';
import * as M from './misc';

export const DIAGRAMS: Record<string, ComponentType> = {
  'von-neumann': S.VonNeumann,
  'fetch-execute-loop': S.FetchExecuteLoop,
  'memory-hierarchy': S.MemoryHierarchy,
  'cpu-performance': S.CpuPerformance,
  'sound-sampling': S.SoundSampling,
  'image-bits': S.ImageBits,
  'os-functions': S.OsFunctions,
  'compression-types': S.CompressionTypes,
  'storage-units': S.StorageUnits,

  'lan-wan': N.LanWan,
  topologies: N.Topologies,
  'tcp-ip-layers': N.TcpIpLayers,
  'dns-lookup': N.DnsLookup,
  'packet-journey': N.PacketJourney,
  'client-server-p2p': N.ClientServerP2p,
  'threats-list': N.ThreatsWheel,

  'flowchart-symbols': A.FlowchartSymbols,
  'linear-vs-binary': A.LinearVsBinary,
  'bubble-sort-pass': A.BubbleSortPass,
  'merge-sort-tree': A.MergeSortTree,
  'logic-gates': A.LogicGates,
  'compiler-interpreter': A.CompilerInterpreter,
  'defensive-design': A.DefensiveDesign,
  'abstraction-decomposition': A.AbstractionDecomposition,
  'sql-table': A.SqlTable,

  'ram-rom': M.RamRom,
  'virtual-memory': M.VirtualMemory,
  'secondary-storage': M.SecondaryStorage,
  'network-hardware': M.NetworkHardware,
  'impacts-list': M.ImpactsWheel,
  'testing-types': M.TestingTypes,
  'ide-features': M.IdeFeatures,
  'data-types': M.DataTypes,
  'array-diagram': M.ArrayDiagram,
  'embedded-systems': M.EmbeddedSystems,
};
