// this is to change out user call rate limit for the Moralis API

Moralis.settings.setAPIRateLimit({
    anonymous:1000, authenticated:2000, windowMs:60000
  })

  