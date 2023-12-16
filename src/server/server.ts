// @ts-ignore
import express from "express";
// @ts-ignore
import os from "os";
import config from "./config";
import Config from "./config";
console.log(config);

//console.log(express);

const server = express();

// render any static asses
//server.use(express.static("dist"))

/*server.use("/", (req,res)=>{
    res.send("Hello Express")
})*/

// use to render html content
server.set("view engine", "ejs");

server.use("/page", (req, res) => {
    res.render("index", {
        content: "Ejs JS embed",
    });
})

server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`
    );
});