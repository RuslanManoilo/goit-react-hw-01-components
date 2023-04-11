import { TableTitle } from "./TransactionHeader.styled";

export const TransactionHeader = () => {
    return (
        <thead>
            <tr>
            <TableTitle>TYPE</TableTitle>
            <TableTitle>AMOUNT</TableTitle>
            <TableTitle>CURRENCY</TableTitle>
            </tr>
        </thead>
    );
};