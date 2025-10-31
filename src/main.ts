// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const bI = document.getElementById(a);
  // Get the decrement button element from the document
  const bD = document.getElementById("dec");
  // Get the reset button element from the document
  const bR = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(b);

  function updateUI(): void {
    ctr!.textContent = c.toString(); // convert number → string
    document.title = `Clicked ${c}`;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  }

  // Check if any element is missing, then exit the function
  if (!bI || !bD || !bR || !ctr) return;

  // Add click event to the increment button
  bI.addEventListener("click", () => {
    c++;
    updateUI();
  });

  // Add click event to the decrement button
  bD.addEventListener("click", () => {
    c--;
    updateUI();
  });

  // Add click event to the reset button
  bR.addEventListener("click", () => {
    c = 0;
    updateUI();
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
