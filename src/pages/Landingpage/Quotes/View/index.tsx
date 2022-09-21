import { useStyles } from "./styles";
import Cell from "./Cell";
import { IQuotes } from "../../../../_models/Quotes";

type Props = {
  books: null | IQuotes[];
};

export default function View({ books }: Props) {
  const styles = useStyles();

  return (
    <div>
      {
        <table className={styles.table}>
          <thead className={styles.tableThead}>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.tableHeader}>Title</th>
              <th className={styles.tableHeader}>AuthorId</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {books?.map((b: IQuotes, index) => (
              <tr key={index} className={styles.tableRow}>
                <Cell item={b.quote} />
                <Cell item={b.personId} />
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
