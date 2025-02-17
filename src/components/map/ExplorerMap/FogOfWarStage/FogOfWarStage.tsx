import { Layer, Rect, Stage } from 'react-konva';
import { MoveHandler } from '@/lib/hooks/usePlayerMovement';
import { CanvasRef, LayerRef, StageRef } from '@/lib/model/customTypes.model';

interface FogOfWarStageProps {
  stageRef: StageRef;
  fogLayerRef: CanvasRef;
  mapImage: HTMLImageElement;
  fogImage: HTMLImageElement;
  moveHandler: MoveHandler;
}

export const FogOfWarStage = ({
  stageRef,
  fogLayerRef,
  mapImage,
  fogImage,
  moveHandler,
}: FogOfWarStageProps) => {
  return (
    <>
      <Stage
        ref={stageRef}
        width={mapImage.width}
        height={mapImage.height}
        onMouseMove={moveHandler.handleMouseMove}
        onMouseDown={moveHandler.handleMouseDown}
        onMouseUp={moveHandler.handleMouseUp}
      >
        <Layer id='map-layer'>
          <Rect width={mapImage?.width} height={mapImage.height} fillPatternImage={mapImage} />
        </Layer>
        <Layer id='fog-layer' ref={fogLayerRef as LayerRef} listening={false}>
          <Rect width={mapImage?.width} height={mapImage.height} fillPatternImage={fogImage} />
        </Layer>
      </Stage>
    </>
  );
};
