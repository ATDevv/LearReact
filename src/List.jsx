import PropTypes from "prop-types";

function List(props) {
    // fruits.sort((a, b) => a.calories - b.calories);
    // const lowCalFruits = fruits.filter((a) => a <h3 100);

    const itemList = props.items;
    const cateGory = props.category;

    const listItems = itemList.map((a) => {
        return (
            <li key={a.id}>
                {a.name}: <b>{a.calories}</b>
            </li>
        );
    });

    return (
        <>
            <h3 className="list-category">{cateGory}:</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

//quy định kiểu của phần tử
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
};

export default List;

// Render List
