import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import "./MyWallet.scss";

function MyWallet() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const transactions = [
    {
      id: 1,
      amount: "+10,000,000 VND",
      title: "Top-up",
      date: "12/02/2022 18:00",
      bookingNo: "N/A",
      carName: "N/A",
    },
    {
      id: 2,
      amount: "-2,000,000 VND",
      title: "Withdrawal",
      date: "12/02/2022 18:00",
      bookingNo: "N/A",
      carName: "N/A",
    },
    {
      id: 3,
      amount: "-12,000,000 VND",
      title: "Pay Deposit",
      date: "12/02/2022 18:00",
      bookingNo: "12345678",
      carName: "Nissan Navara El 2017",
    },
    {
      id: 4,
      amount: "-1,000,000 VND",
      title: "Offset final payment",
      date: "12/02/2022 18:00",
      bookingNo: "12345678",
      carName: "Nissan Navara El 2017",
    },
    {
      id: 5,
      amount: "-500,000 VND",
      title: "Offset final payment",
      date: "12/02/2022 18:00",
      bookingNo: "12345678",
      carName: "Nissan Navara El 2017",
    },
    {
      id: 6,
      amount: "+10,000,000 VND",
      title: "Receive deposit",
      date: "12/02/2022 18:00",
      bookingNo: "12345678",
      carName: "Nissan Navara El 2017",
    },
  ];

  const handleSearch = () => {
    alert(`Filter transactions from ${fromDate} to ${toDate}`);
  };

  return (
    <div className="my-wallet">
      <h3 className="title">My Wallet</h3>

      {/* Balance Section */}
      <div className="balance-section">
        <p>Your current balance:</p>
        <h2 className="balance">20,000,000 VND</h2>
        <div className="buttons">
          <Button variant="warning">Withdraw</Button>
          <Button variant="success">Top-up</Button>
        </div>
      </div>

      {/* Transactions Filter */}
      <div className="filter-section">
        <h4>Transactions</h4>
        <div className="date-filters">
          <Form.Group className="date-group">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="date-group">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="transactions-section">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Amount</th>
              <th>Title</th>
              <th>Date time</th>
              <th>Booking No</th>
              <th>Car Name</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.title}</td>
                <td>{transaction.date}</td>
                <td>{transaction.bookingNo}</td>
                <td>{transaction.carName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MyWallet;
