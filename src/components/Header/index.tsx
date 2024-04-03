interface Props {
  count: number;
}

export const Header = ({ count }: Props) => {
  return <div>{count}</div>;
};
