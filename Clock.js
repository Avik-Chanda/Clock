var startTime= function()
{

    var today = new Date();
    var hours = today.getHours();
    var mins = checktime(today.getMinutes());
    var seconds = checktime(today.getSeconds());
    var prepand = (hours > 12 )? 'PM' : 'AM';
    hours = (hours > 12 )? hours-12 : hours;
    document.getElementById('time').innerHTML = "Time Now  " + hours+ ":" + mins + ":" + seconds + " " +  prepand ;
    setTimeout(startTime , 1000);
}

function checktime(i)
{
    return (i<10)? "0" + i : i;
}