import axios from "axios";
import express from "express";

const router = express.Router();

type EigenLayerResponse = any;

router.get<{}, EigenLayerResponse>("/", async (req, res) => {
  // fetch from eigenlayer
  try {
    const address = req.query.address as string;
    const response = await axios.get(
      `https://claims.eigenfoundation.org/clique-eigenlayer-api/campaign/eigenlayer/credentials?walletAddress=${address}`
    );

    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Error fetching data from eigenlayer" });
  }
});

export default router;
