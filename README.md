# Cat-astrosphe App Challenge

Create an app that will allow the user to browse through awesome cat pictures. People love pictures of cats, so this app will satisfy their desire to mindlessly waste the day away viewing cat pics. Think of it as a Facebook feed, but filled 100% with cats. 

This is obviously a silly application, but it hits major areas that are required for modern web application development: project setup & architecture, dependency management, sessions, state management, design, UX, APIs and time management.


## HOW TO GET STARTED

The initial build has been setup already using Parcel. This also assumes you are using `nvm`. If you are not, make sure to run node v10.12. To run:

```
> nvm use
> npm install
> npm start
```

That will launch the app locally on port 7777. All code should go in the `src` directory.


## CHALLENGE REQUIREMENTS

Most of the implementation details are up to you, but there are some basic requirements. After the challenge, we’ll examine the project and ask you questions about why you made certain decisions.

- Be a single page application
- Use React & Redux
- Timebox this! **No more than 4 hours.** It should be a fun project, but don’t spend the entire weekend on it.
- Use whatever resources you need to complete: google, stack overflow, docs, your mother, etc. Just like you would at work.
- Everything else is up to you: design, UX, project structure, etc.
- Use whatever CSS framework you want: bootstrap, material, semantic, etc., or just roll your own.

Feel free to install any libraries that you need or want. Treat this just like you would any normal work project, except it's okay to have more fun with it.


## HIGH-LEVEL FUNCTIONAL REQUIREMENTS

There are four main functional requirements that must be satisfied. These areas cover the basics of what most applications require. 

- Have a login
- Have an endless feed of cat images that the user can scroll through
- Have a screen to setup the basic feed parameters
- Integrate with https://thecatapi.com/ for images


## SESSIONS

There’s no backend for this project, just simulate how sessions would work on the frontend. We are not at all concerned with security for this challenge (it’s completely insecure!), just the UX around managing sessions.

- The app should maintain whether or not the user is logged in. 
- The session should be maintained on page refresh (hint: use local storage!)
- If the user is not logged in, the login screen should be shown. The login screen should consist of a form with an email, password, and submit button.
- An error message should be shown upon invalid credentials
- Once the user is logged in, the feed screen should be shown
- For security purposes, it must be possible for the user to log out


## USER DATA

For simplicity, use the following data for a single user. Just hardcode this data somewhere and do a simple username/password test:

```javascript
{
  firstName: 'Syliva',
  lastName: 'Daniels',
  email: 'test@example.com',
  password: 'letmein2',
  avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
}
```


## THE FEED

- Should show the user information (name, avatar, etc.) somewhere
- The feed is an endless stream of cat pictures
- The order should be maintained if you go up or down (just like a Facebook feed)
- Some sort of loader should be used if the app is waiting on data
- Since we don’t want people to waste their entire day looking at cat pictures, the feed should max out at 200 pictures. At the end of the feed, there should be a message displayed that says, “You reached the end, now get back to work!”. 


## SETUP SCREEN

In addition to the feed, there should be a way to access a settings screen where the feed can be configured.

- Have a way to choose to show gifs or static images.
- Have a way to signify the size: small, med or full.
- Have a button to “close” the settings and get back to the feed.
- All config settings must be maintained in redux state.


## THE CAT API

The Cat API will return a random cat image. Docs here: https://thecatapi.com/

- Use API key: *cfd1ad99-38c0-4acf-917e-fab384dd5eda*
- Integrate with the cat API to load images. 
- It should grab images from The Cat API based on the size and type (gif or static) selected on the setup screen
- The Cat API is a free service, so let’s respect them by rate limiting the requests to a **maximum of 4 per second.**


## QUESTIONS / COMMENTS / CONCERNS / ISSUES?

If you need anything at all, just reach out. This is supposed to sort of simulate an actual work environment, and your work colleagues are there to help. So don't be bashful. 
