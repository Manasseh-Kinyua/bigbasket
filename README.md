# BigBasket
> BigBasket is an online store aimed as bringing all the best products to customers. It is built with all the core features and functionalities of a modern electronic commerce shop. Focused on customer support, quick deliveries BigBasket aims at growing to the best shopping option for everyone.

# Visit Live App
[BigBasket](https://bigbasket.up.railway.app)

# Developer
[Manasseh Kinyua](https://github.com/Manasseh-Kinyua)

## GIF Demo
![bigbasket](https://bigbasket-bucket.s3.eu-west-3.amazonaws.com/bigbasket.gif)

## Technologies Used
* React
* Redux
* Bootstrap
* MUI
* Django
* Django Rest Framework & DRF Simple JWT
* Postgres
* AWS S3

## Features
1. Authentication & Authorization
1. View products/window shop
1. Search and filter products
1. Add items to cart
1. Remove Items from cart
1. Checkout: add shipping address, add payment method
1. Create order
1. Pay for order

 #### Admin Features
 1. Add/Update Products
 1. View User
 1. Manage user role(give admin status)
 1. Mark Orders as delivered

## Installation
1. Download/clone repo.

    ```bash
      git clone https://github.com/Manasseh-Kinyua/bigbasket.git
    ```
1. Navigate to project folder.

    ```bash
      cd bigbasket
    ```
    
1. Create and activate a virtual environment.(may vary across operating systems. This is for linux users.)

    ```bash
      virtualenv <environment-name>
    ```
    
    ```bash
      <environment-name>/bin/activate
    ```
    
1. Install Django and other dependencies.

    ```bash
      pip freeze > requirements.txt
    ```
    
1. Run Django app.

    ```bash
      python manage.py runserver
    ```
    
1. Navigate to react app.

    ```bash
      cd frontend
    ```
    
1. Install react dependencies.

    ```bash
      npm install
    ```
    
1. Run nreact app.

    ```bash
      npm start
    ```
    
Setup complete. Happy coding!!!

1. Once you are done coding, build react app push branch for review.

    ```bash
      npm run build
    ```
