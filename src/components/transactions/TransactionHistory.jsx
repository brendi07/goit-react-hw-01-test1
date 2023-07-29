import { Table, Head, HeadList, HeadItem, Body, BodyList, BodyItem } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
    return (
      <>
        <Table>
          <Head>
            <HeadList>
              <HeadItem>Type</HeadItem>
              <HeadItem>Amount</HeadItem>
              <HeadItem>Currency</HeadItem>
            </HeadList>
          </Head>

          <Body>
            {items.map((item) => (
              <BodyList key={item.id}>
                    <BodyItem>{item.type}</BodyItem>
                    <BodyItem>{item.amount}</BodyItem>
                    <BodyItem>{item.currency}</BodyItem>
              </BodyList>
            ))}
          </Body>
        </Table>
      </>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}