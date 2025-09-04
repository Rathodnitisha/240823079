const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rathodnitisha90_db_us:123@mca.8xdpfgr.mongodb.net/song", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const Song = mongoose.model("Song", songSchema);
console.log("Song model created successfully");

Song.find()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

Song.find({ category: "Bollywood" })
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

// const newSong = new Song({
//   title: "Vandematram",
//   artist: "Arijit Singh",
//   category: "Patrotic",
//   album: "Patrotic",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2022,
// });

// const newSong = new Song({
//   title: "Preet Re",
//   artist: "Darshan Raval",
//   category: "Patrotic",
//   album: "Patrotic",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2025,
// });

const newSong = new Song({
  title: "suniya suniya",
  artist: "Arijit Singh",
  category: "Patrotic",
  album: "Patrotic",
  url: "https://open.spotify.com/track/5IWLDqsSnQgBjXGiryDtTk?si=4f2814bfc389457c",
  photo:
    "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
  year: 2022,
});

newSong
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });
