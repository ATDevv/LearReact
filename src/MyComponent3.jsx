import React, { useState } from "react";

function MyComponent3() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    function handleYearChange(e) {
        // setCar({ ...car, year: e.target.value });
        // update function
        setCar((car) => ({ ...car, year: e.target.value }));
    }

    const handleMakeChange = (e) => {
        // setCar({ ...car, make: e.target.value });
        setCar((car) => ({ ...car, make: e.target.value }));
    };

    const handleModelChange = (e) => {
        // setCar({ ...car, model: e.target.value });
        setCar((car) => ({ ...car, model: e.target.value }));
    };

    return (
        <div>
            <hr />
            <p>
                Your favorite car is: {car.year} {car.make} {car.model}
            </p>
            <input
                type="number"
                value={car.year}
                onChange={(e) => handleYearChange(e)}
            />
            <br />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <br />
            <input type="text" value={car.model} onChange={handleModelChange} />
            <br />
            <p>Your favorite car_year is: {car.year}</p>
            <p>Your favorite car_make is: {car.make}</p>
            <p>Your favorite car_model is: {car.model}</p>
            <hr />
        </div>
    );
}

export default MyComponent3;

// update Obj in state
