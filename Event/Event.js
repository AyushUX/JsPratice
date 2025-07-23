// Event handling in JavaScript refers to writing code that responds to user interactions like clicks, mouse movements, key presses, form submissions, etc.

// Event: Any user interaction or browser action (e.g., click, submit, keydown).
// Event Listener: A function that runs in response to an event.

// Basic Steps for Event Handling:

// 1. Select the Element: Use methods like document.getElementById() or document.querySelector() to select the HTML element you want to listen to.
// 2. Add an Event Listener: Use the addEventListener() method to attach an event listener to the selected element.
// 3. Define the Event Handler: Create a function that will be executed when the event occurs.
// 4. Remove Event Listener (Optional): You can also remove an event listener using removeEventListener() if needed.

// Step 1: Select the element
const button = document.getElementById('myButton');

// Step 2: Add an event listener
button.addEventListener('click', function(event) {
    // Step 3: Define the event handler
    alert('Button was clicked!');
});


// Event Types: Common event types include click, mouseover, keydown, submit, etc.
// Event Propagation: Events can bubble up from child elements to parent elements (bubbling) or be captured from parent to child (capturing).
// Prevent Default Behavior: You can prevent the default action of an event (like form submission) using event.preventDefault().


// Event Delegation
// Event Delegation is a technique where a single event listener is attached to a parent element to handle events for multiple child elements.
// This is efficient, especially when you have many dynamic elements (e.g., a list of items added via JS).
// Event Delegation is a technique where a single event listener is attached to a parent element to handle events for multiple child elements.
// This is efficient, especially when you have many dynamic elements (e.g., a list of items added via JS).

{/* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById("list");

  list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      console.log("Clicked:", e.target.textContent);
    }
  }); */}


// Event propagation 
//   Event propagation in the Document Object Model (DOM) describes the order in which events are handled as they travel through the DOM tree. The two primary phases of event propagation are:

// 1.Capturing Phase
// The event starts from the top-most element (document) and travels down to the target element.
// Use case - This phase is less commonly used but can be useful when you want to Stop an event before it reaches the target element.

const outer = document.getElementById("outer");
outer.addEventListener("click", () => {
  console.log("Outer DIV - Capturing");
}, true);

// 2. Bubbling Phase
// This phase occurs after the event has reached the target element.
// The event starts at the target element and then bubbles up through the DOM tree back to the root.

// Use case - This is the default phase for most event listeners and is often used for event delegation, allowing parent elements to handle events triggered by their children.

const outer = document.getElementById("outer");
outer.addEventListener("click", () => {
  console.log("Outer DIV - Bubbling");
});

// Event Listener Options:
// When you add an event listener, you can specify which phase it should handle using the capture parameter.
// capture: true: The event listener will be invoked during the capturing phase.
// capture: false (or omitted): The event listener will be invoked during the bubbling phase.

// Stopping Propagation:
// event.stopPropagation(): Prevents the event from propagating further up or down the DOM tree in the current phase.
// event.stopImmediatePropagation(): Stops the event from propagating and also prevents other listeners of the same event type on the same element from executing.


// Example of Event Handling 

{/* <body>
    <button id="myButton">Click Me!</button>
    <p id="message"></p>

    <script>
        // Select the button and message elements
        const button = document.getElementById('myButton');
        const message = document.getElementById('message');

        // Define the event handler function
        function handleClick() {
            message.textContent = 'Button was clicked!';
        }

        // Add an event listener to the button
        button.addEventListener('click', handleClick);
    </script>
</body> */}


// More examples 
// 1) Using HTML Attribute (Old Way)

// <button onclick="sayHello()">Click Me</button>

// <script>
//   function sayHello() {
//     alert("Hello from button!");
//   }
// </script>

// 2) Using DOM Property
// </script>
// <button id="myBtn">Click Me</button>
// const btn = document.getElementById("myBtn");
//   btn.onclick = function () {
//     alert("Button clicked!");
//   };
// </script>
// Simple, but you can only attach one handler per event this way.

// 3) Using addEventListener (Best Practice )

// <button id="myBtn">Click Me</button>

// <script>
//   const btn = document.getElementById("myBtn");

//   btn.addEventListener("click", function () {
//     alert("You clicked the button!");
//   });
// </script>
// Recommended: You can add multiple listeners and control bubbling/capturing.



// 4) Form Submit Handling
{/* <form id="myForm">
  <input type="text" id="name" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh
    const name = document.getElementById("name").value;
    alert("Submitted name: " + name);
  });
</script> */}
