// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//const functions = require('firebase-functions')

// exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
//   //stripe init
//   const stripe = require("stripe")(functions.config().stripe.secret_key);
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     mode: "payment",
//     success_url: "http://localhost:4200/success",
//     cancel_url: "http://localhost:4200/cancel",
//     line_items: [
//       {
//         quantity: 1,
//         price_data: {
//           currency: "gbp",
//           unit_amount: (100) * 100, // 10000 = 100 gbp
//           product_data: {
//             name: "New camera"
//           },
//         },
//       },
//     ],
//   });
//   return {
//     id: session.id
//   };
// });
//























const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

const stripe = require('stripe')(functions.config().stripe.secret_key)


exports.stripeCharge = functions.database
  .ref('/payments/{userId}/{paymentId}')
  .onWrite( (change,context) => {

    const payment = change.after.val();
    const userId = context.params.userId;
    const paymentId = context.params.paymentId;

    // checks if payment exists or if it has already been charged

    if (!payment || payment.charge) return;

    return admin.database()
      .ref(`/users/${userId}`)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      })
      .then( customer => {
        const amount = payment.amount;
        const idempotency_key = paymentId;
        const source = payment.token.id;
        const currency = 'GBP';
        const charge = {amount, currency, source};

        return stripe.charges.create(charge, {idempotency_key});
      })
      .then(charge => {
        admin.database()
          .ref(`/payments/${userId}/${paymentId}/charge`)
          .set(charge);
        return true;
      })
  })
