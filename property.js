


/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var machine = {
        motors: null
    };

    var vehicle = {};

    var robot = {};

    // -> Let's make machine the prototype of robot and vehicle
    vehicle.__proto__ = machine;
    robot.__proto__ = machine;

    claim(machine.motors, null);
    claim(robot.motors, null);
    claim(vehicle.motors, null);

    robot.motors = 4;

    claim(machine.motors, null);
    claim(robot.motors, 4);
    claim(vehicle.motors, null);

    module.exports = {
        machine: machine,
        vehicle: vehicle,
        robot:   robot
    }

────────────────────────────────────────────────────────────────────────────────

040 Property assignments
 Exercise 4 of 10


# Property Assignments

What happens if you update a property that already exists in the prototype? Let's see:

    var alien = {
        kind: 'alien'
    };

    var zippy = {};
    zippy.__proto__ = alien;

    zippy.kind = 'zippy';

    console.log(zippy.kind); //=> 'zippy'
    // zippy now has a 'kind' property

    console.log(alien.kind); //=> 'alien'
    // alien has not being modified

New/updated properties are assigned to the object, not to the prototype.
Note that the property kind now exists in both alien and zippy.

## Challenge

Follow the instructions in the boilerplate file created.
A file 040.js with the necessary boilerplate has been created for you.


 » To print these instructions again, run: planetproto print
 » To execute your program in a test environment, run: planetproto run program.js
 » To verify your program, run: planetproto verify program.js
 » For help run: planetproto help

*/
