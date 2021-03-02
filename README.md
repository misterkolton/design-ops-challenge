# SendOutCards Design Ops Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Notes

- All of the pre built components can be found in the src/components directory
- Users data can be found in src/data directory
- Screenshots of the finished project can be found in the src/assets directory

# Guidelines

### All components must be written as functional components (No class components allowed):

```jsx
import React from "react";

const example = () => {
  return <div>Hello World</div>;
};
```

### All components are imported & exported utilizing named exports

### Import:

```jsx
import { MyComponent } from "../myComponent/myComponent";
```

### Export:

```jsx
export const MyComponent = () => {
  return <div>Hello World</div>;
};
```

# Steps:

### 1. Create a UserCard

- Create a userCard.js file inside the src/components/userCard directory
- Export the component as `UserCard`
- The `UserCard` should take in the following props:
      -`profileImage`
      -`firstName`
      -`lastName`
      -`age`
      -`setActiveUserIndex`
- Create a userCard.css file inside the src/components/userCard directory and import it into the `UserCard`
- Import the following components from the src/components directory

```jsx
    <Text />
    <Button />
    <Avatar />
    <Card />
```

- The `Card` component will be the `UserCard`'s main wrapper, all of the other components will be the `Card`'s children
  - Add/Pass the following props to each of the components:

```jsx
      <Avatar image={profileImage} size="medium" />
      // First text block to hold the users name
      <Text tag="p">{`${firstName} ${lastName}`}</Text>
      // Second text block to hold the users age
      <Text tag="p">{!age ? "No Birthdate Entered" : `${age} Years Old`}</Text>
       <Button
            onClick={setActiveUserIndex}
            size="medium"
            title="View Profile"
          />
```

- The inner elements should be positioned the following way:
    - 32px from the top of the `Card` to the top of the `Avatar`
    - 16px from the bottom of the `Avatar` to the top of the first `Text` component
    - 8px from the bottom of the first `Text` component to the second one
    - 16px from the bottom of the second `Text` component to the top of the button
    - 16px from the bottom of the `Button` to the bottom of the `Card`
    - All of them should be centered horizontally
    
- An image of the finished userCard can be found at src/assets/userCard.png

### 2. Display the UserCards in a Grid

- Go to App.js found in the src directory
- Import the `UserCard` component that you just created
- You will see a users array being imported from the data directory
- The data is shaped like so:

```json
[
    {
    "_id": string,
    "index": number,
    "profileImage": string,
    "age": number,
    "firstName": string,
    "lastName": string,
    "about": string,
    "posts": number,
    "followers:" [
        {
            "id": number,
            "name": string,
            "profileImage": string
        }
    ],
    "following": [
        {
            "id": number,
            "name": string,
            "profileImage": string,
            "rating": number
        }
    ]
]
```

- Map over this array and return the `UserCard` component feeding the appropriate data to each prop
  - \*Note\* - you will need to pass the index of each user to the setActiveUserIndex state, it can be achieved like so:

```jsx
    <UserCard setActiveUserIndex={() => setActiveUserIndex(index)} {...feed the rest of your props the users data} />
```

- An image of the finished grid can be found at src/assets/gridFinished.png

### 3. Finish the Expanded User Card

- The expanded user card is almost complete, we just need to display the users top 5 rated people they are following
- The users following array stores objects with id, name, profileImage and rating keys, find the top 5 rated friends in this array
- Map over these top 5 users inside the ```<div>``` with the ```className="topFriendsList"``` (There is a note here with instructions on what to return for each  friend)
- An image of the finished expandedCard can be found at src/assets/expandedCardFinished.png
# design-ops-challenge
