export const books = [
  {
    id: "1",
    title: "Jane Eyre",
    price: 12.99,
    author: "Charlotte Bronte",
    ISBN: "9780743273565",
    reviews: [
      {
        id: "1",
        bookid: "1",
        reviewer: "Jane Doe",
        content: "A classic, a must read!",
        rating: 5,
      },
    ],
  },
  {
    id: "2",
    title: "The Brothers Karamazov",
    price: 16.99,
    author: "Fyodor Dostoevsky",
    ISBN: "9780316769488",
    reviews: [
      {
        id: "2",
        bookid: "2",
        reviewer: "John Smith",
        content: "Really long.",
        rating: 3,
      },
      {
        id: "3",
        bookid: "2",
        reviewer: "Lily Li",
        content: "Long but worth it!",
        rating: 5,
      },
    ],
  },
  {
    id: "3",
    title: "East of Eden",
    price: 15.99,
    author: "John Steinbeck",
    ISBN: "9780520281304",
    reviews: [
      {
        id: "2",
        bookid: "2",
        reviewer: "John Smith",
        content: "Loved it!",
        rating: 3,
      },
      {
        id: "5",
        bookid: "3",
        reviewer: "Noah Jackson",
        content: "Didn't really get it",
        rating: 1,
      },
    ],
  },
];

export const movies = [
  {
    id: "4",
    title: "Good Will Hunting",
    price: 14.99,
    director: "Gus Van Sant",
    duration: 126,
    reviews: [
      {
        id: "1",
        movieid: "1",
        reviewer: "Emily Nguyen",
        content: "One of the best movies ever!",
        rating: 5,
      },

      {
        id: "2",
        movieid: "1",
        reviewer: "Ethan Davis",
        content: "Always a classic",
        rating: 4,
      },
    ],
  },
  {
    id: "5",
    title: "Rushmore",
    price: 12.99,
    director: "Wes Anderson",
    duration: 93,
    reviews: [
      {
        id: "3",
        movieid: "2",
        reviewer: "Owen Smith",
        content: "Alright, but not my favorite.",
        rating: 3,
      },
      {
        id: "4",
        movieid: "2",
        reviewer: "Mia Thompson",
        content: "My ultimate comfort movie!",
        rating: 4,
      },
    ],
  },
  {
    id: "6",
    title: "Parasite",
    price: 19.99,
    director: "Bong Joon-ho",
    duration: 132,
    reviews: [
      {
        id: "5",
        movieid: "3",
        reviewer: "Elijah Williams",
        content: "Definitely one of the best I've seen!",
        rating: 5,
      },

      {
        id: "6",
        movieid: "3",
        reviewer: "Ava Green",
        content: "Too scary for me!",
        rating: 2,
      },
    ],
  },
];

export const stuff = [...books, ...movies];
