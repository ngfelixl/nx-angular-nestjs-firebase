# NX + Angular + NestJS + Firebase

This repository is a demonstration for getting an NX workspace with Angular and NestJS deployed to Firebase. The Angular app is hosted by *Firebase Hosting*. The NestJS app is deployed with *Firebase Functions*. The Angular app only utilizes the HttpClient and does not make use of other Firebase tools. Probably you can improve the setup, for example by using the Firebase emulator.

## Steps to reproduce

1. Create the nx workspace `npx create-nx-workspace@14.5.10` and select "Angular + Nestjs"
2. Install firebase globally `npm i -g firebase-tools` and login `firebase login`
3. Install @angular/fire `npm i @angular/fire` and run the initialization schematics `npx nx g @angular/fire:ng-add`
4. Install `npm i firebase-functions`
5. Run `firebase init functions` and remove the functions folder.
6. Add the [**package.json**](./apps/api/package.json) file in the **apps/api** folder.
7. Make sure it gets copied as an asset to the dist folder by changing the [**apps/api/project.json**](./apps/api/project.json). 
8. Make sure CORS is setup accordingly (check [**main.ts**](./apps/api/src/main.ts) in the NestJS app)

## Firebase

Create a new Firebase project and add a new "web" app. Once you have deployed the
NestJS function you have to make it publically available. Follow the steps:

1. Go to the Firebase console
2. Navigate to **Functions**
3. The function should appear. Click on the three dots (visible on hover).
4. Click on "Detailed usage notes". You will be navigated to the Google cloud console.
5. Go to the "Permissions" tab. Click "Add".
6. Enter "allUsers" and pick the "Cloud-functions invoker" role.
