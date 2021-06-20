exports.validateUser =(user) => {
    const {email,password}=user;
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passFormat= /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;
    let errs={};

    if(!mailFormat.test(email))
        errs.email_err='Email format is not correct.';
    if(!passFormat.test(password)) 
        errs.password_err='Password must conatin at least one digit,samll char, capital char,special char and must have length at least 6';

    if(JSON.stringify(errs) === JSON.stringify({}))
        return null;
    return errs;
}

//some data validation for invoice will be done by mongoose model automatically!!!
exports.validateInvoice=(data) => {
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errs={},c=0;

    if('invoicee' in data) {
        if('email' in data.invoicee) {
            if(!mailFormat.test(data.invoicee.email))
                errs.invoicee='invoicee mail format is not correct.';
        }
        //else part is done by mongoose itself
    }

    if('due_info' in data) {
        if(!('days' in data.due_info) || data.due_info.days<0)
            errs.due_info='no. of non negative days are required';
        if(!('hours' in data.due_info) || data.due_info.hours<0 || data.due_info.hours>23) {
            if(errs.due_info)
                errs.due_info+=' And Hours must be with in 0 to 23 range';
            errs.due_info='hours must be with in 0 to 23 range';
        }
    }
    else 
        errs.due_info='due date information is reuired in order to set due dat for invoice!!!';

    if(JSON.stringify(errs) === JSON.stringify({}))
        return null;
    return errs;
}