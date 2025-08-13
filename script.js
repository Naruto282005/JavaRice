// Select the <h1> element by ID
const mainTitle = document.getElementById('mainTitle');
console.log("selecting h1 : ", mainTitle)

// Select all <p> elements by class name
const infoParagraphs = document.getElementsByClassName('info');
console.log("selecting the p tags: ", infoParagraphs);

// Select the first <div> using querySelector
const firstDiv = document.querySelector('div'); // Selects the first <div> encountered
console.log("selecting the first div: ", firstDiv);

// Get the parent node of the <h1>
const parentOfH1 = mainTitle.parentNode;
console.log("getting the parent node of h1: ", parentOfH1);

// Get all child nodes of the parent (including text nodes and comments)
const allChildNodes = parentOfH1.childNodes;
console.log("getting all the child of the parent: ", allChildNodes);

// Get the first child of the parent (can be a text node if there's whitespace)
const firstChildOfParent = parentOfH1.firstChild;
console.log("getting the first child: ", firstChildOfParent);

// Get the last child of the parent (can be a text node if there's whitespace)
const lastChildOfParent = parentOfH1.lastChild;
console.log("getting the last child of the parent: ", lastChildOfParent);

// Get the next sibling of the <h1> element
const nextSiblingOfH1 = mainTitle.nextSibling; // Can be a text node if there's whitespace
console.log("getting the next sibling of the h1: ", nextSiblingOfH1);

// Get the previous sibling of the <h1> element (in this case, null as it's the first child element)
const previousSiblingOfH1 = mainTitle.previousSibling; // Can be a text node if there's whitespace
console.log("getting the previos sibling of the h1: ", previousSiblingOfH1);




