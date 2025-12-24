//Reference: https://www.freecodecamp.org/news/javascript-in-the-browser-dom-and-events/#what-is-the-document-object-model-dom

// console.log(window);
// When we run node bom-dom.js we get error like window is not defined. because node js is not a browser, so window is not avialable node js.
// BOM and DOM are browser specific objects, they are not available in node js environment.
// We can use window, document, alert, location, DOM/BOM APIs in browser only.
// Create a HTML file and include this file to run the above code successfully in browser.
// or run HTML file and go to dev tools console to access DOM/BOM objects.
// BOM proerties and Methods are different from browser to browser.

// BROWSER
// BOM - The Browser Object Model is like a set of tools provided by the browser itself. It's not part of the official DOM specification, but it's specific to web browsers. As a result, the objects and methods available in the BOM may vary between different browsers.
// The BOM provides JavaScript access to browser-specific things like the browser's history, location, and browser window itself.
console.log(window.self); // window.self refers to the window itself
console.log(window.document);
console.log(window.location);
console.log(window.navigator);
console.log(window.history);
console.log(window.screen);

// We can directly access these objects without writing window prefix.
// Because window is the global object in browser env and is the top-level object in JavaScript.
// console.log(document);
// console.log(location);
// console.log(localStorage);
// console.log(navigation);
// console.log(alert());
// console.log(prompt());
// console.log(confirm());
console.log(name);
// Logs empty string, name is also a property of window object.
console.log(chrome);
// it will give chrome related APIs and properties in chrome browser.
// if it is not installed it will give undefined.
console.log(chrome.history);

// LOCATION
console.log(location.href); // http://127.0.0.1:5500/bom-dom/bom-dom.html
console.log(location.host); // 127.0.0.1:5500
console.log(location.hostname); // 127.0.0.1
console.log(location.history); // undefined
console.log(location.origin); // http://127.0.0.1:5500
console.log(location.pathname); // /bom-dom/bom-dom.html
console.log(location.port); // 5500
console.log(location.protocol); // http:
// location.reload(); // reloads the current page
// location.replace("https://www.google.com"); // replaces the current document with the one at the provided URL

// DOCUMENT
// DOM - The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page, allowing interaction with its elements using programming languages like JavaScript.
// You use document object to access and manipulate different parts of the HTML document. Elements within the DOM can be accessed using properties and methods of this object.

// Accessing the document's title
console.log(document.title);
// Changing the document's title
document.title = "changed Title";
// Accessing the document's body
console.log(document.body);
// Changing background color of body element using inline CSS
document.body.style.backgroundColor = "red";

console.log(document.documentElement); // Selects the root element of the DOM tree, that is <html>.
console.log(document.head);
console.log(document.body);
console.log(document.name);
console.log(document.doctype);
console.log(document.URL);
console.log(document.baseURI);
console.log(document.characterSet);
console.log(document.children);
console.log(document.childElementCount);
console.log(document.childNodes);
console.log(document.contentType);
console.log(document.documentURI);
console.log(document.firstChild);
console.log(document.firstElementChild);
console.log(document.fonts);
console.log(document.forms);
console.log(document.fullscreenElement);
console.log(document.fullscreenEnabled);

// READ / QUERY
console.log(document.getAnimations()); // returns array of active animations on the page
// output [], [Animation, Animation].
// Used for Debugging animations, Pausing / controlling animations
console.log(document.getElementById("app"));
// returns html element or null
// Returns ONLY the first match
// Duplicate IDs = bugs
console.log(document.getElementsByClassName("box"));
// returns html list/collection (live)
// HTMLCollection(2) [div.box, div.box]
// Live means: DOM updates → collection updates automatically

console.log(document.getElementsByName("email"));
// return nodes list, mostly useful in forms <input name="email" />
console.log(document.getElementsByTagName("div"));
//returns HTML collection

console.log(
  document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg")
);
// document.getElementsByTagNameNS(namespace, tag)
// Used for SVG / XML (Rare in React apps)

// EVENTS
document.addEventListener("click", () => console.log("clicked")); // undefined
// clicking anywhere in the screen logs "clicked"
// addEventListener never returns anything (by design)

// DOM MUTATION APIs
console.log(document.append()); // undefined
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
// Append the element to the document body and log the result
// document.body is a common element to append to in the body of an HTML document
console.log(document.body.append(newParagraph));
//document.append(node1, node2);
// Can append multiple nodes
// Can append strings
// Newer API
console.log(document.appendChild);
// document.appendChild(node);
// Appends only one node
// Returns the appended node
// Older API

// DOCUMENT STREAM (LEGACY)
console.log(document.open()); // opens a document stream for writing
console.log(document.write("<h1>Hello World</h1>")); // writes HTML expressions or JavaScript code to a document
console.log(document.close()); // closes a document stream opened by document.open()
// open(), write(), close() Avoid in modern apps — can wipe the DOM.
// returns undefined

//DOM CHECK
console.log(document.contains(document.head)); // true
// accepts a node and returns true/false
console.log(document.hasFocus()); // true
// returns true/false

// CREATE NODES
console.log(document.createAttribute("class"));
// output: Attr { name: "class", value: "" }
console.log(document.createComment("")); // creates <!-- -->
console.log(document.createComment("hello")); // creates <!--hello-->
console.log(document.createElement("div")); // creates<div></div>
console.log(document.createTextNode("Hello world"));
// output "Hello world" (Text node)

// LEGACY
console.log(document.createEvent);
const ev = document.createEvent("Event");
ev.initEvent("click", true, true);
// 🚫 Old API
// ✅ Modern replacement: new Event("click");

// querySelector
document.querySelector("#app");
document.querySelector(".box");
document.querySelector("div");
// returns first matching element or null
document.querySelectorAll(".box");
// returns nodelist NodeList(2)
// not live, supports forEach

// remove()
let element = document.getElementsByClassName("box");
console.log(element.remove);
// Removes node from DOM.

//replaceWith()
// console.log("div".replaceWith("header"));

//classList
let el = document.querySelector("#title");
console.log(
  el.classList.add("active"),
  el.classList.remove("active"),
  el.classList.toggle("active")
);
el.dataset.userId = "123";

//dataset
console.log(
  "matches() - Checks if element contains CSS selector:",
  el.matches("[data-user-id]")
);
// Maps to:data-user-id="123"

// DOM API categories
// | Category | APIs                          |
// | -------- | ----------------------------- |
// | Query    | getElementById, querySelector |
// | Create   | createElement, createTextNode |
// | Mutate   | append, remove                |
// | Events   | addEventListener              |
// | Inspect  | contains                      |
// | Legacy   | createEvent, document.write   |

// To determine node type
// 1 is for element, 2 is for attributes, 3 is for text nodes, 8 is for comment, 9 is for document.
const elementt = document.createElement("div");
console.log("NodeType:", elementt.nodeType);
