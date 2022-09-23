import type { IPerson } from '../../../../_models/Person';
import Cell from './Cell';
import { useStyles } from './styles';

type Props = {
    persons: null | IPerson[];
};

export default function View({ persons }: Props) {
    const styles = useStyles();

    console.log('persons222 :>> ', persons);
    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.tableThead}>
                    <tr className={styles.tableHeaderRow}>
                        <th className={styles.tableHeader}>First name</th>
                        <th className={styles.tableHeader}>Last name</th>
                        <th className={styles.tableHeader}>Age</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {persons &&
                        persons.map((b: IPerson, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <>
                                    <Cell item={b.firstName} />
                                    <Cell item={b.lastName} />
                                    <Cell item={b.dateBorn} />
                                </>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
