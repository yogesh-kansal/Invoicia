# Invoicing App API's Documnetation
---
#

## Install dependencies
    npm  install
    npm install nodemon -g

## Run the app
    npm start

#
#
# User API
---
The REST API to user authentication in app.
Below description shows only successful requests. 
#

## User Signup
### Request
__`POST`__  `/user/signup`
  ```json
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "email":"admin@gmail.com",
    "password":"Admin@1234"
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "text/html"
    }
  body: user with email: admin@gmail.com has been signed up successfully
  ```
-----
#
## User Login
### Request
__`POST`__  `/user/login`
  ```json
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "email":"admin@gmail.com",
    "password":"Admin@1234"
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "message":"logged in successfully!!!",
    "token":
    }
  ```

#
#
#

# Invoice API
---
The REST API to do operations on invoices.
Below description shows only successful requests. 
API can be used after logging in of user only!!!
#
## Retrieve all invoices
### Request
__`GET`__  `/invoices`
  ```json
  headers: {
    "Authorization":  //JWT Token
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: [{}]
  ```
-----
#
## Create new invoice
### Request
__`POST`__  `/invoices`
  ```json
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    }
  ```
### Response
  ```json
  headers: {
    "Content-type":  "application/json",
    "Authorization":  //JWT Token
    }
  body: {
    "status":"Invoice created and send to invoicee by Email successfully",
    "invoice": {
        
        }
    }
  ```
-----
#
## Remove all invoices
### Request
__`DELETE`__  `/invoices`
  ```json
  headers: {
    "Authorization":  //JWT Token
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "status":"success",
    "message":"All invoices have been deleted successfully!!!"
  }
  ```
-----
#
## Retrieve late invoices
### Request
__`GET`__  `/invoices/late`
  ```json
  headers: {
    "Content-type":  "application/json"
    }
  ```
### Response
  ```json
  headers: {
    "Content-type":  "application/json"
    }
  body: [{
      
  }]
  ```
-----
#

## Retrieve invoice
### Request
__`GET`__  `/invoices/:id`  
(`id` unique ID of invoice)
  ```json
  headers: {
    "Authorization":  //JWT Token
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
      
  }
  ```
-----
#
## Update status of invoice
### Request
__`PATCH`__  `/invoices/:id`
(`id` unique ID of invoice)
  ```json
  headers: {
    "Content-type":  "application/json",
    "Authorization":  //JWT Token
    }
  body: {
    "status":"paid"
    }
  ```
### Response
  ```json
  headers: {
    "Content-type":  "text/html",
    }
  body: 'Invoice status has been successfully updated'
  ```
-----
#
## Remove invoice
### Request
__`DELETE`__  `/invoices/:id`
(`id` unique ID of invoice)
  ```json
  headers: {
    "Authorization":  //JWT Token
    }
  ```
### Response
  ```json
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "status":"success",
    "message":"Invoices with ID id has been deleted successfully!!!",
  }
  ```