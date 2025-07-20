const VALID_API_KEYS = [
  // Put your valid API keys here or fetch from DB/file
  "UY-MM_X193173627293V"
  // add more keys as needed
];



  const { apiKey, arcuesLink } = req.body || {};

  if (!apiKey || !arcuesLink) {
    return res.status(400).json({ error: 'Missing apiKey or arcuesLink in request body' });
  }

  if (!VALID_API_KEYS.includes(apiKey)) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  // Check arcuesLink and respond with bypass URLs
  if (arcuesLink.includes('linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing')) {
    return res.status(200).json({ result: 'https://lootdest.com/s?qljL' });
  } else if (arcuesLink.includes('spdmteam.com/key-system-2?hwid=')) {
    return res.status(200).json({ result: 'https://loot-link.com/s?mYit' });
  } else if (arcuesLink.includes('spdmteam.com/key-system-3?hwid=')) {
    return res.status(200).json({ result: 'https://loot-link.com/s?qlbU' });
  } else {
    return res.status(400).json({ error: 'Unsupported link' });
  }
}
