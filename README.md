# _Beep Boop Epicodus Independent Project_

[Link to Demo site](https://dustatron.github.io/epicodus-beep-boop-Independent-project/)

#### _This app will take numbers 1, 2, and 3 from a list of numbers and replace them with Beeps and Boops. | Jan.24.2020_

#### By _**Dusty McCord**_

## Description

_A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions. Numbers with '1' will be replaced with 'Beep!', Numbers with '2' will be replaced with 'Boop!' and Numbers with '3' will be replaced with "I'm sorry, Dave. I'm afraid I can't do that."_

**Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "I'm Sorry...", 4, 5**

## Installation

Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer.

* _find the green 'Clone or Download' button and copy the link_
* _open terminal and type 'cd desktop'_

Windows
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

* _in terminal type 'git clone {link to repository} '_

```sh
git clone https://github.com/dustatron/epicodus-beep-boop-Independent-project.git
```

* _navigate to the new folder that was created on your desk_
* _select index.html_
* _right click and select open with_
* _select your browser_
* _enjoy a Pig Latin translate with your whole family_

## Behavior Driven Development Specifications

Behavior | Input |  Output
---------|-------|----
The program returns a range of numbers from 0 to the users inputted number. | 4 | 0, 1, 2, 3, 4
The program takes in a number 1 and replaces it with 'Beep!'. | 1 | Beep!
The program takes in a number 2 and replaces it with 'Boop!'. | 2 | Boop!
The program takes in a number 3 and replaces it with "I'm sorry, Dave. I'm afraid I can't do that." | 3 | "I'm sorry, Dave. I'm afraid I can't do that."
The program will prioritize 3 over 2 and 1. | 321 | "I'm sorry, Dave. I'm afraid I can't do that."
The program will prioritize 2 over 1. | 21 | "Boop!"


## Support and contact details

_Use at your own risk_

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [Jquery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020**_Josh Hellman and Dusty McCord and the whole Epicodus class_**
