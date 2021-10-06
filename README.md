# Invoicia Web App
A web application for managing invoices of users by an oranization.
Basically organization can issue invoices using Invoicia app and can send it to users with the help of emails.
Once user gets invoice he/she will have certain amount of time to pay money for that invoice and application
will keep track of status of invoice and before deadlines reminder mails will be sent ot users.
<br></br>

## Contributing Guidelines
- Have a look at open issues or Feature to be added section of `REAME.md` file or you can also create a new issue and ask for assigning.
- You just have to ask by commenting on issue to work on perticular issue.
- Issues will be assigned on the first come first serve basis and you should only create issues which are not alredy there.
- Once issue is assigned to you , follow the below mentioned instructions and start working on you feature.

  ### How to contribute
  - Star and fork this repository.
  - Clone the repo. to your local system.
  - create new branch(Apart from main branch) named related to feature and start working on feature.
  - Code should be properly formated and indented and relevant comments with code will be appreciated.
  - Open the pull request.
  - Resolve conflicts ( if any ).
<br></br>

## Features (from server side)
- [x] Create a new invoice
- [x] Ability to update the status of the invoice
- [x] Send the invoice via email
- [x] View invoices including status (paid, outstanding, late, etc.)
- [x] Add a due date to an invoice
- [x] View late invoices
- [x] User authentication

## Feature to be added (from client side)
- Go to `/Invoicia/invoicia_frontend/src` folder,
- Folder `/components`, `/contexts` contains empty files to be configured as well `routes.js` file has also to be configured.
- In `/components` folder,
  - `Dashboard` --> configure `home.js`, `new_invoice.js`, page for app and put all styles in `dashboard_syles.css` file.
  - `Header`    --> configure header for app using `header.js` and `header.css` files.
  - `Footer`    --> configure header for app using `footer.js` and `footer.css` files.
  - `Auth`      --> configure `login.js`, `signup.js`, `foget_password.js` page for app and put all styles in `auth_syles.css` file.
  - `User`      --> configure `profile.js`, `edit_profile.js`, page for app and put all styles in `user_syles.css` file.
  
- In `/contexts` folder
  - `authContext.js` file to be modified according to requirments.
  - You can also add more files as per requirments.

- In `routes.js` file you have to put all the routes fo client side.

`(You are reuired to use react.js for implementationa and for styling you can either use bootstrap5 or matrial-UI.
You can test your pages based on dummy data as well, no need to connec tit with backend first).`
<br></br>
<br><br/>

### For any doubts and quires related to project feel free to contact me on [Email](mailto:ykk11@iitbbs.ac.in) | [LinkedIn](https://www.linkedin.com/in/yogesh-kansal-044a75194/).