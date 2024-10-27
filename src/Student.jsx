import PropType from "prop-types";

function Student(props) {
    return (
        <>
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
                {/* //vì biến boolean kh hiển thị nên dùng toán tử 3 ngôi để hiện thị theo giá trị */}
            </div>
        </>
    );
}

// Quy định kiểu dữ kiệu cho props
Student.propTypes = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.bool,
};

//tạo Student mặc định
// Student.defaultProps = {
//     name: "Guest",
//     age: 15,
//     isStudent: false,
// };

export default Student;
