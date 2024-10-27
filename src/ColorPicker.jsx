import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="row">
                <div
                    className="color-display"
                    style={{ backgroundColor: color }}
                >
                    <p>Selected Color =&gt; </p>
                </div>
                <input
                    type="text"
                    defaultValue={color}
                    className="color-choose"
                    style={{ borderColor: color }}
                />
            </div>
            <label>Select a Color: </label>
            <input
                type="color"
                defaultValue={color}
                onChange={(e) => handleColorChange(e)}
            />
        </div>
    );
}

export default ColorPicker;
