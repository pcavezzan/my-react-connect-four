import { ChipsPositions } from '../../types';

export interface Props {
  columns: number;
  rows: number;
  chipsPositions: ChipsPositions;
  onTileClick: (id: string) => any;
}
