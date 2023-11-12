import { useReducer } from "react";

function reducer(state, action) {
  if (action.payload === undefined) {
    const isLast = state.selectedIndex === state.options.length - 1;
    const newIndex = isLast ? 0 : state.selectedIndex + 1;
    return {
      options: state.options,
      selectedIndex: newIndex
    };
  } else {
    const index = state.options.indexOf(action.payload);
    if (index === -1) {
      throw new Error("Incorrect value passed");
    }
    return {
      options: state.options,
      selectedIndex: index
    };
  }
}

export function useToggle(options) {
  const initialState = {
    options: options || [false, true],
    selectedIndex: 0
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function toggle(option) {
    dispatch({ payload: option ?? undefined });
  }

  return [state.options[state.selectedIndex], toggle];
}
