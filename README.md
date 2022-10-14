# Quiz-webapp-server

=> Backend for the live quiz web app platform!

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?color=blue&style=for-the-badge)](https://choosealicense.com/licenses/mit/)

![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/mlsacbvp/quiz-webapp-server?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/mlsacbvp/quiz-webapp-server?color=blue&style=for-the-badge)

## Links

<a href='#contributing'>👨🏻‍💻Contributing</a>

<a href='#guide'>📚Important Guidelines</a>

<a href='#api'>➡ API </a>

<a href='#deploy'>⚙🖥Deployment</a>

## Contributing

Contributions are always welcome!

See <a href='#contributing'>Contributing</a> for ways to get started.

Please adhere to this project's `code of conduct`.

**Step 1:** Fork the repository

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.
![alt](https://camo.githubusercontent.com/fcf9a4ed664cc63de2fcb14d1135072ba6d4c74a8e9bdb224ad6ab1e72600c3b/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

### **step 2:** Clone Repo

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Open a terminal and run the following git command:

```bash
git clone https://github.com/mlsacbvp/quiz-webapp-server.git
```

### **Step 2:** Go to issues tab

Go to the MLSAC project repository => In the Issues section => Choose an issue you think you can resolve => Comment that you want to work on it.

### **Step 3:** Sync changes

If the issue is assigned to you, you can work on it and send a PR within 2-3 days after syncing new changes.
![sync changes](https://i.postimg.cc/DZYZV0f4/Screenshot-2022-10-08-174306.jpg)

<p id= "guide">

## Important guidelines

1. Without any assigned issue, don’t send a PR, and if you don’t find issues at a particular time, then visit the repo after 2-3 days.
2. If you send a PR without being assigned an issue, your PR will be marked “spam” or “invalid”.
3. After getting assigned an issue, you must send a PR within 2-3 days otherwise we will re-assigning that issue to someone else.

#### **Read the official hacktoberfest guidelines:**👇🏻👇🏻👇🏻

[https://hacktoberfest.com/participation/#pr-mr-details](https://hacktoberfest.com/participation/#pr-mr-details)
[https://hacktoberfest.com/participation/#spam](https://hacktoberfest.com/participation/#spam)

### More Resources 📚

1. [What is Hacktoberfest](https://choudhary-vaibhav.medium.com/what-is-hacktoberfest-and-why-should-you-take-part-in-it-e02b01155869)
2. [How to Use git](https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide)
3. [how-to-contribute](https://opensource.guide/how-to-contribute/)
4. [first-contributions](https://github.com/firstcontributions/first-contributions)
5. [awesome-for-beginners](https://github.com/mungell/awesome-for-beginners)
6. [github-git-cheat-sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
7. [How to Write Good Commit Messages](https://dev.to/chrissiemhrk/git-commit-message-5e21)
8. [How to Do Your First Pull Request? (video)](https://youtu.be/nkuYH40cjo4)

<p id= "api">
## API Reference

#### Get all items

```http
  POST /register
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `name`     | `string` | **Required**. Your name     |
| `username` | `string` | **Required**. Your username |
| `email`    | `email`  | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### Get item

```http
  POST /login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |

#### Profile

```http
  Get /profile
```

| Header          | Type     | Description                        |
| :-------------- | :------- | :--------------------------------- |
| `Authorization` | `string` | **Required**. JWT TOKEN from login |

<p id= "deploy">

## Run Locally

### To run this project Please Do the following steps:-

_Clone the project_

```bash
  git clone https://github.com/mlsacbvp/quiz-webapp-server.git
```

Go to the project directory

```bash
  cd quiz-webapp-server
```

### **SetUp ENV variables**

for this just copy the data from `.env.sample` to `.env` file

**for linux/Mac**

```bash
touch .env
cat .env.sample >> .env
```

**for win**

```PS
Copy-Item -Path .\.env.sample
-Destination .\.env -PassThru
```

Install dependencies

```bash
  npm install
```

SetUP MongoDB

```bash
  use users
  show dbs
```

Start the server

```bash
  node app.js
```

OR

```bash
  nodemon app.js
```
