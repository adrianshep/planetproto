


/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var Robot = {
        new: function () {
            return Object.create(this);
        }
    }

    module.exports = {
        Robot: Robot
    }
────────────────────────────────────────────────────────────────────────────────


070 Dot New
 Exercise 7 of 10


## Our own 'new'

At this stage we know enough to do amazing things with JavaScript objects.

## Challenge

  * Define an object called `Robot`
  * Define a method called `new` in `Robot`
  * When `Robot.new` is called it should return a new object with the prototype
  set to `Robot` e.g.:

    var robby = Robot.new();
    // Robot should be the prototype of robby

## Boilerplate

Follow the instructions in the boilerplate file created.
A file 070.js with the necessary boilerplate has been created for you.


 » To print these instructions again, run: planetproto print
 » To execute your program in a test environment, run: planetproto run program.js
 » To verify your program, run: planetproto verify program.js
 » For help run: planetproto help

*/
