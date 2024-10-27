import React, { useState } from "react";

function MyComponent2() {
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState(1);
    const [cmt, setCmt] = useState();
    const [payment, setPayment] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleCmtChange = (e) => {
        setCmt(e.target.value);
    };

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
                placeholder="Enter Name Here!"
            />
            <p>Name: {name}</p>

            <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(e)}
            />
            <p>Quantity: {quantity}</p>

            <textarea
                value={cmt}
                onChange={(e) => handleCmtChange(e)}
                placeholder="Enter Comment Here!"
            ></textarea>
            <p>Comment: {cmt}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="" disabled>Select an option</option>
                <option value="Visaaaaaa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
                <option value="OtherWay">OtherWay</option>
            </select>
            <p>Payment: {payment}</p>
            <hr />
        </div>
    );
}

export default MyComponent2;
