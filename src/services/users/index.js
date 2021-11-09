import express from "express"

import UserModel from "./schema.js"

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body) // here happens validation of req.body, if it is not ok Mongoose will throw a "ValidationError" (btw user is still not saved in db yet)
    const { _id } = await newUser.save() // this is the line in which the interaction with the db happens
    res.status(201).send({ _id })
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default usersRouter
