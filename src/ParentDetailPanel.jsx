const ParentDetailPanel = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-md p-6 overflow-y-auto z-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <button
                    className="text-gray-400 hover:text-gray-600 text-lg"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
            <div className="flex items-center space-x-4 mb-6">
                {user.profileImage ? (
                    <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-16 h-16 rounded-full"
                    />
                ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
                <div>
                    <p className="text-sm text-gray-500">Parent of {user.child}</p>
                </div>
            </div>
            <ul className="space-y-2">
                <li>
                    <strong>Child:</strong> {user.child}
                </li>
                <li>
                    <strong>Contact:</strong> {user.contact}
                </li>
                <li>
                    <strong>Email:</strong> {user.email}
                </li>
            </ul>
        </div>
    );
};

export default ParentDetailPanel;