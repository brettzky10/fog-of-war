"use client"

import map from '@/assets/map-homm3.png';
import InfoModal from '@/components/info/InfoModal';
import { ExplorerMap } from '@/components/map/ExplorerMap/ExplorerMap';

export default function Home() {
  return (
    <>
      <ExplorerMap mapSrc={map} />
      <InfoModal />
    </>
  );
}
