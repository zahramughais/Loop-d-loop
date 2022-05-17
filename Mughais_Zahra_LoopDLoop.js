//How do we know we need a loop here? 
//we have a repeated process gving candy every 2 miles and stoping at 6 
// What's the starting point of the loop?
// mile 0
// When should the loop stop?
//mile 6
// How will it know to stop?
//by adding the condition
// What's the incrementing for each iteration of the loop?
// +=2
// What variables do we need?
// mile , 
var mile = 0;
while (mile <= 6){
    if (mile !=0 && mile % 2 == 0){
        console.log('candy');
    } else {
        console.log(mile);
    }
    mile++;
}
//Create a new loop where the runner only gets a piece of candy at 
//every 2 miles AND if they were going move than 5.5 miles per hour.
var mile=0;
function runForCandy(speed){
    if (speed >= 5.5){
        while (mile <= 6){
            if (mile !=0 && mile % 2 == 0){
                console.log('candy');
            } else {
                console.log(mile);
            }
            mile++;
        }
    } else {
        mile++;
    }
}