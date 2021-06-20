exports.template =(invoice) => {
    let table='', methods='';
    invoice.items.forEach((item,index) => {
        table+=`<tr>
                    <td>${item.name}</td><td>${item.quantity}</td><td>${item.rate}</td>
                    <td>${item.ammount}</td>
                </tr>`
    });

    invoice.payment_methods.forEach((method) => {
        methods+=`<li>${method}</li>`
    });

    let html=
    `<html>
        <head>
            <style>
            body {
                font-size: 16px;
                padding: 5px 10px;
                color: gray;
                font-style: italic;
            }
            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }

            .head {
                font-size: 26px;
                margin-bottom: 3px;
                display: block;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
            }

            .info {
                font-family: arial, sans-serif;
                font-size: 19px;
                padding: 0px;
            }

            .left {
                float: left;
                margin-left: 5px;
            }
            .right {
                float: right;
                margin-right: 5px;
            }

            .list {
                font-size:18px
            }
            </style>
        </head>
        <body>
        <div>
            <span><strong class="head">Hello ${invoice.invoicee.name}!!!</strong></span>
            <span>The below information is provided for invoice</span>
            <div class="info">
                <div class="left">
                    <p><strong>issuer: </strong> ${invoice.biller}<br>
                    <strong> issue date: </strong>${invoice.issue_date.toLocaleDateString()} ${invoice.issue_date.toLocaleTimeString()}</p>
                </div>
                <div class="right">
                    <p><strong>status: </strong>${invoice.status}<br>
                     <strong>due date: </strong>${invoice.due_date.toLocaleDateString()} ${invoice.due_date.toLocaleTimeString()}</p>

                </div>
            </div>

            <table style="font-family: arial, sans-serif;
                        border-collapse: collapse;
                    width: 100%;">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Ammount</th>
                </tr>
                ${table}
                <tr>
                    <th>Total Ammount</th>
                    <td></td>
                    <td></td>
                    <td>${invoice.total_ammount}</td>
                </tr>
            </table>

            <br></br>
            <h4>Payment_methods</h4>
            <ul>
                ${methods}
            </ul>

            <br>
            <p>With regards
            <br/>Web Team</p>
        </body>
        </div>
    </html>`
    return html;
}