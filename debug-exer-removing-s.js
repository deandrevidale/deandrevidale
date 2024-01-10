function removeAllS(str) {
    for (let i = 0; i < str.length; i++) {
        // console.log("==== START NEXT FOR LOOP ITERATION ====");
        // console.log("index", i);
        // console.log("element:", str[i]);
      // If the character at the ith position of the string is "s"
      if (str[i] == "s") {
        // Delete the character in the string by:
        // Setting the string to the substring from the 0th position to the i - 1
        // position concatenated with the substring from the i + 1 position to
        // the end of the string
       // console.log("str before removal:", str);
        let firstSubStr = str.substring(0, i);
        let secondSubStr = str.substring(i + 1, str.length);
        str = firstSubStr + secondSubStr;
       // console.log("str after removal:", str);
        i--;
      }
    }
    return str;
  }

 console.log(removeAllS("discussing"));