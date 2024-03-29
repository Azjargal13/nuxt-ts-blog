---
title:  "Write a unit test using jest in Vue/Typescript project"
createdAt:   2020-01-27 18:06:00 +0900
label:
- Testing
tags:
- jest
- unit-test
- typescript
---

Writing a unit test is really required to insure functions expected operation. During this task some unnoticed bugs can be found, so we can fix it before even deploying.
Depend on the project framework, we can use any kind of unit testing tools. There are many popular as well strong testing tools are available and it is used in most of the frameworks such as VueJs, Angular, React etc.

To find out a unit testing tool which align with the project requirement, it is advised to take some time to read their documentation and write simple test cases in order to get familiar with their syntax and usage.

`Jest` is widely used javascript testing framework. The syntax of it is not so complicated. If someone who already writing some code in typescript or javascript, easily understand the flow and able to write test cases.

And configuration of it wont take much time since it is config-free with most of the project which uses Babel, Typescript, Node, React, Angular, Vue etc.

To start using it, simply just install it through npm or yarn.

`npm i jest --save-dev`

Yes, we've installed jest successfully!

In order to run our test code, we can add script in package.json. Open `package.json` file, in `scripts` section add `test: "jest"`. Now we can run test using npm cli command.

Now it's time to write first test code.
Before jumping to write a code, the test file should be named as `xyz.test.js`.

## Sample unit test code

Let's say we have a following `.js` file which contains a function named `convertToStr`.

```js
/* convertToStr.js */
function convertToStr(num:Number){
    return num.toString()
    }
```
Now, let's create a test file named `convertToStr.jest.js`.

```js
/* convertToStr.test.js */
import convertToStr from ./convertToStr
describe("convertToStr", ()=>{
    it ("returns input value as str type", ()=>{
        let testInput = convertToStr(100)
        expect(testInput).toBe("100")
        expect(type testInput).toBe("string")
    })
}) 
```

In the test, first we import a file which need to be tested. 
Then in `it()` block, we simply called the function  which converts given input to string type and check its returned value is same as our expected value.
We've checked two different parameter here.
1. Given input number type 100 is equal to string type "100".
2. Type of returned value is same as `string`.

Just for info purpose, it is advised that in `describe()` block, better to write function or method that has been tested. In `it()` block explain the behavior of the test. In above case, the test converts given input value as string, so it described as `returns input value as str type`.

After finished to write test, write in command line tool `npm run test` to run the test.

This maybe good start, if you just planning to use jest testing tool in your project.

I am including useful links above here for further reference.
[jest-official-doc](https://jestjs.io/docs/en/getting-started.html)