     1. What is the difference between var, let, and const?

            Ans: a. Use const by default.
                 b. Use let when you need reassignment.
                 c.  Avoid var in modern code (legacy behavior, scope issues).

    2. What is the spread operator (...)?

           Ans: The spread operator (...) expands arrays, objects, or iterables into individual   elements, making copying, merging, and passing data much easier.

    3. What is the difference between map(), filter(), and forEach()?

           Ans:  Use map() when you want to convert or transform data.
                 filter() Select elements that match a condition.
                 forEach() Execute a function for each element.
                 Does NOT return a new array
                 Used for side effects (logging, updating variables, API calls, etc.)

    4. What is an arrow function?

            Ans: An arrow function is a shorter way to write functions in JavaScript that uses => and does not have its own this.

    5.What are template literals?

            Ans: const name = "John";
                 const message = `Hello ${name}`;
                 console.log(message);

                 Template literals are often used to generate HTML.
                 const user = "John";

                 const html = `
                 <div>
                <h1>${user}</h1>
                </div>
                `;