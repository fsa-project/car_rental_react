import React, { useEffect, useState } from "react";
import { Table, Button, Form, Alert } from "react-bootstrap";
import "./MyWallet.scss";
import LoadingIcon from "../Loading";
import {
  getUsersDetail,
  updateProfile,
  getTransaction,
} from "../../service/apiService"; // API service
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function MyWallet() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransaction] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const { account } = useSelector((state) => state.user);
  const userId = account?.id || localStorage.getItem("userId");
  const navigate = useNavigate();
  const { userIdTrans } = useParams();

  //   {
  //     id: 1,
  //     amount: "+10,000,000 VND",
  //     title: "Top-up",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "N/A",
  //     carName: "N/A",
  //   },
  //   {
  //     id: 2,
  //     amount: "-2,000,000 VND",
  //     title: "Withdrawal",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "N/A",
  //     carName: "N/A",
  //   },
  //   {
  //     id: 3,
  //     amount: "-12,000,000 VND",
  //     title: "Pay Deposit",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "12345678",
  //     carName: "Nissan Navara El 2017",
  //   },
  //   {
  //     id: 4,
  //     amount: "-1,000,000 VND",
  //     title: "Offset final payment",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "12345678",
  //     carName: "Nissan Navara El 2017",
  //   },
  //   {
  //     id: 5,
  //     amount: "-500,000 VND",
  //     title: "Offset final payment",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "12345678",
  //     carName: "Nissan Navara El 2017",
  //   },
  //   {
  //     id: 6,
  //     amount: "+10,000,000 VND",
  //     title: "Receive deposit",
  //     date: "2022-02-12T18:00",
  //     bookingNo: "12345678",
  //     carName: "Nissan Navara El 2017",
  //   },
  // ];
  //fetch thông tin transaction
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const response = await getTransaction(userId);
      console.log(">>> Full Response:", JSON.stringify(response, null, 2));
      setIsLoading(false);

      if (
        response?.statusCode === 200 &&
        Array.isArray(response?.data?.result)
      ) {
        setTransaction(response.data.result);
      } else {
        console.error("Response data is not an array.");
        setTransaction([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransaction([]);
    }
  };
  // tetch thông tin người dùng
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await getUsersDetail(userId);

        if (response?.statusCode === 200 && response.data) {
          setUser(response.data);
        } else {
          console.error("Failed to fetch user detail.");
        }
      } catch (error) {
        console.error("Error fetching user detail:", error);
      } finally {
        setIsLoading(false); // Đảm bảo trạng thái loading luôn được cập nhật
      }
    };

    fetchUserDetail();
  }, [userId]);

  // Handle search
  const handleSearch = () => {
    if (!fromDate || !toDate) {
      alert("Please select both 'From' and 'To' dates.");
      return;
    }

    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);

    if (startDate > endDate) {
      alert("'From' date cannot be greater than 'To' date.");
      return;
    }

    if (!Array.isArray(transaction) || transaction.length === 0) {
      alert("No transactions available for search.");
      return;
    }

    const filtered = transaction.filter((trans) => {
      const transactionDate = new Date(trans.transactionDate);
      return transactionDate >= startDate && transactionDate <= endDate;
    });

    setFilteredTransactions(filtered);

    if (filtered.length === 0) {
      alert("No transactions found in the selected date range.");
    }
  };

  // Render loading state
  if (isLoading) {
    return <LoadingIcon />;
  }

  // Render no user ID state
  if (!userId) {
    return <p>No user ID found. Please login again.</p>;
  }

  return (
    <div className="my-wallet">
      <h3 className="title">My Wallet</h3>

      {/* Balance Section */}
      <div className="balance-section">
        <p>Your current balance:</p>
        <h2 className="balance">{user?.wallet || "0"} VND</h2>
        <div className="buttons">
          <Button
            variant="warning"
            onClick={() => alert("Withdraw feature coming soon!")}
          >
            Withdraw
          </Button>
          <Button
            variant="success"
            onClick={() => alert("Top-up feature coming soon!")}
          >
            Top-up
          </Button>
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
          <Button
            style={{
              backgroundColor: "white",
              color: "#333",
              border: "1pt solid #333",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
            }}
            variant="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="transaction-section">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Title</th>
              <th>Date time</th>
              <th>Booking No</th>
              <th>Car Name</th>
            </tr>
          </thead>
          <tbody>
            {(filteredTransactions.length > 0
              ? filteredTransactions
              : transaction
            ).map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td>
                  {new Date(transaction.transactionDate).toLocaleDateString()}
                </td>
                <td>{transaction.bookingId}</td>
                <td>{transaction.carName}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {filteredTransactions.length === 0 && transaction.length === 0 && (
          <Alert variant="warning">No transaction found.</Alert>
        )}
      </div>
    </div>
  );
}

export default MyWallet;
