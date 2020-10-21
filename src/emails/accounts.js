const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'
sgMail.setApiKey(process.env.SENDGRID_API_KEY) //process.env.SENDGRID_API_KEY

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martinayush04@gmail.com',
        subject: 'EMAIL SENT USING SENDGRIDMAIL NODE.JS',
        text: `Welcome to the app, ${name}. Let me know how you get along the app`

    })
}

const sendCancellationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martinayush04@gmail.com',
        subject: 'SORRY TO SEE YOU GO',
        text: `GoodBye, ${name}. I hope to see you sometime back soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationMail
}