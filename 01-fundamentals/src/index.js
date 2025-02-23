import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS File - always provide path for local assets
import "./index.css";

// Component using regular html
const Greeting = () => {
  return (
    <div className="full">
      <h1>My First React Component</h1>
      <h2>Sub header - JSX Rules</h2>
      <ul>
        <li>Test 1</li>
        <li>Test 2</li>
      </ul>
      {/* Nesting Components here */}
      <Person />
      <Message />
    </div>
  );
};

// Create Element function
const GreetingCreateElement = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      "My First React Component - Using Create Element Function"
    )
  );
};

// Use Nesting Component
const Person = () => <h2>Tegveer Singh</h2>;
const Message = () => {
  return <h3>Completing React Course on Udemy</h3>;
};

// Setup variables to be used as props
const title = "Book Title";
const author = "Author Name";
const imageUrl = "./images/Tomorrowland 1.jpg";

// Adding another book related data
const firstBook = {
  author: "Belgium 2023",
  title: "Adscendo",
  imageUrl: "./images/Tomorrowland 1.jpg",
};
const secondBook = {
  author: "Brazil 2023",
  title: "The reflection of love",
  imageUrl: "./images/Tomorrowland 2.jpg",
};
const thirdBook = {
  author: "Belgium 2025",
  title: "Orbyz",
  imageUrl: "./images/Tomorrowland 3.jpg",
};

// Use List - The most common way of rendering data in React
const books = [
  {
    author: "Belgium 2023",
    title: "Adscendo",
    imageUrl: "./images/Tomorrowland 1.jpg",
    id: 1, 
  },
  {
    author: "Brazil 2023",
    title: "The reflection of love",
    imageUrl: "./images/Tomorrowland 2.jpg",
    id: 2,
  },
  {
    author: "Belgium 2025",
    title: "Orbyz",
    imageUrl: "./images/Tomorrowland 3.jpg",
    id: 3
  },
];

// Book List application
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.imageUrl}
      >
        {/* Any tags in here will be part of children prop */}
        <p>
          Testing Data - Wont be displayed until children prop is accessed
          inside the Book component
        </p>
        <button>Submit</button>
      </Book>
      {/* In case a prop is not provided here, it will not render anything - nor will it show an error unless another subproperty is accessed through the unavailable property */}
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.imageUrl}
      />
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        image={thirdBook.imageUrl}
      />
    </section>
  );
};

const BookListUpdate = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // Can use index provided in map method as key prop but can only be used if index is not going to change - wont work if we are adding/deleting elements from the array
        const { imageUrl, title, author, id } = book;
        // Cannot directly return {book} here - will lead to error
        return (
          // OPTION 1 - No Destructuring
          // <Book title={book.title} author={book.author} image={book.imageUrl} />
          // OPTION 2 - Destructed Values
          // Without Key Prop, the Books iterated will show error in console - Each child in list should have unique key prop
          <Book title={title} author={author} image={imageUrl} key={index} />
        );
      })}
    </section>
  );
};

// Passing the entire object
const BookListUpdate2 = () => {
  return (
    <section className="booklist">
      {
        books.map((book, index) => {
          return <Book book={book} key={index} />
        })
      }

    </section>
  )
}


// Passing all attributes with spread operator
const BookListUpdate3 = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <BookB {...book} key={index} />;
      })}
    </section>
  );
};

const BookB = ({imageUrl, title, author}) => {
  return (
    <article className="book">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const names = ["Anyma", "Artbat", "Illenium"];

const NameDisplay = () => {
  const namesWrapped = names.map((name) => {
    console.log(name);
    return <h1>{name}</h1>;
  });
  // Can be return directly as JSX
  return <section>{namesWrapped}</section>;
};

const BookHierarchy = () => {
  return (
    <article className="book">
      <ImageLocal />
      <Title />
      <Author />
    </article>
  );
};

// Object destructuring in Parameter
const BookA = ({ imageUrl, title, author, children }) => {
  console.log("Children Prop Tags: ", children);
  return (
    <article className="book">
      <img src={imageUrl} alt="Tomorrowland Image" />
      <h2>{title}</h2>
      {/* Can use JavaScript methods here after curly braces */}
      <h4>{author}</h4>
      {/* Calling children as JS below will display the children tags if they are available */}
      {children}
    </article>
  );
};


// Book object corresponding to Update 2 - Object destructuring
const Book = ({ book: {imageUrl, title, author }}) => {
  return <article className="book">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>
};

// Implicit return
const ImagePublic = () => (
  <img
    src="https://www.perfectdaysomewhere.com/wp-content/uploads/2023/09/IMG_8932.jpg"
    alt="Tomorrowland 1"
  />
);

const ImageLocal = () => {
  return <img src="./images/Tomorrowland 1.jpg" alt="Tomorrowland Image 1" />;
};

const Title = () => <h2>Book Title</h2>;

const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Author Name</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookListUpdate3 />);
