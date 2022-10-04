import type { IPersonDetail } from '../../../../_models/PersonDetail';
import { getDayMonthYear } from '../../../../_utilities/date';
import Cell from './Cell';
import { useStyles } from './styles';

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
                            <th className={styles.tableHeader}>Name</th>
                            <th className={styles.tableHeader}>Height</th>
                            <th className={styles.tableHeader}>Weight</th>
                            <th className={styles.tableHeader}>Date submitted</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {personDetails?.map((b: IPersonDetail, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <Cell item={`${b.person.firstName} ${b.person.lastName}`} />
                                <Cell item={b.height} />
                                <Cell item={b.weight} />
                                <Cell item={getDayMonthYear(b.date)} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}
