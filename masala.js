// // var longestPalindrome = function (s) {
// //   let count = 0;
// //   let newstr = s.split("").sort().join("");
// //   for (let i = 0; i < newstr.length; i++) {
// //     if (newstr[i] == newstr[i + 1]) {
// //       count += 2;
// //       i++;
// //     }
// //   }
// //   count += 1;
// //   return console.log(count);
// // };
// // longestPalindrome("abbdc");
// var wordPattern = function (pattern, s) {
//   let newstr = "";
//   let newS = s.split(" ");

//   let newChangedS = [];
//   for (let i = 0; i < pattern.length; i++) {
//     if (!newstr.includes(pattern[i])) {
//       newstr += pattern[i];

//       newS[i] = pattern[i];
//     } else {
//     }
//   }

//   console.log(newS);
// };
// wordPattern("abba", "dog cat cat dog");
