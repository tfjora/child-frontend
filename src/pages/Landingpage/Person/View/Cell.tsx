type Props = {
  item: string | number;
};

export default function Cell({ item }: Props) {
  console.log('item :>> ', item);
  return <td style={{ border: "0.5px solid black", borderCollapse: "collapse" }}>{item}</td>;
}
