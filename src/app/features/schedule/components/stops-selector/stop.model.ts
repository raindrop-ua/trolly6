type Directions = 'forward' | 'backward';

export interface Stop {
  id: string;
  name: string;
  description: string;
  style: number;
  availableDirections: Directions[];
}
