const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();

// 投稿作成API
router.post("/create", async (req, res) => {
  const { title, body } = req.body;
  const posts = await prisma.posts.create({
    data: {
      title: title,
      body: body,
    },
  });

  return res.json(posts);
});

// 全投稿表示API
router.get("/show", async (req, res) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

// 特定の投稿表示API
router.get("/show/:id", async (req, res) => {
  const { id } = req.params;
  const posts = await prisma.posts.findUnique({
    where: {
      id: Number(id),
    },
  });

  return res.json(posts);
});

// 投稿更新API
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const posts = await prisma.posts.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      body,
    },
  });

  return res.json(posts);
});

// 投稿削除API
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const posts = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  });

  return res.json(posts);
});

module.exports = router;
