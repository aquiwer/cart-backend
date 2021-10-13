import express from 'express';
import mongoose from 'mongoose';
import router from './router/router.js'
import fileUpload from 'express-fileupload'
import process from 'process';

const PORT = 2000;
const DB_URL = "mongodb+srv://user:userPassword@cluster0.wmipr.mongodb.net/cart-db?retryWrites=true&w=majority"
const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin)
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", ["PUT", "DELETE"]);
    next()
})

app.use( express.urlencoded( {
    extended: true,
    limit: '50mb'
} ) )
app.use(express.json({limit: '50mb', extended: true}));
app.use(fileUpload({}))
app.use('/static', express.static('static'));

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.use("/api", router)

const Start = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        app.listen(PORT, () => console.log("Working"))
    } catch (e) {
        console.log(e)
    }
}

Start()
