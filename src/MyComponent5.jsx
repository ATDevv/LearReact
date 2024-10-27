import { useState } from "react";

function MyComponent5() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        };

        setCars((cars) => [...cars, newCar]);

        // Thiết lập mặc định mỗi khi thêm Car mới
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(cars => cars.filter((_, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    return (
        <div>
            <h2>Lists of Car Obj</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                        {/* {car} */}
                    </li>
                ))}
            </ul>

            <input
                type="number"
                defaultValue={carYear}
                onChange={handleYearChange}
            />
            <br />
            <input
                type="text"
                defaultValue={carMake}
                onChange={handleMakeChange}
                placeholder="Enter Car Make..."
            />
            <br />
            <input
                type="text"
                defaultValue={carModel}
                onChange={handleModelChange}
                placeholder="Enter Car Model..."
            />
            <br />
            <button onClick={handleAddCar}>Add Car</button>
            <hr />
        </div>
    );
}

export default MyComponent5;

// update Array of Obj in states
