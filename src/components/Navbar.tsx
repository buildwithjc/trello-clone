function Navbar() {
    return(
    <>
        <div className="font-bold text-2xl bg-gray-800 text-white">
            <div className="p-2 flex gap-4 flex justify-between mx-2">
                <h1>Trello</h1>
                <button>Search</button>
                <button>Notifications</button>
                <button>User</button>
            </div>
        </div>
    </>
    );
}

export default Navbar;