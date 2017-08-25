// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these
//    should be empty arrays at first

function Robot() {
	parts: [],
	capabilities: []
}

var robby = Object.create(Robot);

var cranky = Object.create(Robot);


// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must
//    also have 'fly' without adding to it directly, so this property has to be
//    shared

robby.parts = ['core'];

robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts, __);
// -> Claim the result of cranky.parts
claim(cranky.parts, __);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, __);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, __);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
