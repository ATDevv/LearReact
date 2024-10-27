import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyComponent3 from "./MyComponent3.jsx";
import MyComponent4 from "./MyComponent4.jsx";
import MyComponent5 from "./MyComponent5.jsx";
import ToDoList from './ToDoList.jsx'

function App() {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 45 },
        { id: 3, name: "Cocount", calories: 105 },
        { id: 4, name: "Pineapple", calories: 159 },
    ];

    const vegetables = [
        { id: 5, name: "Apple", calories: 95 },
        { id: 6, name: "Banana", calories: 45 },
        { id: 7, name: "Cocount", calories: 105 },
        { id: 8, name: "Pineapple", calories: 159 },
    ];

    return (
        <>
            <Header />
            <Food />
            <Food />
            <Footer />
            <Card />
            <Card></Card> <br />
            <Button></Button> <br />
            <Student name="ATD" age={30} isStudent={true}></Student>
            <Student name="Lucas" age={42} isStudent={true}></Student>
            <Student name="Lobby" age={60} isStudent={false}></Student>
            <Student name="Hihi" age={18} isStudent={false}></Student>
            <Student></Student>
            <UserGreeting name="ATD" isLoggedIn={true}></UserGreeting>
            <UserGreeting name="Lobby" isLoggedIn={false}></UserGreeting>
            <List items={fruits} category="Fruits"></List>
            {/* Thêm items, category (props) để tái sử dụng code */}
            <List items={vegetables} category="Vegetables"></List>
            <ProfilePicture></ProfilePicture>
            <MyComponent></MyComponent>
            <Counter></Counter>
            <MyComponent2></MyComponent2>
            <ColorPicker></ColorPicker>
            <MyComponent3></MyComponent3>
            <MyComponent4></MyComponent4>
            <MyComponent5></MyComponent5>
            <ToDoList></ToDoList>
        </>
    );
}

export default App;
