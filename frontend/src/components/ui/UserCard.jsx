import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {

    const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";

    return (
        <>
            <div className="flex flex-row w-[15rem] min-h-[3rem] bg-white rounded-lg shadow-md hover:-translate-y-1 transform transition duration-300 ease-in-out">
                <Link to={`/user/${user.id}`} className='w-full h-full flex flex-row items-center justify-start px-2 py-0.5'>
                    <img
                        src={user.picture ? user.picture : fallbackImage}
                        alt="user"
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback fails
                            e.target.src = fallbackImage; // Fallback image URL
                        }}
                        className="w-[2.5rem] h-[2.5rem] rounded-full"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="flex flex-col ml-2 w-0 flex-1">
                        <span className="font-semibold text-start whitespace-normal">{user.username}</span>
                        <span className="text-sm text-start break-words">{user.email}</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default UserCard;