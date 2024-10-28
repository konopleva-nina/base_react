export type CounterProps = {
  name: string;
  minCount: number;
  count: number;
  maxCount: number;
  setCount: (count: number) => void;
  resetCount: () => void;
  isDisabled: boolean;
};
