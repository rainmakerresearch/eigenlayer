import axios from "axios";
import express from "express";

const router = express.Router();

type EigenLayerResponse = any;

router.get<{}, EigenLayerResponse>("/", async (req, res) => {
  // fetch from eigenlayer
  const address = req.query.address as string;
  const response = await axios.get(
    `https://claims.eigenfoundation.org/clique-eigenlayer-api/campaign/eigenlayer/credentials?walletAddress=${address}`
  );

  res.json(response.data);
});

export default router;
