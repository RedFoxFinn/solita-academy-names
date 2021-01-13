
# Solita Dev Academy 2021

## programming assignment - name application

Programming assignment for applying to Solita Dev Academy 2021.

I used javascript and following libraries to complete this assignment:

- [React](https://reactjs.org)
- [Axios](https://github.com/axios/axios)

Styling is achieved by using inline styles provided by self-made and simple styling tool.

Fetching state messages use self-made enum-like definitions that are built with Object.freeze().

Fetching json first from Solita github, assignment repository.

Sorting functionality displayed after the json gets fetched. Features sorting by name (ascending, descending) and amount (also ascending and descending).

Status messages feature current sorting method, total count of names on json, total amount counted from name/amount -pairs.

Search functionality displayed after the json gets fetched. Features search field, search button and search resetting button.

List is displayed after the json gets fetched. By default it shows name/amount -pairs sorted by name, ascending. When search is used, there will be names that include search term (only some letters or complete name). If no results appear, there will be shown status message with reflecting content.

### [Original assignment from [Solita GitHub](https://github.com/solita/dev-academy-2020/)]

#### dev-academy-2021 exercise - Name Application

Your task is to implement a name application. The application should have an user interface. The user interface can be either a web application or an api. (It can even contain both if you have enough time and enthusiasm.) 

The user interface should provide at least the first one of the following requirements, but again, you’re allowed to implement them all.
1. List names and amounts, order by amount, most popular first
2. List names in alphabetical order
3. Return the total amount of all the names
4. Return the amount of the name given as a parameter

The data for the application is stored in a json file ([names.json](https://github.com/solita/dev-academy-2020/blob/main/names.json)). The material contains the top-10 of both male and female names in Solita. You can use the json file directly as your data source or you can store the data in a database if you wish.

Technologies which are used in the projects in Solita are, for example, Java, Kotlin, Clojure, TypeScript, C#, React, Angular, Vue.js, and Node.js. You can choose some of those or use your favorite technologies.

GitHub is a good choice for version control. You can attach the repository link to your dev academy application. **Be aware that you do not have to fork this repo and repository forking is public information in GitHub**

Be prepared to present your implementation of the name application in the possible interview. We would like to see how the application works and discuss together the technology choices you’ve made.