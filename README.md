# DatingAppCreate a basic web dating app which should contain following features:-

UI:-

Sign up/login with email password 
One Image uploading for each user 
User interface to scroll random images.Logged in user can scroll images and perform 3 actions (Like,block,superlike other image/user)

Backend:-

Test users loading: You can load test users with 10 images in database. 
Sign up api : Basic email and password based registration 
login api : Jwt based login with email and password

Image like api : Whenever some one like other user image, a socket io notification will sent to other user 
but image of person who liked should not be visible to who is being liked

Image superlike : Whenever some one super like other user image, a socket io notification will sent to other user and image of person who liked will be visible to who is being liked.

Block api: When a user block another user then his/her image should not be shown while blocked user is scrolling random images