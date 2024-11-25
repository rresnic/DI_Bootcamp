const UserFavoriteAnimals = (props) => {
    const {favAnimals} = props;
    return (
        <ul>
        {favAnimals.map((animal, index) =>{
            return <li key={index}>{animal}</li>;
        })}
        </ul>

    )
}
export default UserFavoriteAnimals;