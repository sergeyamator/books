export default function reducer(state = [], action) {
  switch (action.type) {

    case 'DATA_RECEIVED': {
      return action.data;
    }

    default: {
      return state;
    }
  }
}