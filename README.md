# To-Do List Application

This project is a simple "To-Do List" application using React for the front-end, Django for the back-end API, and Docker for containerization. It's designed for a live technical interview for full stack developers.

## Prerequisites

Before you begin, ensure you have installed the following on your system:

- Docker
- Docker Compose

## Project Structure

- `todo-react`: The React application for the front-end.
- `todo_backend`: The Django project for the back-end API.
- `docker-compose.yml`: Docker Compose file to orchestrate the setup.

## Setup Instructions

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone [URL of the repository]
cd [repository name]
```

### Running the Application

To run the application, use Docker Compose:

```bash
docker-compose up
```

This command builds and starts the containers for both the React and Django applications.

### Accessing the Application

Once the containers are running, the application will be accessible at:

- React Front-End: `http://localhost:3000`
- Django Back-End API: `http://localhost:8000`

## Development Guidelines

- Focus on functionality first before refining the UI.
- Keep the code clean, well-organized, and commented.
- Make sure to handle errors gracefully.

## Task Objectives

Your task is to:

1. Implement the front-end features using React.
2. Set up the back-end API with Django.
3. Dockerize the application for easy setup and deployment.

Refer to the provided task description for detailed requirements.

## Evaluation Criteria

You will be evaluated based on:

- Code quality and organization.
- Functionality of the application.
- Proper implementation of Docker.
- Ability to handle errors and edge cases.

Good luck with your interview!

## License

This project is licensed under the [MIT License](LICENSE).
