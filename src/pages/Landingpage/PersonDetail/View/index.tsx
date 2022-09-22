import { useStyles } from "./styles";
import Cell from "./Cell";
import { IPersonDetail } from "../../../../_models/PersonDetail";

type Props = {
  personDetails: null | IPersonDetail[];
};

export default function View({ personDetails }: Props) {
  const styles = useStyles();

  return (
    <div>
      {
        <table className={styles.table}>
          <thead className={styles.tableThead}>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.tableHeader}>PersonId</th>
              <th className={styles.tableHeader}>Date</th>
              <th className={styles.tableHeader}>Height</th>
              <th className={styles.tableHeader}>Weight</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {personDetails?.map((b: IPersonDetail, index) => (
              <tr key={index} className={styles.tableRow}>
                <Cell item={b.personId} />
                <Cell item={b.date} />
                <Cell item={b.height} />
                <Cell item={b.weight} />
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
