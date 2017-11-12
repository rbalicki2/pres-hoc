/* eslint-disable */
const connectToLocation = () => {};

// Bad - how do we access Location from within the component?
const connectedToLocation = connectToLocation(MyComponent);

// Good - explicitly say that the location parameter will be access through the `location` key
const connectedToLocation = connectToLocation(MyComponent, 'location');


