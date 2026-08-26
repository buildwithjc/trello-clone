import Card from "./Card";
import { useState } from "react";

function List({
    title,
    id,
    listCards,
    lists,
    updateListCards,
    removeList,
    updateListTitle,
    moveCard,
}: {
    title: string;
    id: string;
    listCards: { title: string; id: string }[];

    lists: {
        title: string;
        id: string;
        cards: { title: string; id: string }[];
    }[];

    updateListCards: (
        listId: string,
        newCards: { title: string; id: string }[]
    ) => void;

    removeList: (id: string) => void;

    updateListTitle: (
        id: string,
        newTitle: string
    ) => void;

    moveCard: (
        cardId: string,
        sourceListId: string,
        targetListId: string
    ) => void;
}) {

    const [listTitle, setListTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    function addCard() {
        updateListCards(id, [
            ...listCards,
            {
                title: `Card ${listCards.length + 1}`,
                id: crypto.randomUUID(),
            },
        ]);
    }

    function removeCard(cardId: string) {
        updateListCards(
            id,
            listCards.filter((card) => card.id !== cardId)
        );
    }

    function updateCardTitle(cardId: string, newTitle: string) {
        updateListCards(
            id,
            listCards.map((card) =>
                card.id === cardId
                    ? { ...card, title: newTitle }
                    : card
            )
        );
    }

    function saveListTitle() {
        if (!listTitle.trim()) {
            return;
        }

        updateListTitle(id, listTitle);
        setIsEditing(false);
    }

    return (
        <div className="bg-gray-100 rounded w-110 border rounded-lg">

            <div className="flex justify-between items-center mb-4 bg-gray-500 p-4 w-full">

                <div className="flex items-center gap-2">

                    {isEditing ? (
                        <input
                            value={listTitle}
                            onChange={(event) =>
                                setListTitle(event.target.value)
                            }
                            onBlur={saveListTitle}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    saveListTitle();
                                }
                            }}
                            autoFocus
                        />
                    ) : (
                        <h3
                            className="font-bold text-lg cursor-pointer"
                            onClick={() => setIsEditing(true)}
                        >
                            {title}
                        </h3>
                    )}

                    <button
                        className="p-2 font-semibold text-gray-800 border border-gray-700 rounded"
                        onClick={addCard}
                    >
                        +
                    </button>

                </div>

                <button onClick={() => removeList(id)}>
                    Delete List
                </button>

            </div>

            <div className="p-3">
                {listCards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        updateCardTitle={updateCardTitle}
                        removeCard={removeCard}
                        currentListId={id}
                        lists={lists}
                        moveCard={moveCard}
                    />
                ))}
            </div>

        </div>
    );
}

export default List;