export const createArray = (images: any) => {
    let id = 0;
    const cardsList =
        images &&
        images.reduce((acc: any, url: any) => {
            acc.push({
                id: id++,
                url,
            });
            return acc;
        }, []);

    return cardsList;
};
