import PropTypes from "prop-types";
import { TransactionHeader } from "components/TransationHeader/TransactionHeader";
import { Table, TableBody } from "./TransactionHistory.styled";
import { TransactionBody } from "components/TransactionBody/TransactionBody";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TransactionHeader />
            
            <TableBody>
                {items.map((item) => (
                    <TransactionBody key={item.id} item = {item}/>
                ))}
            </TableBody>
        </Table>
    );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};