import { TableRow, TableSell } from "./TransactionBody.styled";

export const TransactionBody = ({item: {id, type, amount, currency}}) => {
    return (
        <TableRow key={id}>
            <TableSell>{type}</TableSell>
            <TableSell>{amount}</TableSell>
            <TableSell>{currency}</TableSell>
        </TableRow>
    );
};