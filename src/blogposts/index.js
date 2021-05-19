import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import uniqid from 'uniqid';

/*
****************** Blogposts CRUD ********************
1. CREATE → POST http://localhost:3001/blogposts (+ body)
2. READ → GET http://localhost:3001/blogposts (+ optional query parameters)
3. READ → GET http://localhost:3001/blogposts/:id
4. UPDATE → PUT http://localhost:3001/blogposts/:id (+ body)
5. DELETE → DELETE http://localhost:3001/blogposts/:id
*/
