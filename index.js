import express from 'express';

const app = express();
const PORT = 3000;

const nama = "Rachel";
const jurusan = "Teknik Informatika";

// Middleware untuk membaca JSON dari body request (penting untuk POST/PUT/PATCH)
app.use(express.json());

// Endpoint 1: Response HTML untuk Root ("/")
app.get('/', (req, res) => {
    res.send('<h1>Tugas Pemrograman Web 2</h1>');
});

// Endpoint 2: Response HTML untuk ("/AboutMe") dengan template card
app.get('/AboutMe', (req, res) => {
    const htmlCard = `
        <div style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f3f4f6;">
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; width: 300px;">
                <h2 style="margin: 0 0 10px 0; color: #1f2937;">${nama}</h2>
                <div style="height: 2px; background-color: #e5e7eb; margin-bottom: 15px;"></div>
                <p style="margin: 0; color: #4b5563; font-weight: 500;">Jurusan: ${jurusan}</p>
            </div>
        </div>
    `;
    res.send(htmlCard);
});

const userPath = '/user/rachel';

app.get(userPath, (req, res) => {
    res.status(200).json({ message: "Method GET berhasil", status: 200 });
});

app.post(userPath, (req, res) => {
    res.status(200).json({ message: "Method POST berhasil", status: 200, dataDikirim: req.body });
});

app.put(userPath, (req, res) => {
    res.status(200).json({ message: "Method PUT berhasil", status: 200, dataDikirim: req.body });
});

app.patch(userPath, (req, res) => {
    res.status(200).json({ message: "Method PATCH berhasil", status: 200, dataDikirim: req.body });
});

app.delete(userPath, (req, res) => {
    res.status(200).json({ message: "Method DELETE berhasil", status: 200 });
});

app.listen(PORT, () => {
    console.log(`Server menyala dan berjalan di http://localhost:/${PORT}`);
});