var opr = prompt('Choose a calculation you want to perform: + - / *');
var num_1 = parseInt(prompt('Number 1: '));
var num_2 = parseInt(prompt('Number 2: '));

if(opr == '+')
{
    console.log(num_1 + num_2)
    alert(num_1 + num_2)
}

else if(opr == '-')
{
    console.log(num_1 - num_2)
    alert(num_1 - num_2)
}

else if(opr == '*')
{
    console.log(num_1 * num_2)
    alert(num_1 * num_2)
}

else if(opr == '/')
{
    console.log(num_1 / num_2)
    alert(num_1 / num_2)
}

else
{
    alert('Invalid operator')
}
