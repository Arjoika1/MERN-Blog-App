import express from 'express';
import { uploadImage, getImage } from '../controller/imageController.js';
import upload from '../utils/upload.js';

import { createPost, getAllPosts,getPost,updatePost,deletePost } from '../controller/postController.js';
import { register, login } from '../controller/UserController.js';
import { deleteComment, getComments, newComment } from '../controller/commentController.js';
const router=express.Router();

router.post('/create',createPost);
router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

router.post('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);

router.post('/file/upload',upload.single('file'),uploadImage);

router.get('/file/:filename',getImage);

router.post("/register",register);
router.post("/login",login);

router.post("/comment/new",newComment);
router.get("/comments/:id", getComments);
router.delete("/comment/delete/:id",deleteComment);
export default router;
