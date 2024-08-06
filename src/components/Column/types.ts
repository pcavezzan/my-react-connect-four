import { ChipsPositions } from '../../types';

export interface Props {
  column: number;
  rows: number;
  chipsPositions: ChipsPositions;
  onTileClick: (id: string) => any;
}
