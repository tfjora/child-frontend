import type { IQuotes } from '../../../../_models/Quotes';
import { getDayMonthYear } from '../../../../_utilities/date';
import Cell from './Cell';
import { useStyles } from './styles';

type Props = {
    quotes: null | IQuotes[];
};

export default function View({ quotes }: Props) {
    const styles = useStyles();

    return (
        <div>
            {
                <table className={styles.table}>
                    <thead className={styles.tableThead}>
                        <tr className={styles.tableHeaderRow}>
                            <th className={styles.tableHeader}>Name</th>
                            <th className={styles.tableHeader}>Quote</th>
                            <th className={styles.tableHeader}>Quotes date</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {quotes?.map((b: IQuotes, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <Cell item={`${b.person.firstName} ${b.person.lastName}`} />
                                <Cell item={b.quote} />
                                <Cell item={getDayMonthYear(b.dateTime)} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}
