const common = require("@monorepo/common")
const express = require("express")

const app = express();

app.use(express.json())

app.get("/api-test", common.middlewares.logRequest, (req, res) => {
    common.logger.info(`Make request for ${req.url} verb http ${req.method}`)
    return res.json({ message: "Hi, world!!! Api 2" })
})

app.listen(3001, () => console.log(`Server is running at http://localhost:3001`))