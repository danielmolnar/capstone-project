### Headline First Friend with Desktopinfo

```jsx

const friendExample = {
    "_id": "60724d34d4e6f900153b8b38",
    "age": "33",
    "favoritesNumber": 30,
    "friendsNumber": 6,
    "name": "Ariane",
    "watchlistNumber": 1,
    "__v": 0
}

<FriendHeadline friend={friendExample} isFirstFriend={true} isMobile={false}>
```

### Headline not First Friend without Desktopinfo

```jsx

const friendExample = {
    "_id": "60724d34d4e6f900153b8b38",
    "age": "33",
    "favoritesNumber": 30,
    "friendsNumber": 6,
    "name": "Ariane",
    "watchlistNumber": 1,
    "__v": 0
}

<FriendHeadline friend={friendExample} isFirstFriend={false} isMobile={false}>
```

### Headline First Friend without Desktopinfo due to mobile device

```jsx

const friendExample = {
    "_id": "60724d34d4e6f900153b8b38",
    "age": "33",
    "favoritesNumber": 30,
    "friendsNumber": 6,
    "name": "Ariane",
    "watchlistNumber": 1,
    "__v": 0
}

<FriendHeadline friend={friendExample} isFirstFriend={true} isMobile={true}>
```

### Headline not first Friend without Desktopinfo on mobile

```jsx

const friendExample = {
    "_id": "60724d34d4e6f900153b8b38",
    "age": "33",
    "favoritesNumber": 30,
    "friendsNumber": 6,
    "name": "Ariane",
    "watchlistNumber": 1,
    "__v": 0
}

<FriendHeadline friend={friendExample} isFirstFriend={false} isMobile={true}>
```
