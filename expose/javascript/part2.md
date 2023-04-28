# Part 2: A Little More of a Challenge...
1. The console will print 3 since i is a var which means it is in the function scope. The for loop will iterate 3 times since prices.length is 3, so i++ will be called 3 times so i = 3

2. The console will print 150 because discountedPrice is a var which is in the function scope. So discountedPrice will be updated with the last iteration of the for loop which sets discounted price to 150 because 300 * (1-0.5) = 150
3. The console will print 150 because finalPrice is a var so it is in the function scope. The last iteration of the for loop updates finalPrice to be Math.round(150 * 100)/ 100 which is just 150. 
4. This function will return an array [50, 100, 150] which is what the var discounted holds. Since it is in the function scope and we are appending to discounted with each iteration of the loop. It appends the discounted price for each price in prices. 
5. There will be an error at line 12 because we are trying to access the variable i which is not in the function scope but in the for loop scope so i cannot be accessed outside of the for loop therfore returning an error 
6. There will be an error at line 13 because we are trying to access the variable discountedPrice which is not in the function scope but in the for loop scope so discountedPrice cannot be accessed outside of the for loop therfore returning an error
7. The console will print 150 because the finalPrice variable was initialized in the scope of the function so finalPrice is able to be accessed in this scope. Even though finalPrice is changing in the for loop, since the variable was created outside of it, we are able to access it. So finalPrice will be the price of last item, 150.
8. This function will return an array [50, 100, 150] because discounted was created in the scope of the function so we are able to return it in the function scope. After iterating through the prices list, we append the new calculated price to discounted and we return at the end. 
9. Line 11 will cause an error because we use the let keyword to define i which means that it is in the scope of the for loop so we cannot access it outside. i wouldn't be defined here in line 11. 
10. The console will print 3 at line 12 because we set length to be a constant of prices.length which is 3. We never change length anywhere else so we wouldn't get an error before line 12. Therefore the console will print 3. 
11. The function will return an array [50, 100, 150] because we are able to push to a const array in javascript. There are no other errors in the code as we are not changing length and are re initializing discountedPrice with each iteration of the for loop. The const discountedPrice will multiply each price in the prices array with 0.5. So passing in an array of [100, 200, 300] will return an array of [50, 100, 150].
12. A. student.name  
    B. student["Grad year"]  
    C. student.greeting()  
    D. student["Favorite Teacher"].name  
    E. student.courseLoad[0]
13. A. '32' because the integer 2 maps to their exact string representation concatenating 3 and 2    making it '32'  
    B. Outputs 1 because the 3 converts to an integer and 3-2 = 1  
    C. Outputs 3 because the null is converted to an integer which is 0, 3 + 0 = 3  
    D. '3null' because the null is converted to a string so 3 concatenated with null is '3null'
    E. Outputs 4 because true converts to integer 1 and 1 + 3 is 4.  
    F. Outputs 0 because false maps to 0 and null also maps to 0 so 0 + 0 = 0  
    G. Outputs '3undefined' because undefined is converted to a string which gets concatenated with the 3 making it '3undefined'  
    H. Outputs NaN because undefined is not a number but '3' is converted to integer 3. So 3 - NaN would result in NaN.
14. A. '2' > 1 outputs true because '2' gets converteed to integer 2 which is greater than 1  
    B. Outputs false because it compares '2' and '12' lexigraphically since by each character. Since the first character compares 2 and 1, 2 is greater than 1 lexigraphically so it returns false.  
    C. Outputs true because the '2' gets converted to integer 2 so 2 == 2 which is true  
    D. Outputs false because === is a strict equality check so it does not convert the '2' into an integer so we are comparing an integer to a string which is false.  
    E. Outputs false because the true gets mapped to a 1 and 1 is not equal to 2 so it returns false  
    F. Outputs true because 2 is a truth value which the Boolean() operation converts it to. So true == true is true
15. == is a non-strict comparison which implicitly converts the datatypes to compare while === is a strict comparison without type conversion
16. part2-question16.js  
17. The result of modifyArray([1,2,3], doSomething) would be an array of [2, 4, 6] as our inputs are an array and a callback function to modifyArray. ModifyArray takes the original elements of the input and calls the callback function on each element. Here the callback function is doSomethinng so for each element in the input array, it will push double of that element into the new array which is returned at the end of the loop.  
18. part2-question18.js
19. The code will ouput 1 4 3 2 which will all print on differnt lines. This is because we call console.log(1) is called first so it prints 1. Then a setTimeout is called on console.log(2) with a delay of 1 second. Then another setTimeout occurrs with no delay however, console.log(3) will run as soon as the rest of the code finishes running making console.log(4) printing first. So the output will be 1 4 3 2
    