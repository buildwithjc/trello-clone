import List from "../components/List";
import { useState } from "react";

type Card = {
    title: string;
    id: string;
};

type ListType = {
    title: string;
    id: string;
    cards: Card[];
};

function BoardPage() {
    const [lists, setLists] = useState<ListType[]>([
        {
            title: "To Do",
            id: crypto.randomUUID(),
            cards: [
                {
                    title: "Cards 1",
                    id: crypto.randomUUID()
                }
            ]
        }
    ]);

    function addList() {
        setLists([
            ...lists,
            {
                title: `New List ${lists.length + 1}`,
                id: crypto.randomUUID(),
                cards: []
            }
        ]);
    }

    function removeList(id: string) {
        setLists(
            lists.filter((list) => list.id !== id)
        );
    }

    function updateListTitle(id: string, newTitle: string) {
        setLists(
            lists.map((list) =>
                list.id === id
                    ? { ...list, title: newTitle }
                    : list
            )
        );
    }

    function moveCard(cardId: string, sourceListId: string, targetListId: string) {
        if (sourceListId === targetListId) {
            return;
        }

        const sourceList = lists.find(
            (list) => list.id === sourceListId
        );

        const targetList = lists.find(
            (list) => list.id === targetListId
        );

        const cardToMove = sourceList?.cards.find(
            (card) => card.id === cardId
        );

        if (!cardToMove || !targetList) {
            return;
        }

        setLists(
            lists.map((list) =>
                list.id === sourceListId
                    ? {
                        ...list,
                        cards: list.cards.filter(
                            (card) => card.id !== cardId
                        )
                    }
                    : list.id === targetListId
                        ? {
                            ...list,
                            cards: [...list.cards, cardToMove]
                        }
                        : list
            )
        );
    }   

    function updateListCards(
        listId: string,
        newCards: Card[]
    ) {
        setLists(
            lists.map((list) =>
                list.id === listId
                    ? { ...list, cards: newCards }
                    : list
            )
        );
    }

    return (
        <>
            <button onClick={addList}>
                Add List 
            </button>

            <div className="flex gap-4 mt-4">
                {lists.map((list) => (
                    <List
                        key={list.id}
                        title={list.title}
                        id={list.id}
                        listCards={list.cards}
                        updateListCards={updateListCards}
                        removeList={removeList}
                        updateListTitle={updateListTitle}
                        moveCard={moveCard}
                        lists={lists}
                    />
                ))}
            </div>
        </>
    );
}

export default BoardPage;