const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/bus", async (req, res) => {
  try {
    const response = await fetch(
      "https://webservices.umoiq.com/api/pub/v1/agencies/sfmta-cis/stopcodes/13911/predictions?key=0be8ebd0284ce712a63f29dcaf7798c4"
    );
    const data = await response.json();
    res.json(data); // send it back to client
  } catch (err) {
    console.error("API error:", err);
    res.status(500).send("Error fetching predictions");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
