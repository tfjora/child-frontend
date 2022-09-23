import type { IQuotes } from '../../../../_models/Quotes';
import Cell from './Cell';
import { useStyles } from './styles';

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
                            <th className={styles.tableHeader}>Quote</th>
                            <th className={styles.tableHeader}>PersonId</th>
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
