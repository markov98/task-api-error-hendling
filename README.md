# Simple RESTful API with Node.js, Express, and TypeScript

## Build for a job application

## Setup

```bash
git clone https://github.com/markov98/task-simple-in-memory-api-for-item-manegement.git
cd task-simple-in-memory-api-for-item-manegement
npm install
npm run build
npm run start
```

## Developement:
```bash
npm run dev
```

## Endpoints:
**/items/**<br>
**GET** - Return all items.<br>
**POST** - Adds a new item.
Requires a JSON body in the format:
```json
{ "name": "Item Name" }
```
Returns the created item, including its generated **id**.
