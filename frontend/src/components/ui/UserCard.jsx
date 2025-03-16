const UserCard = ({ user }) => {
    return (
        <div className="card">
        <img src={user.picture} alt={user.username} />
        <div className="card-body">
            <h2>{user.username}</h2>
        </div>
        </div>
    );
};

export default UserCard;