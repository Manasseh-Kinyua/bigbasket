# BigBasket
> Task management is one of the major challenges for teams when working on projects. Taskjar is a task management software aimed at aiding teams with assigment, dispatchment and tracking of tasks.

# Visit Live App
[TaskJar Software](https://taskjar.up.railway.app/)

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
* AWS RDS

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
