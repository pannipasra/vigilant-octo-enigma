import 'dotenv/config'
import app from './app'

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Check API is worked!');
});

app.listen(port, () => {
    console.log(`🌈Server is running at http://localhost:${port}⚡️`);
});
