---
title: 'My Music List'
date: 2024-10-11T09:55:53+05:30
draft: false
github: "MyMusicList"
tags:
- react
- node
- express
- mongodb
---

My Music List was a personal project I worked on to help people record their listening journey so they can in a way store memories.
I was looking for something similar to myanimelist for music but couldn't find it so I created my own.

### Idea
The big idea was to have a place to list all the music you ever listened to, currently listening to or are planning to listen to in
one place. So others similar to you can connect, you can share it as a list of all the music you recommend with your personal
ratings.

### Authentication
Auth was implemented using jwt in http only cookie with email verification through nodemailer. The passwords were hashed by the state
of the art hashing algorithm argon2 which won the 2015 password [hashing competition](https://www.password-hashing.net/). Now if I were
to implement this I would have used salting and CSRF tokens to make sure no CSRF attacks are possible.

### UI
The homepage consist of a navbar with links to pages: home, contact, login, signup. Below the navbar is where you will find a list
of all the music I have added for now its only 2 as I moved image storage to cloudinary for better performance. Each music is in 
the form of a card with title, links and description. If you click on the view more link it will take you to the individual music
page

