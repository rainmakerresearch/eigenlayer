import axios from "axios";
import express from "express";

const router = express.Router();

type EigenLayerResponse = any;

router.get<{}, EigenLayerResponse>("/claims", async (req, res) => {
  // fetch from eigenlayer
  try {
    const response = await axios.get(
      `/clique-eigenlayer-api/campaign/eigenlayer/credentials`,
      {
        baseURL: "https://claims.eigenfoundation.org/",
        params: req.query,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          // Cookie: "ai_user=FVsQajb9Cyiccpq7f+HmnN|2024-05-12T20:14:44.545Z",
          "If-None-Match": `W / "90a-xcTtN"",h5i2hbrorHLsa7Bx6kLsa0"`,
          "Sec-Ch-Ua": `"Chromium";v="124", "Brave";v="124", "Not-A.Brand";v="99"`,
          "Sec-Ch-Ua-Mobile": "?0",
          "Sec-Ch-Ua-Platform": `macOS`,
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "User-Agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`,
        },
      }
    );

    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Error fetching data from eigenlayer" });
  }
});

export default router;
