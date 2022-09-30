console.log("========TASK 2========")
let name = "Yazib";
let messege = "Hello Yazib, would you like to learn some Python today?"

console.log(name)
console.log(messege);


console.log("========TASK 3========")
name = "Yazib";
console.log(name.toUpperCase())
console.log(name.toLowerCase())
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("hello pumpkin pumpkin you my hello honey bunny!"));

console.log("==================TASK 4==================")
let author_qoutes = `"Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."
                        Autoher : Abdul Kalam`

console.log(author_qoutes)

console.log("==================TASK 5==================")

let famous_person=`"Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."
Autoher : Abdul Kalam`

let my_msg="He was great Author";


console.log("==========================Task 6====================");
let name2= "Muhammad \n Yazib"
console.log(name2)

name2="Muhammad \t Yazib";
console.log(name2);

console.log("==========================Task 7====================");
let add=4+4;
let sub=16-8;
let mul=4*2;
let division=16/2;

console.log(`Add ${add} || Sub ${sub} || Mul ${mul} || division ${division}`);

console.log("==========================Task 8====================");
console.log("\n\n"+(5+3)+"\n\n");

console.log("==========================Task 9====================");

let fav_num=12;
let fav_mes=`My favourite is ${fav_num}`;

console.log(fav_mes);

console.log("==========================Task 10====================");
// I have made BODMAS rule in this code.

/* let add=4+4;
let sub=16-8;
let mul=4*2;
let division=16/2;

console.log(`Add ${add} || Sub ${sub} || Mul ${mul} || division ${division}`); */

console.log("==========================Task 11====================");
let frnds_name=["yazib","Ameen","Bilal","Muzammil"]
console.log(frnds_name[0])
console.log(frnds_name[1])
console.log(frnds_name[2])
console.log(frnds_name[3])

console.log("==========================Task 12====================");
console.log(`Hello ${frnds_name[0]}`)
console.log(`Hello ${frnds_name[1]}`)
console.log(`Hello ${frnds_name[2]}`)
console.log(`Hello ${frnds_name[3]}`)

console.log("==========================Task 13====================");
let transportation=["I love to travel with my car", "I also like Bike" , "Sometime I would love to travel on busses"];
console.log(transportation[0])
console.log(transportation[1])
console.log(transportation[2])



console.log("==========================Task 14====================");
let invitation=["Ameen","Bilal","Muzammil"]
for (i of invitation){
    console.log(`Hello Mrs ${i} You are invited on Dinner.`)
}

console.log("==========================Task 15====================");
console.log(`${invitation} can't come on dinner`);
invitation[2]="Ali";
console.log(`Hello ${invitation[2]} you are invited on dinner`);

console.log("==========================Task 16====================");
invitation.push("Sir Zia","Sir Daniyal","Sir Adil");
for (i of invitation[3]){
    console.log(`Hello Mrs ${i} You are also invited on Dinner.`)
}

invitation.unshift("Sir Zeshan");
console.log(invitation);
console.log(invitation[0]);
invitation.splice(4,0,"Hassan");
invitation.push("Miss Hira");

for (i of invitation){
    console.log(`Hello Mrs ${i} You are also invited on Dinner.`)
}

console.log("==========================Task 17====================");
console.log(" I can invite Only Two peoples For Dinner");
for (i of invitation.slice(0,2)){
    console.log(`Hello Mrs ${i} You are also invited on Dinner.`)
}

console.log("==========================Task 18====================");
for (not_invited of invitation.slice(2,invitation.length)){
    console.log(`Sorry Yoy are not invited for Dinner ${not_invited}`)
    invitation.pop()
}
console.log(invitation);

for (invited of invitation){
    console.log(`You are still invited for Dinner ${invited}`)
    
}
for(i of invitation.slice(0,invitation.length)){
    invitation.pop()
}

console.log(invitation)

console.log("=======================TASK 18=======================")
let places=["Saudi Arabia","America","Dubai","China","Turkey"];
console.log(places)
let a=places.sort()
console.log(a)
places=["Saudi Arabia","America","Dubai","China","Turkey"];
console.log(places)

places=["Saudi Arabia","America","Dubai","China","Turkey"];
console.log(places.reverse())

// places=["Saudi Arabia","America","Dubai","China","Turkey"];
console.log(places.reverse())

a=places.sort()
console.log(a)
console.log(places.reverse())

console.log("=======================TASK 19=======================")
invitation=["Ameen","Bilal","Muzammil"]
console.log(`I'm Inviting ${invitation.length} Guest !`);

console.log("=======================TASK 20=======================")

let list_of_places=["karchi","Islambad","America","India","Pakistan"];


console.log("=======================TASK 21=======================");
let obj={
    pakistan:["Karachi","Islmabad","Lahore"],
    America:["New York","	Los Angeles","Chicago"],
    india:["Delhi","Mumbai","Bangloru"]

}
console.log("=======================TASK 22=======================");
console.log(list_of_places[5])
list_of_places[5]="Australia"
console.log(list_of_places[5])

console.log("=======================TASK 23=======================");
let car="Audi";
console.log(car==="Audi");
console.log(car==="Mehran");

 name="Yazib";
console.log(name==="Ali")
console.log(name==="Yazib")

console.log("=======================TASK 24=======================");

name="Ali";
console.log(name==="Yazib")
console.log(name==="Ali");

a="basit";
console.log(a==="Basit".toLowerCase())

console.log(1<2);
console.log(1>2);

console.log(2<=4);
console.log(2>=4);

console.log(2>=1 | 3<=2);
console.log(2>=1 & 3<=2);

let arr=["Ali","Owais"];
console.log("Owais" in arr);


console.log("=======================TASK 25=======================");

let alien_color="green";
if (alien_color="green"){
    console.log("earned 5 points.")
}

if(alien_color != "green"){
    console.log("The version that fails will have no output.")
}

console.log("=======================TASK 26=======================");
if (alien_color="green"){
    console.log("earned 5 points.")
}

else{
    console.log("You have earned 10 points")
}

console.log("=======================TASK 27=======================");
if (alien_color="green"){
    console.log("earned 5 points.")
}
else if (alien_color="yellow"){
    console.log("earned 10 points.")
}
else if (alien_color="red"){
    console.log("earned 15 points.")
}

else{
    console.log("wrong")
}

console.log("=======================TASK 28=======================");
let person=14;
if(person <= 2){
    console.log("the person is a baby.")
}
else if(person>=2 && person < 4 ){
    console.log("person is a toddler.")
}
else if(person>=4 && person <= 13 ){
    console.log("the person is a kid.")
}
else if(person>=13 && person < 20){
    console.log("the person is a teenager.")
}
else if(person>=20 && person < 65){
    console.log("the person is an adult.")
}
else if(person>=2 && person < 4){
    console.log("the person is an elder.")
}

console.log("=======================TASK 29=======================");

let fav_fruits=["Banana","Mango","Apple"];
for(i of fav_fruits){
    if(i==="Banana"){
        console.log(`You really like ${i}`)
    }
    else if(i==="Mango"){
        console.log(`You really like ${i}`)
    }
    else if(i==="Apple"){
        console.log(`You really like ${i}`)
    }
    else{
        console.log("Not here");
    }
}

console.log("=======================TASK 30=======================");

let username=["Admin","Yazib","Hassan","Amir","Subhan"];
for(user of username){
    if(user==="Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}

console.log("=======================TASK 31=======================");
for(user of username.splice(0,username.length)){
    username.pop();
}
console.log(username);

console.log("=======================TASK 32=======================");
current_users=["Admin","Yazib","Hassan","Amir","Subhan"];
users=["Yazib","Ali","Amir","Daniyal","Subhan"];

for (i of current_users){
    for(j of users){
        if (i===j){
            console.log(`${j} This user is Available! `)
            break;
        }
        else{
            console.log("Not Available");
        }
    }
}

console.log("=======================TASK 33=======================");
let num=[1,2,3,4,5,6,7,8,9,10]
for (i of num){
    if(i===1){
        console.log(`${i}st`)
    }
    else if(i===2){
        console.log(`${i}nd`)
    }
    else if(i===3){
        console.log(`${i}rd`)
    }
    else{
        console.log(`${i}th`)
    }
}

console.log("=======================TASK 34=======================");
let fav_pizza=["Bar BQ","Arabic","cheezy"];
for(i of fav_pizza){
    console.log(`I like this Flavour ${i}`);
}
console.log(" I really love pizza!");

console.log("=========================40================")
function make_album(album){
    data={
        album_data1:{
            id:1,
            name:"Arjit Singh",
            song:"great"
        },
        album_data2:{
            id:2,
            name:"Atif Aslam",
            song:"great"
        }
    }

    data.album3=album;

    return data;
}

a=make_album({id:2,
    name:"Fateh Ali khan",
    song:"great"})

    console.log(a)


    console.log("=========================41================")
    let magicians_names=["Ali","Owais","Bilal"];
    show_magicians=()=>{
        magicians_names.forEach(number => console.log(number));
    }
    show_magicians()




















