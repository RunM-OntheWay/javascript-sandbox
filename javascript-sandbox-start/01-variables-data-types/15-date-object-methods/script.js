let x;
let d = new Date();

x = d.toString();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth()+1;

x = d.getDate();
x = d.getDay();

x = Intl.DateTimeFormat('default', {month:'long'}).format(d);

x= d.toLocaleString('default',{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'default',
}

);


console.log(x);
