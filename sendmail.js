var vconfig = require('./config')
var config = vconfig.mail

const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: config.host,
    // port: 587,
    secure: true, // true for 465, false for other ports
    auth: {
        user: config.user, // generated ethereal user
        pass: config.pass // generated ethereal password
    }
});

module.exports = function (email, subject, content) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: config.from, // sender address
        to: email, // list of receivers'bar@example.com, baz@example.com''
        subject: subject, // Subject line
        text: content, // plain text body
        // html: '<b>Hello world?</b>' // html body
    };

    return new Promise((resolve) => {
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                resolve(null)
                return console.log(error);
            }

            resolve(info)
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    })
}

