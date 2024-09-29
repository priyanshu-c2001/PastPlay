const { ensureBucketReady } = require("../lib/gridFsConfig");

async function homePage(req, res) {
  res.render("index");
}

async function moviePage(req, res) {
  res.render("movies", {
    user: req.user,
  });
}

async function renderEpisodes(req, res) {
  try {
    const name = req.query.name ;    
    const gfsBucket = await ensureBucketReady(name);
    const files = await gfsBucket.find({}).toArray();
    res.status(200).json({
      success:true,
      files: files,
      names: name,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching files: " + error.message,
    });
  }
}

async function streaming(req, res) {
  try {
    const name=req.query.name;
    const gfsBucket = await ensureBucketReady(name);
    const files = await gfsBucket.find({ filename: req.params.filename }).toArray();
    if (!files.length) {
      return res.status(404).send('File not found');
    }

    const file = files[0];
    const range = req.headers.range;

    if (!range) {
      return res.status(400).send("Requires Range header");
    }

    const videoSize = file.length;
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": 'bytes',
      "Content-Length": contentLength,
      "Content-Type": file.contentType
    };

    res.writeHead(206, headers);

    const downloadStream = gfsBucket.openDownloadStreamByName(req.params.filename, {
      start,
      end: end + 1
    });

    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).send("Error streaming file: " + error.message);
  }
}

module.exports = {
  homePage,
  moviePage,
  renderEpisodes,
  streaming,
};
