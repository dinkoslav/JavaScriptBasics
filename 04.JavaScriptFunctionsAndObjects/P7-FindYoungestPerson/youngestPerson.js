function findYoungestPerson(persons){
    var youngest = {};
    var age = Number.MAX_VALUE;
    for(var person in persons){
        if(parseInt(persons[person].age) < age){
            youngest = persons[person];
            age = parseInt(persons[person].age);
        }
    }
    console.log("The youngest person is " + youngest.firstname + " " + youngest.lastname);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);