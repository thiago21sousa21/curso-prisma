import dotenv from 'dotenv'
dotenv.config()
import prisma from "./database/database";

(async () => {
  const posts = await prisma.posts.findMany()

  console.log("Posts encontrados no banco:", posts);
})();