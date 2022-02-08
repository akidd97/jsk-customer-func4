module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    if (name == "Azure") {
    var responseMessage = '[{"CustomerID":123,"CustomerName":"Tailspin Toys (Roe Park, NY)","PhoneNumber":"(212) 555-0100","FaxNumber":"(212) 555-0101","WebsiteURL":"http://www.tailspintoys.com/RoePark","Delivery":{"AddressLine1":"Shop 219","AddressLine2":"528 Persson Road","PostalCode":"90775"}}]';
    } else {
    var responseMessage = '[{"CustomerID":124,"CustomerName":"Tailspin Toys (Roe Park, NY)","PhoneNumber":"(212) 555-0100","FaxNumber":"(212) 555-0101","WebsiteURL":"http://www.tailspintoys.com/RoePark","Delivery":{"AddressLine1":"Shop 219","AddressLine2":"528 Persson Road","PostalCode":"90775"}}]';
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
