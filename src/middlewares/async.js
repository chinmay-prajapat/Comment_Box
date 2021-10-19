export default ({ dispatch }) =>
  (next) =>
  (action) => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload.then((res) => {
      const newAction = { ...action, payload: res };
      dispatch(newAction);
    });
  };
//check to see if the action has a promise on its 'payload' property
//If it does, then wait for it to resolve
//If it does not, then send the action on to the next middleware
//(then)=> is to check for the promise
// ----------------------------------------------
// if(action.payload.then)
//We want to wait for the promise to resolve
//Get it's data and then create a new action with that data and dispatch it
