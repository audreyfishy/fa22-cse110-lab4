1. The function prints 3 because the length of the array is 3.
2. The function prints 150 because the last element of the array is 300 and (1 - discount) is 0.5. 300 * 0.5 = 150. Moreover, variables declained with `var` can be asscessed outside the function.
3. The function prints 150 because Math.round(150 * 100) / 100 = 150.
4. It returns [50, 100, 150] because the function is called 3 times and the array is updated each time.
5. It cases an error because `i` can only be accessed outside of the loop.
6. It causes an error because `discountedPrice` can not be accessed.
7. It returns 150 since finalPrice can be accessed when returned.
8. It returns [50, 100, 150] because the function is called 3 times and the array is updated each time.
9. It cases an error because `i` can only be accessed outside of the loop.
10. It prints 3 because the length of the array is 3.
11. It returns [50, 100, 150] becase even if `discounted` is declared with `const`, elements of the array is still mutable. 
12. - A. student.name
    - B. student["Grad Year"]
    - C. student.greeting()
    - D. student["Favorite Teacher"].name
    - E. student.courseLoad[0])
13. - A. 32 
    - B. 1 
    - C. 3 
    - D. 3null 
    - E. 4 
    - F. 0 
    - G. 3undefined 
    - H. NaN
14. - A. true 
    - B. false 
    - C. true 
    - D. false 
    - E. false 
    - F. true
15. `==` checks if two values are equal while `===` checks if two values are equal and have the same type.
16. ```
    for(const property in statistics){
      if(property.charAt(0) == 'r' || statistics[property] % 2 == 1){
        console.log(statistics[property]);
      }
    }
    ```
17. The function returns [2, 4, 6] because the array is updated each time the function is called with a callback function, doSomething.
18. [This file](part2-question18.js)
19. ```
    1
    4
    3
    2
    ```