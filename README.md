##ProjectCamp Backend

ProjectCamp is a backend REST API built for team-based project collaboration. It focuses on real-world workflows where users have different responsibilities and permissions, instead of giving everyone the same level of access.

This project serves as a secure, scalable foundation for any project management frontend.

Why ProjectCamp Exists

Most project management tools treat all users the same. That might work early on, but as teams grow, it leads to confusion and poor access control.

ProjectCamp solves this by introducing role-based access control, ensuring users can only do what their role allows.

Role Structure

The system is built around three main roles:

Admin

Full system access

Can manage users and projects

Project Admin

Manages projects and tasks

Assigns work and updates project details

Member

Views assigned tasks

Updates task status and collaborates

Every API request is validated against the user’s role before being processed.

How the Backend Works

ProjectCamp acts as the middle layer between a frontend and the database.

A request is sent from the client

The API verifies authentication using JWT

The user’s role is checked

If authorized, the request is processed and stored

Otherwise, access is denied

This ensures both security and predictable behavior.

Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JSON Web Tokens (JWT)

Bcrypt

Nodemailer

Express Validator

CORS and centralized error handling

Features Implemented
Authentication & Security

User registration and login

JWT-based authentication

Email verification flow

Password reset functionality

Secure password hashing

Input validation and error handling

Role-Based Access Control

Admin, Project Admin, and Member roles

Permission checks on protected routes

User Management

User profiles

Email verification

Password management

Upcoming Features
Project Management

Create, update, and delete projects

Manage project members

Task Management

Create and assign tasks

Task status tracking (Todo, In Progress, Done)

Subtasks support

Update and delete tasks

Additional Features

Project notes

File uploads and attachments

Team invitations and role updates

Current Status

Authentication: Completed

Security framework: Completed

API structure: Completed

Projects & tasks: In progress

File management: Planned

Purpose of This Project

This project is built to understand how production-level backend systems are structured. It emphasizes security, scalability, and clean architecture.

It also serves as a portfolio project that demonstrates practical backend development skills beyond basic CRUD APIs.
