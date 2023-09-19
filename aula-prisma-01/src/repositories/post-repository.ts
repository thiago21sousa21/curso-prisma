import db from "../database/database";
import { Post } from "../protocols/post-protocol";
import dayjs from 'dayjs'

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const result = await db.query<Post>(`
    SELECT * FROM ${TABLE_NAME} 
  `);

  return result.rows;
}

async function getPost(id: number) {
  const result = await db.query<Post>(`
    SELECT * FROM ${TABLE_NAME} WHERE id = $1
  `, [id]);

  return result.rows;
}

async function createPost(post: CreatePost) {
  let { username, title, content, date } = post;
  if(!date)date=dayjs().format('YYYY-MM-DD')
  const result = await db.query<Post>(`
    INSERT INTO ${TABLE_NAME} (username, title, body) VALUES ($1, $2, $3, $4)
  `, [username, title, content, date]);

  return result.rowCount;
}

async function deletePost(id: number) {
  const result = await db.query<Post>(`
    DELETE FROM ${TABLE_NAME} WHERE id = $1
  `, [id]);

  return result.rowCount;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;