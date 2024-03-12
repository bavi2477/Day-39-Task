# Mentor and Student Assignment API

This project implements a RESTful API for managing mentors and students. It includes functionalities to create mentors and students, assign mentors to students, and retrieve information about mentors and students.

## Setup

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
PORT=4000
MONGODBCONNECTIONSTRING=<mongodb+srv://bavithrasjh:hCnXkvIGJpgKXWar@cluster0.qykajtv.mongodb.net/ction_string>
```
### Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/bavi2477/Day-38-Task.git>

2. **Install dependencies**
   ```bash
   npm install

3. **Run the Application**
   ```bash
   npm start

## Usage

### API Endpoints

#### Mentor Endpoints

- **POST /menapi/create-mentor**: Create a new mentor.
- **POST /menapi/add-multiple-students**: Add multiple students to a mentor.
- **GET /menapi/students/:mentorId**: Get all students assigned to a particular mentor.

#### Student Endpoints

- **POST /stuapi/create-student**: Create a new student.
- **PUT /stuapi/assign-mentor/:studentId**: Assign a mentor to a student.
- **GET /stuapi/previous-mentor/:studentId**: Get the previous mentor assigned to a student.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
