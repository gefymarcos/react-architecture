# Frontend Architecture

An example app built using a layered architecture, using concepts based on clean architecture, Dumb vs Smart components and SOLID, fully focused on the frontend.

Contains 3 branches and each has its version and application

Basic: Usually used for smaller projects, libs or micro-frontends that don't need complex global state control;
Redux: It is an extension of the basic architecture with the addition of redux, it should be used for projects that use Rest API;
Apollo: It is an extension of the basic architecture with the addition of apollo, it is used for projects that use Graphql.

# Things to Consider

The most famous architectural patterns emerged in a pre "modern frontend" period, so it's impossible to apply them by the book, in this project I wanted to approach and apply some ideas with adaptations, to allow the creation of a frontend architecture that makes sense and is easy to scale and maintain over time.

# Concepts

### Components

Are the common components of the application, usually a component that's in this folder must be self-sufficient and possible to be reused in any page of the application.

### Containers

A container is a component whose main objective is to centralize the queries and data treatment of a page or context and pass this processed data to a view.
A container can have one or more views and even one or more containers inside it, always seeking to observe the principle of single responsibility.

### Views

Views aim to have as little data processing as possible, they can be reused between containers and can also have views inside them, but by concept, a view will never have a container inside, the view is the last step between the user and the application.

### Use Cases

It must centralize the use cases of the module, it is very important to keep these files with as few dependencies as possible, that way they can be reused whenever necessary and we guarantee that the business rules survive for "always".

### Modules

The main objective of Modules is to separate business rules from React components, and also centralize them in a way that they can be reused as much as possible.

### Action

They are triggered in containers, views and components, they are functions that generate changes in the global state of the application or return an updated value to the local state, either through communication with the api or with the store, it will also have functions to perform the queries for api.


## Running

`yarn && yarn dev`
