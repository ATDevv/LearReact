const ProfilePicture = () => {
    const imageUrl = "./src/assets/card.jpg";

    const handlClick = (e) => {
        e.target.style.display = "none";
    };

    return <img src={imageUrl} alt="" onClick={(e) => handlClick(e)} />;
};

export default ProfilePicture;
