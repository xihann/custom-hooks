
export const todoReducer = (initialState = [], actions) => {

    switch (actions.type) {
        case '[TODO] Add Todo':
            return [...initialState, actions.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== actions.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === actions.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;

            });
        default:
            return initialState;
    }
}