// 1
// const freeday = "10"
// if (freeday >0 )
//     console.log ("Эерэг")
// else if (Number <0 )
//     console.log ("Сөрөг")
// else 
//     console.log ("Тэг")
    
// 2
//   const age = 15;
//   if (age < 0) {
//     console.log("Буруу нас");
//   } else if (age <= 12) {
//     console.log("Хүүхэд");
//   } else if (age <= 17) {
//     console.log("Өсвөр нас");
//   } else {
//     console.log("Насанд хүрсэн");
//   }
// 3
//      const score = 85;
//   if (score < 0 || score > 100) {
//     console.log("Буруу оноо");
//   } else if (score >= 90) {
//     console.log("A");
//   } else if (score >= 80) {
//     console.log("B");
//   } else if (score >= 70) {
//     console.log("C");
//   } else if (score >= 60) {
//     console.log("D");
//   } else {
//     console.log("F");}
// 4
// const temperature = "26"
//     if (temperature <0){
//         consol.log ("Хүйтэн")
//     }
//     else if (temperature <=20) {
//         console.log ("Сэрүүн")  
//     }
//     else if (temperature <=20) {
//          console.log ( "Дулаан")
//     }
//     else {
//     console.log("Дулаан");}
// 5
//   const a = 12;
//   const b = 14;
//   if (a > b) {
//     console.log("Эхний тоо их");
//   } else if (b > a) {
//     console.log("Хоёр дахь тоо их");
//   } else {
//     console.log("Тэнцүү");}
// 6
//   const total = 150000;
//   if (total >= 200000) {
//     console.log(total * 0.8); 
//   } else if (total >= 100000) {
//     console.log(total * 0.9); 
//   } else {
//     console.log(total); 
//   }
// 7
//  const battery = 15;
//   if (battery < 0 || battery > 100) {
//     console.log("Буруу утга");
//   } else if (battery === 0) {
//     console.log("Унтарсан");
//   } else if (battery <= 19) {
//     console.log("Цэнэг бага");
//   } else if (battery <= 99) {
//     console.log("Цэнэг хэвийн");
//   } else {
//     console.log("Бүрэн цэнэгтэй");
//   }
// 8
// const color = "улаан";
//   if (color === "улаан") {
//     console.log("Зогс");
//   } else if (color === "шар") {
//     console.log("Хүлээ");
//   } else if (color === "ногоон") {
//     console.log("Яв");
//   } else {
//     console.log("Буруу өнгө");
//   }
// 9
// const distance = 0;
//   if (distance <= 0) {
//     console.log("Буруу зай");
//   } else if (distance <= 3) {
//     console.log(3000);
//   } else if (distance <= 10) {
//     console.log(5000);
//   } else {
//     console.log(8000);
//   }
// 10
//   const secret = 5;
//   const guess = 5;
//   if (guess < secret) {
//     console.log("Илүү их тоо сонгоорой");
//   } else if (guess > secret) {
//     console.log("Илүү бага тоо сонгоорой");
//   } else {
//     console.log("Зөв таалаа!");
//   }
// 11
// const number = 35;
//   if (number % 5 === 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// 12
// const number = 7;
//   if (number % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// 13
//   const number = 15;
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// 14
//   let number = 150;
//   if (number > 100) {
//     number = 100;
//   }
//   console.log(number);
// }
 
// 15
//   let number = -25;
//   if (number < 0) {
//     number = -number;
//   }
//   console.log(number);
// 
 
// 16
//   const plateNumber = 4567;
//   const lastDigit = plateNumber % 10;
//   if (lastDigit === 1 || lastDigit === 6) {
//     console.log("Даваа");
//   } else if (lastDigit === 2 || lastDigit === 7) {
//     console.log("Мягмар");
//   } else if (lastDigit === 3 || lastDigit === 8) {
//     console.log("Лхагва");
//   } else if (lastDigit === 4 || lastDigit === 9) {
//     console.log("Пүрэв");
//   } else {
//     console.log("Баасан"); 
//   }

 
// 17
//   const day = 3;
//   switch (day) {
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     case 7:
//       console.log("Sunday");
//       break;
//     default:
//       console.log("Буруу дугаар");
// 18
//   const a = 3;
//   const b = 4;
//   const c = 5;
//   if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// 19.
//   const year = 2026;
//   if (year >= 1896 && (year - 1896) % 4 === 0) {
//     console.log("Зуны олимпийн жил");
//   } else {
//     console.log("Зуны олимпийн жил биш");
//   }
// 20
// const year = 2026;
//     const huuchin = year >=1924 && year <=1992 && (year - 1924 ) %4 ===0;
//     const shine = year >= 1994 && (year-1994 ) % 4 === 0; 
//     if (huuchin || shine ) {
//         console.log ("Өвлийн олимп жил")
//     }
//     else {
//         console.log ("Өвлийн олимпийн жил биш")
//     }
// 21
    // const month = 8; 
    // switch ( month ) {
    //     case 12:
    //     case 1 :
    //     case 2 : 
    //     console.log ("Өвөл")
    //     break; 
    //     case 3 :
    //     case 4 :
    //     case 5 :
    //     console.log ("Хавар")
    //     break;
    //     case 6 :
    //     case 7 :
    //     case 8 :
    //     console.log ("Зун")
    //     break;
    //     case 9 :
    //     case 10 :
    //     case 11 :
    //     console.log ( "Намар ")
    //     break;
    //     default:
    //         console.log ( "Буруу сарын дугаар ");
    // }
// 22
    // const fueltype = "92"
    //         liter = "10" 
    //         switch (fueltype ) {
    //         case "92":
    //         console.log ("Үнэ:" + 5500 * liter +"$")
    //         break;
    //         case "95" :
    //         console.log ( "Үнэ" + 7000 * liter + "$")
    //         break;
    //         default : 
    //         console.log ("Шатахууны төрөл буруу")
    //         };
// 23
    // const a = "1"
    //     b="2"
    //     c="3"
    // console.log (a<b && b<c ) 
// 24
    // const a ="1"
    //     b="2"
    //     c="2"
    //     console.log ( a=== b && b === c )
// 25
//   const  a = 2;
//          b = 5;
//          c = 8;
//   console.log(a > 0 && b > 0 && c > 0);
// 26 
//      const a = 2;
//          b = 4;
//          c = 8;
//   console.log(a % 2 === 0 && b % 2 === 0 && c % 2 === 0)
// 27 
//     const a = 3;
//           b = -1;
//           c = 7;
//   console.log(a < 0 || b < 0 || c < 0);
// 28
    // const number = 27;
    //      asd = Math.floor(number / 10); 
    //      das = number % 10;             
    //     console.log(asd * 10 + das);        
// 29
    // const number = 10; 
    //     asd=Math.floor (number/4) ;
    //     das = number %20; 
    //     console.log (das*asd );
// 30 
//  const year = 2000;
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("Өндөр жил");
//   } else {
//     console.log("Өндөр жил биш");
//   }
// 31 
//   const elapsed = Date.now(); 
 
//         msInSecond = 1000;
//         msInMinute = 60 * msInSecond;
//         msInHour = 60 * msInMinute;
//         msInDay = 24 * msInHour;
//         msInMonth = 30 * msInDay;   
//         msInYear = 365 * msInDay;  
//         years = Math.floor(elapsed / msInYear);
//         afterYears = elapsed % msInYear;
 
//         months = Math.floor(afterYears / msInMonth);
//         afterMonths = afterYears % msInMonth;
 
//         days = Math.floor(afterMonths / msInDay);
//         afterDays = afterMonths % msInDay;
 
//         hours = Math.floor(afterDays / msInHour);
//         afterHours = afterDays % msInHour;
 
//         minutes = Math.floor(afterHours / msInMinute);
//         afterMinutes = afterHours % msInMinute;
 
//         seconds = Math.floor(afterMinutes / msInSecond);
//         afterSeconds = afterMinutes % msInSecond;
 
//         dooli = Math.floor(afterSeconds / 10); 
//         restMs = afterSeconds % 10;
 
//   console.log(
//     `${years} жил ${months} сар ${days} өдөр ${hours} цаг ${minutes} минут ${seconds} секунд ${dooli} дооль ${restMs} мс`
//   );
// 32
//     const a = 9;
//     const b = 4;
//     const = 7;

// let jijig = a;
// if (b < jijig) {
//   jijig = b;
// }
// if (c < jijig) {
//   jijig = c;
// }
// console.log(jijig); 
// 33 
//   const a = 8;
//         b = 3;
//         c = 5;
//   console.log(Math.max(a, b, c) - Math.min(a, b, c)); 

