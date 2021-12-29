// EXAMPLE: Logger with Middleware
const logger = store => next => (action) => {
  console.log('%c Dispatching', 'color: #21A2BF', action);
  const result = next(action);
  console.log('%c Next State', 'color: #21A2BF', store.getState());
  return result;
};

export default logger;
