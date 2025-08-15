const Router = require("express").Router()

const { errorPage }  = require("../controllers/main")
const MainRouter = require("./MainRoutes")
const AdminRouter = require("./AdminRoutes")

Router.use("/",MainRouter)
Router.use("/admin",AdminRouter)
Router.get("/*",errorPage)

module.exports = Router