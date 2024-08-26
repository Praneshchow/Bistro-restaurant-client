
## Make Secure

## Basic Level Secury

1. Do not show the link to them who should not see it only show to the person/types of user who should see it. 
2. Do not allow to visit the link by typing on the url. 
If not admin then redirect to any other page. You could logout user and send them to the login page as well. 


## To Send Data

1. Verify jwt token (send authorization token in the header to the server).  
If possible use Axios to send jwt token by intercepting the request. 
2. if it is an admin activity. Make sure only admin user is posting data by using verifyAdmin. 



# Payment Intregration Steps:

1. install stripe and react stripe js
2. create a checkout form with card element (card element contains: card number, expiration date, cvs, zip code). 
3. create account on Stripe and get the publishable key pk. 
4. get card information. 
5. create a payment method. 
6. use test card to test payment. 
7. on the server side: install stripe: `npm install --save stripe`
8. create a payment intent api with payment method tyeps: ['card']
make sure you provide about in cents (multiply price with 100)
9. call payment intent api to get client secret and store it in a state. 
10. use confirmCardPayment api with client secret card info. 
11. display confirm card error
12. display confirm card success
13. do things after payment ---> 



