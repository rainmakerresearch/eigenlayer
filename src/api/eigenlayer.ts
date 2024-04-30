import axios from "axios";
import express from "express";

const router = express.Router();

type EigenLayerResponse = any;

router.get<{}, EigenLayerResponse>("/", async (req, res) => {
  // fetch from eigenlayer
  const response = await axios.get(
    "https://claims.eigenfoundation.org/clique-eigenlayer-api/campaign/eigenlayer/credentials?walletAddress=0x4daE741C81DABE5bb420FDC1bc91d2Ff6a41cf6e"
  );

  res.json(response.data);
});

export default router;
