# Arseniy Shabanov

#### Junior Frontend Developer

***

### _Contact Information_
* **Email** arseniy.shabanov.18@gmail.com
*  **Phone** +375-29-342-08-99
*  **Date of birth** 10.04.2002
*  **Nationality** Belarusian
*  [VK](https://vk.com/idcenechka)


***

### _Objective_

My name is Arseniy, I'm studying to be a translator in Minsk. In addition to studying at the institute, I'm studying to become a frontend developer. I like site development very much. Also a knowledge of languages will help me in this. I started to learn frontend development in summer 2021. I have big plans and a lot of motivation to learn.


***
### _Education_
* **Secondary Education**
     * School N82-(2008-2019)
* **Higher Education**
    * Institute of Entrepreneurial Activity-(Minsk - 2019-2024)
    * Interpreter

***

### _Skills_
* LeaderShip Teamwork
* Keen atantion to detail
* Excellent verbal and written communication
* Business development
* HTML5, CSS3
* JavaScript Bacis
* Git, GitHub
* VS Code

***
### _Laguage_
* English  - B1
* French - A2
* Belarusian - Native
* Russian - Native

***
### _Code Exapmle_

Your job is to figure out the index of which vowel is missing from a given string:

* A has an index of 0,
* E has an index of 1,
* I has an index of 2,
* O has an index of 3,
* U has an index of 4.
  
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

```
function absentVowel(x) {
  var vowels = 'aeiou';
  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
     }
    }
  }
  ```