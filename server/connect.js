const mongoose=require("mongoose");

async function link(url) {
    await mongoose.connect(url);
}

module.exports={
    link,
}