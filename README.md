# ProjectCamp Backend

ProjectCamp is a backend REST API system designed for team collaboration on projects. Think of it like a digital project management tool where teams can organize their work, assign tasks, track progress, and stay connected - all through an API that other applications can connect to.

## The Problem It Solves

Most project management tools treat all users the same. Everyone gets equal access, which creates chaos. ProjectCamp solves this by implementing a role-based system where different team members have different permissions based on their role.

## How It Works

Imagine a company structure:

- **CEO (Admin):** Can create new projects, invite people, manage everything
- **Project Manager (Project Admin):** Can create tasks, assign work, manage project details
- **Team Member (Member):** Can view work, update their tasks, collaborate

When someone wants to do something (like create a project or update a task), they send a request to the API. The API checks: "Are you logged in? What's your role? Are you allowed to do this?" If yes, it happens. If no, it gets blocked.

## Technology Stack

- **Node.js:** The runtime environment.
- **Express.js:** The web application framework for handling requests.
- **MongoDB:** The NoSQL database for data storage.
- **JWT (JSON Web Tokens):** For secure user authentication.
- **Bcrypt:** For password encryption.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB.
- **Nodemailer:** For sending emails (e.g., verification, password resets).
- **Express Validator:** For data validation.

## Features

### Completed

-   **User Authentication System**
    -   User registration with email and password.
    -   User login and JWT generation.
    -   Secure password encryption.
    -   Email verification system.
    -   Password reset functionality.
-   **Role-Based Access Control (RBAC)**
    -   Differentiated permissions for different user roles (Admin, Project Admin, Member).
-   **Security Layers**
    -   JWT-based authentication.
    -   Password encryption.
    -   Input validation.
    -   CORS configuration.
    -   Centralized error handling.
-   **User Management**
    -   User profiles with avatars.
    -   Email verification status.
    -   Password management.

### Roadmap (To Be Built)

-   **Project Management**
    -   CRUD operations for projects.
    -   Project member management.
-   **Task Management**
    -   CRUD operations for tasks within projects.
    -   Task assignment.
    -   Task status tracking (Todo, In Progress, Done).
    -   Sub-task creation.
-   **Project Notes**
    -   CRUD operations for project-specific notes.
-   **File Attachments**
    -   File uploads for tasks.
    -   Secure file storage and management.
-   **Team Member Management**
    -   Invite members to projects.
    -   Manage member roles.
    -   Remove members from projects.

## Current Status

-   Authentication: ✅ Done
-   Security Framework: ✅ Done
-   API Structure: ✅ Done
-   Projects & Tasks: ⏳ In progress
-   File Management: ⏳ Coming soon

## Why This Project?

This project serves as a practical application for learning and demonstrating backend development concepts. It aims to solve a real-world problem of disorganized project collaboration by providing a structured, role-based system. It's a comprehensive portfolio piece showcasing an understanding of full-stack principles from the ground up.
