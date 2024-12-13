
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "../Home/Content/ModalPickLocation.scss";
import { toast } from "react-toastify";
import { completeBooking, postConfirmBooking } from "../../service/apiService";

function SelectPaymentMethodModal(props) {
    const { show, setShow, bookingId, paymentMethod, setPaymentMethod, type, handleComplete } = props;

    const handleSubmit = async () => {
        if (type === "Deposit") {
            if (paymentMethod === "vnpay") {
                const confirmResponse = await postConfirmBooking(
                    bookingId,
                    paymentMethod
                );
                console.log("VNPay confirmation response:", confirmResponse);

                window.location.href = confirmResponse.data.vnPayUrl;
                return;
            }

            if (paymentMethod === "wallet") {
                const confirmResponse = await postConfirmBooking(
                    bookingId,
                    paymentMethod
                );
                console.log("Wallet confirmation response:", confirmResponse);

                if (confirmResponse.statusCode === 200) {
                    toast.success("Payment successfully");
                } else {
                    toast.error("Payment failure");
                }
            }
        } else {
            if (paymentMethod === "vnpay") {
                let response = await completeBooking(bookingId, paymentMethod);
                console.log("VNPay confirmation response:", response.vnPayUrl);

                window.location.href = response.vnPayUrl;
                return;
            }

            if (paymentMethod === "wallet") {
                handleComplete(bookingId, paymentMethod);
                return;
            }
        }

        handleClose();
    };

    const handleInputChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            size="lg"
            centered
            className="modal-search-location"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select your PaymentMethod
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label>Select payment method</label>
                    <select
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="vnpay">VNPAY</option>
                        <option value="wallet">Wallet</option>
                    </select>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-loca" onClick={handleSubmit} variant="primary">
                    Pay
                </Button>
                <Button
                    className="btn-date"
                    onClick={handleClose}
                    variant="outline-secondary"
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectPaymentMethodModal;
