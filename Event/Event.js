// In JavaScript, events are occurrences or happenings that take place in the browser or in the environment where your JavaScript code is running. Events can be triggered by user interactions, like clicks or keypresses, by the browser, like page loading or resizing, or by other parts of your code, like custom events you create.


// Here are some key concepts related to events in JavaScript:

// 1. Event Handling: Event handling involves responding to events when they occur. You can attach event handlers to elements or objects to specify what should happen when a particular event occurs.

// 2. Event Listener: An event listener is a function that listens for a specific type of event on a particular element or object. When the event occurs, the listener is triggered, and its associated code is executed.

// 3. Event Types: There are many types of events in JavaScript, including:
// User Interface Events: Such as click, mouseover, mouseout, keydown, keyup, etc.
// Document Events: Such as load, DOMContentLoaded, resize, scroll, etc.
// Form Events: Such as submit, change, input, etc.
// Custom Events: You can also create and dispatch custom events using the CustomEvent constructor.

// 4. Event Propagation: When an event occurs on a particular element, it can propagate or bubble up through its ancestors in the DOM tree, triggering event listeners on those elements as well. Event propagation can occur in two phases: capturing phase and bubbling phase.

// 5. Event Object: When an event occurs, an event object is created that contains information about the event, such as the type of event, the target element, and any additional data associated with the event.

// 6. Preventing Default Behavior: Some events have default behaviors associated with them, such as form submission or link navigation. You can prevent the default behavior from occurring by calling the preventDefault() method on the event object.


<Button id='click me'></Button>

document.getElementById('Click me')

.addEventListener('click', function (){
    console.log('Button Clicked');
})




// Event Propagation:
// Event propagation is the mechanism by which events propagate through the DOM tree, either from the outermost ancestors down to the target element (event capturing) or from the target element up to the outermost ancestors (event bubbling).There are three phases of event propagation:

// Event Bubbling: Bottom to Top
// Event bubbling is the process where an event triggered on the innermost element is first captured by the innermost element and then propagated to its outer ancestors in the DOM hierarchy. This means that after the event is handled by the target element, it moves up the DOM tree, triggering any event handlers attached to its parent elements, and so on up to the root element (usually <html>).For example, consider a structure where you have a <div> inside another <div>, and both have click event handlers attached. If you click on the inner <div>, the event will first be handled by the inner <div>'s handler, then the outer <div>'s handler (if it has one).
<body>

{/* <div id="outer" style="padding: 20px; border: 1px solid black;">
  Outer Div
  <div id="inner" style="padding: 20px; border: 1px solid red;">
    Inner Div
  </div>
</div> */}

<script>
  {/* document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked');
  });

  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked');
  }); */}
</script>
</body>
// In this example, if you click on the inner <div>, both "Inner div clicked" and "Outer div clicked" will be logged, demonstrating event bubbling.

// Event capturing - Top to Bottom 
// Event capturing is the phase of event propagation in which events are captured by the outermost ancestor element first and then propagated down to the target element. This is the opposite of event bubbling, where events start at the target element and bubble up to the outermost ancestor.
element.addEventListener(eventType, handlerFunction, true);


// In event capturing, when an event occurs on a target element, the event starts at the highest level ancestor (usually the <html> element) and then moves down through the DOM hierarchy until it reaches the target element. Along the way, each ancestor element has the opportunity to handle the event before it reaches the target element.
<body>

<div id="outer" style="padding: 20px; border: 1px solid black;">
  Outer Div
  <div id="inner" style="padding: 20px; border: 1px solid red;">
    Inner Div
  </div>
</div>

<script>
  {/* document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked (capturing)');
  }, true); // Setting useCapture to true for event capturing

  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked');
  }); */}
</script>

</body>
// In this example, if you click on the inner <div>, "Outer div clicked (capturing)" will be logged before "Inner div clicked", demonstrating event capturing.

