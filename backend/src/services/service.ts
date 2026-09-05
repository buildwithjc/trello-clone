export const getCardById = (id: string) => {
    if (id === "999") {
        return null;
    }

    return {
        cardId: id
    };
};