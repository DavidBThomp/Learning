function sayGreeting(greeting = 'Good morning', name = 'student') { //you can define arguments in parameters
    return(`${greeting}, ${name}!`);
}

sayGreeting(undefined, 'Brendan');
// Undefined will use default parameter assigned