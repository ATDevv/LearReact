import { useState } from "react";

function MyComponent4() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    const handleAddFood = (e) => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods((foods) => [...foods, newFood]);
    };

    const handleRemoveFood = (index) => {
        setFoods(
            foods.filter((_, i) => {
                return i !== index;
            })
        );
        // filter: true => giữ, false => xoá
    };

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                id="foodInput"
                placeholder="Enter food name..."
            />
            <button onClick={handleAddFood}>Add food</button>
            <hr />
        </div>
    );
}

export default MyComponent4;

// update Array in states
