import PropTypes from "prop-types";
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


TransactionBody.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
};