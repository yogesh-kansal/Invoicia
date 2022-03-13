# Invoicing App Documnetation
## Install dependencies
    npm  install
    npm install nodemon -g
    
## Instructions
 __Environment Variables__
 <br>
`PORT` - port number for server.  (__Default__: 3000)
<br>
`DBNAME` - database name. (__Default__:"invoice_record")
<br>
`SECRETKEY` - for signing JWT token
<br>
`EMAIL` - Email used to send mail
<br>
`PASS` - password for the email account
<br>

## Run the app
    npm start
<br>

# User API
The REST API to user authentication in app.
<br>
Below description shows only successfull requests. 
## User Signup
### Request
__`POST`__  `/user/signup`
  ```
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "email":"admin@gmail.com",
    "password":"Admin@1234"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "text/html"
    }
  body: user with email: admin@gmail.com has been signed up successfully
  ```
## User Login
### Request
__`POST`__  `/user/login`
  ```
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "email":"admin@gmail.com",
    "password":"Admin@1234"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "message":"logged in successfully!!!",
    "token":"..."
    }
  ```
<br>

# Invoice API
The REST API to do operations on invoices.
<br>
Below description shows only successful requests. 
<br>
API can be used after logging in of user only!!!

## Retrieve all invoices
### Request
__`GET`__  `/invoices`
  ```
  headers: {
    "Authorization":  "JWT Token (got from logging)"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: [] //array of invoices
  ```

## Create new invoice
### Request
__`POST`__  `/invoices`
  ```
  headers: {
    "Content-type":  "application/json",
      "Authorization":  "JWT Token (got from logging)"
    }
  body: {
    "invoicee" : {
        "name" : "admin",
        "email" : "xyz@gmail.com"
    },
    "items" : [
        {"name" : "fruits","rate" : 5,"quantity" : 10},
        {"name" : "color", "rate" : 20,"quantity" : 10},
        {"name" : "milk","rate" : 10,"quantity" : 10}
    ],
    "payment_methods" : [
        "you can pay by cheque",
        "for online payment use internet banking"
    ],
    "due_info": {
        "days":7,
        "hours":0
    }
}
  ```
### Response
  ```
  headers: {
    "Content-type":  "application/json",
    }
  body:  {
    "status": "Invoice created and send to invoicee by Email successfully",
    "invoice": {
        "total_ammount": 350,
        "status": "outstanding",
        "payment_methods": [
            "you can pay by cheque",
            "for online payment use internet banking"
        ],
        "due_date": "2021-06-27T20:46:44.464Z",
        "_id": "60cf7f04931709205caaf281",
        "invoicee": {
            "name": "admin",
            "email": "xyz@gmail.com"
        },
        "items": [
            {
                "_id": "60cf7f04931709205caaf282",
                "name": "fruits",
                "rate": 5,
                "quantity": 10,
                "ammount": 50
            },
            {
                "_id": "60cf7f04931709205caaf283",
                "name": "color",
                "rate": 20,
                "quantity": 10,
                "ammount": 200
            },
            {
                "_id": "60cf7f04931709205caaf284",
                "name": "milk",
                "rate": 10,
                "quantity": 10,
                "ammount": 100
            }
        ],
        "biller": "admin@gmail.com",
        "issue_date": "2021-06-20T17:46:44.464Z",
        "createdAt": "2021-06-20T17:46:44.497Z",
        "updatedAt": "2021-06-20T17:46:44.497Z",
        "__v": 0
    }
}
  ```
  
## Remove all invoices
### Request
__`DELETE`__  `/invoices`
  ```
  headers: {
    "Authorization":  "JWT Token (got from logging)"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "status":"success",
    "message":"All invoices have been deleted successfully!!!"
  }
  ```
## Retrieve late invoices
### Request
__`GET`__  `/invoices/late`
  ```
  headers: {
    "Content-type":  "application/json"
    }
  ```
### Response
  ```
  headers: {
    "Content-type":  "application/json"
    }
  body: [{
        "invoicee": {
            "name": "admin",
            "email": "xyz@gmail.com"
        },
        "total_ammount": 700,
        "status": "late",
        "payment_methods": [
            "you can pay by cheque",
            "for online payment use internet banking"
        ],
        "due_date": "2021-06-20T17:50:55.711Z",
        "_id": "60cf7fff931709205caaf285",
        "items": [
            {
                "_id": "60cf7fff931709205caaf286",
                "name": "fruits",
                "rate": 5,
                "quantity": 20,
                "ammount": 100
            },
            {
                "_id": "60cf7fff931709205caaf287",
                "name": "color",
                "rate": 20,
                "quantity": 20,
                "ammount": 400
            },
            {
                "_id": "60cf7fff931709205caaf288",
                "name": "milk",
                "rate": 10,
                "quantity": 20,
                "ammount": 200
            }
        ],
        "biller": "admin@gmail.com",
        "issue_date": "2021-06-20T17:50:55.711Z",
        "createdAt": "2021-06-20T17:50:55.716Z",
        "updatedAt": "2021-06-20T17:50:55.716Z",
        "__v": 0
    }
]
  ```

## Retrieve invoice
### Request
__`GET`__  `/invoices/:id`  
<br>
(`id` unique ID of invoice)
  ```
  headers: {
    "Authorization":  "JWT Token (got from logging)"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "invoicee": {
        "name": "admin",
        "email": "xyz@gmail.com"
    },
    "total_ammount": 700,
    "status": "outstanding",
    "payment_methods": [
        "you can pay by cheque",
        "for online payment use internet banking"
    ],
    "due_date": "2021-06-20T17:50:55.711Z",
    "_id": "60cf7fff931709205caaf285",
    "items": [
        {
            "_id": "60cf7fff931709205caaf286",
            "name": "fruits",
            "rate": 5,
            "quantity": 20,
            "ammount": 100
        },
        {
            "_id": "60cf7fff931709205caaf287",
            "name": "color",
            "rate": 20,
            "quantity": 20,
            "ammount": 400
        },
        {
            "_id": "60cf7fff931709205caaf288",
            "name": "milk",
            "rate": 10,
            "quantity": 20,
            "ammount": 200
        }
    ],
    "biller": "admin@gmail.com",
    "issue_date": "2021-06-20T17:50:55.711Z",
    "createdAt": "2021-06-20T17:50:55.716Z",
    "updatedAt": "2021-06-20T17:50:55.716Z",
    "__v": 0
}
  ```

## Update status of invoice
### Request
__`PATCH`__  `/invoices/:id`
<br>
(`id` unique ID of invoice)
  ```
  headers: {
    "Content-type":  "application/json",
    "Authorization":  "JWT Token (got from logging)"
    }
  body: {
    "status":"paid"
    }
  ```
### Response
  ```
  headers: {
    "Content-type":  "text/html",
    }
  body: 'Invoice status has been successfully updated'
  ```

## Remove invoice
### Request
__`DELETE`__  `/invoices/:id`
<br>
(`id` unique ID of invoice)
  ```
  headers: {
    "Authorization":  "JWT Token (got from logging)"
    }
  ```
### Response
  ```
  status: 200 OK
  headers: {
    "Content-type":  "application/json"
    }
  body: {
    "status":"success",
    "message":"Invoices with ID id has been deleted successfully!!!",
  }
  ```
