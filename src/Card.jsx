import logo from './assets/card.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-img"src={logo} alt="profile picture" />
            <h2 className='card-title'>ATD</h2>
            <p className='card-text'>I make a ....</p>
        </div>
    );
}

export default Card;


//Card Components