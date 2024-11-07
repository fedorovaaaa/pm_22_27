import express from 'express';
import cors from 'cors';
const app = express();
const port = 8080;

app.use(cors());
app.get('/data', (req, res) => {
    res.json(
        {
            skills: [
    { "name": "Microsoft Word", "progress": "55%" },
    { "name": "Adobe Illustrator", "progress": "55%" },
    { "name": "Microsoft PowerPoint", "progress": "55%" },
    { "name": "Adobe Photoshop", "progress": "55%" }
  ],
            references: [
    {
      "name": "Michael R. Magee",
      "address": "4418 Bobcat Drive Southfield, MI 48034" 
    },
      {
        "name": "Travis M. Godinez",
        "address": "2755 Oakmound Drive, Chicago, IL 60605"
      }
  ],
            hobbies: [
    { "name": "Traveling" },
    { "name": "Playing Football"}
  ],
           hobby: [
    { "name": "Reading Books"}
  ]
    }
    );
});
app.listen(port, () => {
    console.log(`Server works on http://localhost:${port}`);
});