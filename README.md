#ProjectCamp Backend

ProjectCamp is a backend REST API built for team-based project collaboration. It’s designed to handle real-world project workflows where different users have different responsibilities and permissions.

Instead of treating everyone the same, ProjectCamp uses a role-based system so teams can work in a more structured and secure way.

What problem does it solve?

Most project management tools give all users equal access. That works for small teams, but it quickly becomes messy as projects grow.

ProjectCamp fixes this by introducing clear roles:

Admin – full system control

Project Admin – manages projects and tasks

Member – collaborates and updates assigned work

Every request to the API is checked to ensure the user is authenticated and allowed to perform that action.

How it works (simple view)

The backend acts as the middle layer between a frontend and the database.

A user sends a request (login, create task, update status, etc.)

The API verifies the user using JWT authentication

The user’s role is checked

If permitted, the request is processed and saved to the database

If not permitted, the request is blocked.

Tech stack

Node.js

Express.js

MongoDB with Mongoose

JWT for authentication

Bcrypt for password hashing

Nodemailer for email verification and password resets

Express Validator for request validation

Centralized error handling and CORS configuration

What’s implemented so far
Authentication & Security

User registration and login

JWT-based authentication

Email verification

Password reset flow

Encrypted password storage

Input validation and error handling

Role-Based Access Control

Admin, Project Admin, and Member roles

Permission checks on protected routes

User Management

User profiles

Email verification

Secure password management

What’s coming next

Project creation and management

Task and subtask handling

Task status tracking (Todo / In Progress / Done)

Project notes

File uploads and attachments

Team member invitations and role management

Why this project exists

This project is built to understand how production-grade backend systems work.
It focuses on clean architecture, security, and scalability rather than shortcuts.

It’s also a portfolio project that reflects real backend development patterns you’d expect in professional applications.

And yes, it involved a lot of debugging late at night.

Current status

Authentication: Done

Security framework: Done

API structure: Done

Projects & tasks: In progress

File management: Planned
