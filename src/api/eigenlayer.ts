import axios from "axios";
import express from "express";

const router = express.Router();

type EigenLayerResponse = any;

router.get<{}, EigenLayerResponse>("/", async (req, res) => {
  // fetch from eigenlayer
  try {
    const response = await axios.get(
      `/clique-eigenlayer-api/campaign/eigenlayer/credentials`,
      {
        baseURL: "https://claims.eigenfoundation.org/",
        params: req.query,
      }
    );

    res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Error fetching data from eigenlayer" });
  }
});

export default router;
