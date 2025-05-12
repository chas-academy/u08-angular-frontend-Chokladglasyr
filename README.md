I detta projekt ska ni utveckla en liten frontend-applikation med Angular, ett populärt ramverk för att bygga moderna webbapplikationer med strukturerad kod, komponenter och reaktiv programmering. Ett av målen med projektet är att få till en riktigt skalbar kod som skulle kunna gå att fortsätta arbeta på i framtiden av er eller andra utvecklare och enkelt lägga till nya features.

Applikationen ska kopplas till det REST-API ni tidigare skapat i U05:an och innehålla grafiska element som gör det möjligt att utföra en fullständig CRUD-funktionalitet. Projektet ska ha en enkel, användarvänlig design med fokus på tillgänglighet och responsivitet. Ni ska använda Angular för att strukturera applikationen i komponenter och services, samt för att hantera API-anrop och vylogik på ett effektivt sätt.  
   
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/3hLk1m_7)
  
# Welcome to Wishlist
Where you can create your own wishlists, paste the link for whatever you wish for, give some description, do you want it in the colour black? A size small? 
Let other users (aka family and friends) be able to check what you want whenever. 

Regret something or you already received it? Delete it from the list! Changed your mind and you rather want it in colour blue? Edit your wished item!   
<img src="/assets/wishlist.logo.png" width="200px">  

### How it works
As a regular visitor you may browse the existing lists and items in each list.   
As a logged in user you are able to create, edit and delete lists, and the items in the list, however you cannot edit or delete someone elses list or its items. You can also update your name and email.    


## Getting started
+ ```git clone https://github.com/chas-academy/u08-angular-frontend-Chokladglasyr.git ```
+ ```cd frontend```
+ ```npm install```
+ ```npm start```

## Want to add a feature?
+ Once in frontend folder you can create a new component.
    - ```ng generate component components/yournameofthecomponent```
+ You will now find 4 new files under the folder with the name of your new component, in the components folder. 
    - The CSS file is where you will create styles specific for this component, keep and eye out because some styles are globally, you find them in the styles.css in the src folder.
    - The hmtl file is where you create the html for the component.
    - The spec.ts file is where you can create tests for your component.
    - The .ts file is where you can use TypeScript to create the functionality for your component.
+ You can also create a service.
    - ```ng generate service services/yournameoftheservice```
+ You will now find your service in the service folder, it is divided into two files. The spec.ts and .ts file. 
    - spec.ts is again for testing, but testing your service.
    - .ts file is again where you create the functionality
+ You add the service into the constructor in the component to be able to use it. 
+ Don't forget to add you routes to your component! This is done in the app.routes.ts file.
    - ```{path: 'yourpathwithoutastartingslash', component: yourComponent}```


### Deploy  
For this assignment we used Netlify. You can find my work [here]().

### Design
<img src="/assets/wishlist.png" width="200px">    
  
[Figma](https://www.figma.com/design/VDilkI4u1PNdBnRvvUf8nw/U06?node-id=15-189&t=IT5BfNWCtzmFGOkz-1)