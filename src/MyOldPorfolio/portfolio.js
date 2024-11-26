var typed = new Typed('.text', {
	strings: ['Frontend Developer!', 'Responsive Web Developer!', 'Web Developer!'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 2000,
	loop: true
});

const date = new Date();
const day = date.getDate() + 1;
const month = date.getMonth() + 1;
const year = date.getFullYear();

const dateArr = [day, month, year].join("-");
console.log(dateArr);


if (dateArr === "11-4-2024" || dateArr === "12-4-2024" || dateArr === "13-4-2024") {
    const promptBox = prompt("Enter Your Name", "");
    alert(`Assalamu Alikum ${promptBox}, Happy Eid Mumarak!!!`);
};


const daysOfTheWeek = ["Sunday", "Monday", "Tuesdy", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayIndex = date.getDay();
const dayName = daysOfTheWeek[dayIndex];

if (dayName === "Friday") {
    alert("Happy Jumaah Mubarak!");
}; 


