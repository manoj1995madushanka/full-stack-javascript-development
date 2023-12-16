// @ts-ignore
import express from "express";

//console.log(express);

const server = express();

// render any static asses
//server.use(express.static("dist"))

/*server.use("/", (req,res)=>{
    res.send("Hello Express")
})*/

// use to render html content
server.set("view engine","ejs");

server.use("/page",(req,res)=>{
    res.render("index", {
        content: "Ejs JS embed",
    });
})

server.listen(8080, "0.0.0.0", () => {
    console.info("Express server is listening at localhost");
});