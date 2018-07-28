export function selectBook(book) {
    // Actioncreator, needs to return object with tyep property
    // Usually has type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };

}
