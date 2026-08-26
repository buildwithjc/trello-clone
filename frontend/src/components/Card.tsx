import { useState } from "react";

function Card({
    id,
    title,
    updateCardTitle,
    removeCard,
    currentListId,
    lists,
    moveCard,
}: {
    id: string;
    title: string;

    updateCardTitle: (
        id: string,
        newTitle: string
    ) => void;

    removeCard: (
        id: string
    ) => void;

    currentListId: string;

    lists: {
        title: string;
        id: string;
        cards: { title: string; id: string }[];
    }[];

    moveCard: (
        cardId: string,
        sourceListId: string,
        targetListId: string
    ) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    function saveTitle() {
        if (!newTitle.trim()) {
            return;
        }

        updateCardTitle(id, newTitle);
        setIsEditing(false);
    }

    return (
        <div className="bg-white p-3 rounded mt-2 border border-gray-400 text-center">

            {isEditing ? (
                <input
                    autoFocus
                    value={newTitle}
                    onChange={(event) =>
                        setNewTitle(event.target.value)
                    }
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            saveTitle();
                        }
                    }}
                    onBlur={saveTitle}
                    className="border border-gray-800 rounded px-2 py-1 w-full"
                />
            ) : (
                <div className="flex justify-between">

                    <h4
                        className="cursor-pointer text-left text-lg font-semibold"
                        onClick={() => setIsEditing(true)}
                    >
                        {title}
                    </h4>

                    <button
                        onClick={() => removeCard(id)}
                    >
                        Remove
                    </button>

                </div>
            )}

            <select
                defaultValue=""
                onChange={(event) => {
                    if (event.target.value) {
                        moveCard(
                            id,
                            currentListId,
                            event.target.value
                        );
                    }
                }}
            >
                <option value="" disabled>
                    Move to...
                </option>

                {lists
                    .filter((list) => list.id !== currentListId)
                    .map((list) => (
                        <option
                            key={list.id}
                            value={list.id}
                        >
                            {list.title}
                        </option>
                    ))}
            </select>

        </div>
    );
}

export default Card;