/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/the_trench.json`.
 */
export type TheTrench = {
  "address": "6fs4qcRYSdR8pd2ZPoAmLpthrqZR94Dhf6J4PLvtqQt1",
  "metadata": {
    "name": "theTrench",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "On-chain rug registry with tiered token-gated access"
  },
  "instructions": [
    {
      "name": "acceptMatch",
      "docs": [
        "Accept a PVP match as challenger"
      ],
      "discriminator": [
        47,
        107,
        76,
        149,
        208,
        223,
        186,
        191
      ],
      "accounts": [
        {
          "name": "killboxConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  105,
                  108,
                  108,
                  98,
                  111,
                  120,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "match_account.creator",
                "account": "match"
              },
              {
                "kind": "account",
                "path": "match_account.match_index",
                "account": "match"
              }
            ]
          }
        },
        {
          "name": "matchVault",
          "docs": [
            "Match vault holding escrowed bets"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "matchAccount"
              }
            ]
          }
        },
        {
          "name": "challengerSniper",
          "docs": [
            "Challenger's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier check"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "challenger"
              }
            ]
          }
        },
        {
          "name": "fighterStats",
          "docs": [
            "Initialize fighter stats if first match"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "challenger"
              }
            ]
          }
        },
        {
          "name": "tokenAPriceFeed",
          "docs": [
            "Pyth price feed for token A"
          ]
        },
        {
          "name": "tokenBPriceFeed",
          "docs": [
            "Pyth price feed for token B"
          ]
        },
        {
          "name": "challenger",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenB",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "banReporter",
      "docs": [
        "Ban a reporter for false reports"
      ],
      "discriminator": [
        94,
        64,
        165,
        222,
        37,
        253,
        42,
        43
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "reporterProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  112,
                  111,
                  114,
                  116,
                  101,
                  114,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "reporter_profile.wallet",
                "account": "reporterProfile"
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "config"
          ]
        }
      ],
      "args": [
        {
          "name": "reason",
          "type": "string"
        }
      ]
    },
    {
      "name": "bidForEarlyAccess",
      "docs": [
        "Bid for early signal access (Operator+)"
      ],
      "discriminator": [
        63,
        211,
        139,
        206,
        157,
        205,
        9,
        180
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "bidVault",
          "docs": [
            "Signal bid vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              }
            ]
          }
        },
        {
          "name": "bidAccount",
          "docs": [
            "Create or update bidder's bid account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              },
              {
                "kind": "account",
                "path": "bidder"
              }
            ]
          }
        },
        {
          "name": "previousBidderSniper",
          "docs": [
            "Previous highest bidder's token account (for refund)"
          ],
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderSniper",
          "docs": [
            "Bidder's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier check"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "bidder"
              }
            ]
          }
        },
        {
          "name": "bidder",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyListing",
      "docs": [
        "Buy a dead token listing"
      ],
      "discriminator": [
        115,
        149,
        42,
        108,
        44,
        49,
        140,
        153
      ],
      "accounts": [
        {
          "name": "buyer",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "buyerParticipant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "sellerParticipant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing.seller",
                "account": "deadTokenListing"
              }
            ]
          }
        },
        {
          "name": "listing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "listing.seller",
                "account": "deadTokenListing"
              },
              {
                "kind": "account",
                "path": "listing.listing_index",
                "account": "deadTokenListing"
              }
            ]
          }
        },
        {
          "name": "listingVault",
          "docs": [
            "Escrow vault holding the dead tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing"
              }
            ]
          }
        },
        {
          "name": "buyerSniperAccount",
          "docs": [
            "Buyer's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "sellerSniperAccount",
          "docs": [
            "Seller's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "buyerTokenAccount",
          "docs": [
            "Buyer's token account for the dead token"
          ],
          "writable": true
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint for burning"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "cancelGraveyardListing",
      "docs": [
        "Cancel a listing (seller only)"
      ],
      "discriminator": [
        35,
        149,
        251,
        153,
        220,
        154,
        190,
        155
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "participant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              }
            ]
          }
        },
        {
          "name": "listing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "listing.listing_index",
                "account": "deadTokenListing"
              }
            ]
          }
        },
        {
          "name": "listingVault",
          "docs": [
            "Escrow vault holding the dead tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing"
              }
            ]
          }
        },
        {
          "name": "sellerTokenAccount",
          "docs": [
            "Seller's token account to return tokens to"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "cancelMatch",
      "docs": [
        "Cancel an open match (creator only)"
      ],
      "discriminator": [
        142,
        136,
        247,
        45,
        92,
        112,
        180,
        83
      ],
      "accounts": [
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "match_account.creator",
                "account": "match"
              },
              {
                "kind": "account",
                "path": "match_account.match_index",
                "account": "match"
              }
            ]
          }
        },
        {
          "name": "matchVault",
          "docs": [
            "Match vault holding escrowed bets"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "matchAccount"
              }
            ]
          }
        },
        {
          "name": "creatorSniper",
          "docs": [
            "Creator's $SNIPER token account for refund"
          ],
          "writable": true
        },
        {
          "name": "creator",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "checkAccess",
      "docs": [
        "Check caller's access tier based on $SNIPER holdings"
      ],
      "discriminator": [
        74,
        62,
        42,
        188,
        96,
        229,
        63,
        50
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "userSniper",
          "docs": [
            "User's $SNIPER token account"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "claimSignalRevenue",
      "docs": [
        "Claim signal revenue as poster (70/15/15 split)"
      ],
      "discriminator": [
        8,
        42,
        44,
        163,
        168,
        229,
        231,
        139
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "bidVault",
          "docs": [
            "Signal bid vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              }
            ]
          }
        },
        {
          "name": "posterSniper",
          "docs": [
            "Poster's token account for revenue"
          ],
          "writable": true
        },
        {
          "name": "treasurySniper",
          "docs": [
            "Treasury token account"
          ],
          "writable": true
        },
        {
          "name": "posterStats",
          "docs": [
            "Poster's stats"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "poster"
              }
            ]
          }
        },
        {
          "name": "poster",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "claimTierUpgrade",
      "docs": [
        "Claim tier upgrade after staking more"
      ],
      "discriminator": [
        63,
        70,
        241,
        141,
        115,
        249,
        81,
        242
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "stakedPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "userSniper",
          "docs": [
            "User's $SNIPER token account (to check combined balance)"
          ]
        },
        {
          "name": "owner",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "claimWinnings",
      "docs": [
        "Claim winnings from a settled match"
      ],
      "discriminator": [
        161,
        215,
        24,
        59,
        14,
        236,
        242,
        221
      ],
      "accounts": [
        {
          "name": "killboxConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  105,
                  108,
                  108,
                  98,
                  111,
                  120,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "match_account.creator",
                "account": "match"
              },
              {
                "kind": "account",
                "path": "match_account.match_index",
                "account": "match"
              }
            ]
          }
        },
        {
          "name": "matchVault",
          "docs": [
            "Match vault holding escrowed bets"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "matchAccount"
              }
            ]
          }
        },
        {
          "name": "claimerSniper",
          "docs": [
            "Claimer's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "treasurySniper",
          "docs": [
            "Treasury token account for fee collection"
          ],
          "writable": true
        },
        {
          "name": "fighterStats",
          "docs": [
            "Claimer's fighter stats"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "claimer"
              }
            ]
          }
        },
        {
          "name": "claimer",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "clearRugEntry",
      "docs": [
        "Clear a rug entry (false positive remediation)"
      ],
      "discriminator": [
        137,
        204,
        243,
        230,
        222,
        25,
        72,
        8
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "rugEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  101,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "rug_entry.wallet",
                "account": "rugEntry"
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "config"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "createMatch",
      "docs": [
        "Create a new PVP match"
      ],
      "discriminator": [
        107,
        2,
        184,
        145,
        70,
        142,
        17,
        165
      ],
      "accounts": [
        {
          "name": "killboxConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  105,
                  108,
                  108,
                  98,
                  111,
                  120,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint"
          ]
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "arg",
                "path": "matchIndex"
              }
            ]
          }
        },
        {
          "name": "matchVault",
          "docs": [
            "Match vault to hold escrowed bets"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "matchAccount"
              }
            ]
          }
        },
        {
          "name": "fighterStats",
          "docs": [
            "Initialize fighter stats if first match"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  103,
                  104,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              }
            ]
          }
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "creatorSniper",
          "docs": [
            "Creator's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "matchIndex",
          "type": "u32"
        },
        {
          "name": "tokenA",
          "type": "pubkey"
        },
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "durationSecs",
          "type": "u32"
        }
      ]
    },
    {
      "name": "disputeReport",
      "docs": [
        "Dispute a report as false positive"
      ],
      "discriminator": [
        7,
        104,
        215,
        230,
        210,
        203,
        116,
        198
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "rugEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  101,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "rug_entry.wallet",
                "account": "rugEntry"
              }
            ]
          }
        },
        {
          "name": "rugReport",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  114,
                  101,
                  112,
                  111,
                  114,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "rug_report.target_wallet",
                "account": "rugReport"
              },
              {
                "kind": "account",
                "path": "rug_report.reporter",
                "account": "rugReport"
              },
              {
                "kind": "account",
                "path": "rug_report.report_index",
                "account": "rugReport"
              }
            ]
          }
        },
        {
          "name": "originalReporterProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  112,
                  111,
                  114,
                  116,
                  101,
                  114,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "rug_report.reporter",
                "account": "rugReport"
              }
            ]
          }
        },
        {
          "name": "disputerSniper",
          "docs": [
            "Disputer's $SNIPER token account"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "disputer"
              }
            ]
          }
        },
        {
          "name": "disputer",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "reason",
          "type": "string"
        }
      ]
    },
    {
      "name": "expireListing",
      "docs": [
        "Expire a stale listing (anyone can call)"
      ],
      "discriminator": [
        206,
        60,
        47,
        146,
        232,
        175,
        14,
        182
      ],
      "accounts": [
        {
          "name": "caller",
          "docs": [
            "Anyone can call this to clean up expired listings"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sellerParticipant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing.seller",
                "account": "deadTokenListing"
              }
            ]
          }
        },
        {
          "name": "listing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "listing.seller",
                "account": "deadTokenListing"
              },
              {
                "kind": "account",
                "path": "listing.listing_index",
                "account": "deadTokenListing"
              }
            ]
          }
        },
        {
          "name": "listingVault",
          "docs": [
            "Escrow vault holding the dead tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing"
              }
            ]
          }
        },
        {
          "name": "sellerTokenAccount",
          "docs": [
            "Seller's token account to return tokens to"
          ],
          "writable": true
        },
        {
          "name": "seller",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "expireMatch",
      "docs": [
        "Expire an unchallenged match after 24h"
      ],
      "discriminator": [
        147,
        238,
        215,
        217,
        165,
        172,
        145,
        23
      ],
      "accounts": [
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "match_account.creator",
                "account": "match"
              },
              {
                "kind": "account",
                "path": "match_account.match_index",
                "account": "match"
              }
            ]
          }
        },
        {
          "name": "matchVault",
          "docs": [
            "Match vault holding escrowed bets"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "matchAccount"
              }
            ]
          }
        },
        {
          "name": "creatorSniper",
          "docs": [
            "Creator's $SNIPER token account for refund"
          ],
          "writable": true
        },
        {
          "name": "expirer",
          "docs": [
            "Anyone can call expire after timeout"
          ],
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "finalizeAuction",
      "docs": [
        "Finalize auction after end time"
      ],
      "discriminator": [
        220,
        209,
        175,
        193,
        57,
        132,
        241,
        168
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "winningBid",
          "docs": [
            "Winner's bid account (optional, only if there was a winner)"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              },
              {
                "kind": "account",
                "path": "signal.highest_bidder",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "winningFlashBid",
          "docs": [
            "Winner's flash bid account (optional, if winner used flash bid)"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              },
              {
                "kind": "account",
                "path": "signal.highest_bidder",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "finalizer",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "flashBid",
      "docs": [
        "Flash loan bid with collateral (Operator+)"
      ],
      "discriminator": [
        8,
        181,
        142,
        86,
        172,
        152,
        78,
        233
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint"
          ]
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "bidVault",
          "docs": [
            "Signal bid vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              }
            ]
          }
        },
        {
          "name": "flashBid",
          "docs": [
            "Flash bid account"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              },
              {
                "kind": "account",
                "path": "bidder"
              }
            ]
          }
        },
        {
          "name": "collateralVault",
          "docs": [
            "Flash collateral vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "flashBid"
              }
            ]
          }
        },
        {
          "name": "blacklist",
          "docs": [
            "Check blacklist"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  108,
                  97,
                  99,
                  107,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bidder"
              }
            ]
          }
        },
        {
          "name": "previousBidderSniper",
          "docs": [
            "Previous highest bidder's token account (for refund)"
          ],
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderSniper",
          "docs": [
            "Bidder's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier check (no seeds constraint to avoid Option issues)"
          ],
          "optional": true
        },
        {
          "name": "bidder",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "bidAmount",
          "type": "u64"
        },
        {
          "name": "collateralAmount",
          "type": "u64"
        },
        {
          "name": "tradeToken",
          "type": "pubkey"
        },
        {
          "name": "tradeDirection",
          "type": {
            "defined": {
              "name": "tradeDirection"
            }
          }
        },
        {
          "name": "tradeAmountUsd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "docs": [
        "Initialize the registry with authority and $SNIPER mint"
      ],
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "sniperMint",
          "type": "pubkey"
        },
        {
          "name": "treasury",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeGraveyard",
      "docs": [
        "Initialize The Graveyard (dead token marketplace)"
      ],
      "discriminator": [
        84,
        161,
        73,
        164,
        126,
        180,
        123,
        127
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER token mint"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "entryFee",
          "type": "u64"
        },
        {
          "name": "burnFeeBps",
          "type": "u16"
        },
        {
          "name": "minListingPrice",
          "type": "u64"
        },
        {
          "name": "maxListingsPerUser",
          "type": "u16"
        },
        {
          "name": "listingDurationSecs",
          "type": "u32"
        }
      ]
    },
    {
      "name": "initializeKillbox",
      "docs": [
        "Initialize Kill Box arena"
      ],
      "discriminator": [
        175,
        6,
        33,
        188,
        161,
        174,
        138,
        216
      ],
      "accounts": [
        {
          "name": "killboxConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  105,
                  108,
                  108,
                  98,
                  111,
                  120,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "houseFeeBps",
          "type": "u16"
        },
        {
          "name": "minBetAmount",
          "type": "u64"
        },
        {
          "name": "maxBetAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeVelocity",
      "docs": [
        "Initialize Velocity Auctions"
      ],
      "discriminator": [
        231,
        3,
        42,
        47,
        251,
        141,
        108,
        78
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "oracle",
          "docs": [
            "Oracle signer (Rico's executor)"
          ]
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "minBid",
          "type": "u64"
        },
        {
          "name": "auctionDuration",
          "type": "u32"
        }
      ]
    },
    {
      "name": "listDeadToken",
      "docs": [
        "List dead tokens for sale"
      ],
      "discriminator": [
        210,
        129,
        119,
        45,
        235,
        189,
        72,
        62
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "participant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              }
            ]
          }
        },
        {
          "name": "listing",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "arg",
                "path": "listingIndex"
              }
            ]
          }
        },
        {
          "name": "tokenMint",
          "docs": [
            "The dead token mint"
          ]
        },
        {
          "name": "sellerTokenAccount",
          "docs": [
            "Seller's token account for the dead token"
          ],
          "writable": true
        },
        {
          "name": "listingVault",
          "docs": [
            "Escrow vault for the dead tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  105,
                  115,
                  116,
                  105,
                  110,
                  103,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "listing"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "listingIndex",
          "type": "u32"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "pricePerToken",
          "type": "u64"
        }
      ]
    },
    {
      "name": "postSignal",
      "docs": [
        "Post a new velocity signal (Warlord only)"
      ],
      "discriminator": [
        170,
        14,
        123,
        149,
        17,
        52,
        91,
        44
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "sniperMint"
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "poster"
              },
              {
                "kind": "arg",
                "path": "signalIndex"
              }
            ]
          }
        },
        {
          "name": "bidVault",
          "docs": [
            "Signal bid vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              }
            ]
          }
        },
        {
          "name": "posterStats",
          "docs": [
            "Initialize poster stats if first signal"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "poster"
              }
            ]
          }
        },
        {
          "name": "poster",
          "writable": true,
          "signer": true
        },
        {
          "name": "posterSniper",
          "docs": [
            "Poster's $SNIPER token account"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "poster"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "signalIndex",
          "type": "u32"
        },
        {
          "name": "caHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "signalType",
          "type": {
            "defined": {
              "name": "signalType"
            }
          }
        },
        {
          "name": "confidence",
          "type": "u8"
        },
        {
          "name": "metadata",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "queryBatch",
      "docs": [
        "Batch query multiple wallets (discounted)"
      ],
      "discriminator": [
        147,
        49,
        196,
        46,
        213,
        21,
        171,
        123
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "querierSniper",
          "docs": [
            "Querier's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "treasurySniper",
          "docs": [
            "Treasury token account to receive fees"
          ],
          "writable": true
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint for burning"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "querier"
              }
            ]
          }
        },
        {
          "name": "querier",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "wallets",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "querySignal",
      "docs": [
        "Query signal with tier-based access control"
      ],
      "discriminator": [
        96,
        138,
        114,
        76,
        158,
        102,
        27,
        94
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "signal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "bid",
          "docs": [
            "Querier's bid (optional, to check if auction winner)"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "signal"
              },
              {
                "kind": "account",
                "path": "querier"
              }
            ]
          }
        },
        {
          "name": "querierSniper",
          "docs": [
            "Querier's $SNIPER token account for tier check"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier check"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "querier"
              }
            ]
          }
        },
        {
          "name": "querier",
          "signer": true
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "signalAccess"
        }
      }
    },
    {
      "name": "queryWallet",
      "docs": [
        "Query a single wallet's reputation (pays fee based on tier)"
      ],
      "discriminator": [
        1,
        56,
        144,
        205,
        92,
        6,
        140,
        76
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "rugEntry",
          "docs": [
            "The wallet being queried"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  101,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "targetWallet"
              }
            ]
          }
        },
        {
          "name": "targetWallet"
        },
        {
          "name": "querierSniper",
          "docs": [
            "Querier's $SNIPER token account (for tier check + fee payment)"
          ],
          "writable": true
        },
        {
          "name": "treasurySniper",
          "docs": [
            "Treasury token account to receive fees"
          ],
          "writable": true
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint for burning"
          ],
          "writable": true
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "querier"
              }
            ]
          }
        },
        {
          "name": "querier",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "registerGraveyardParticipant",
      "docs": [
        "Register as Graveyard participant (pay 100 $SNIPER entry fee)"
      ],
      "discriminator": [
        163,
        111,
        147,
        72,
        129,
        5,
        24,
        233
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "participant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "userTokenAccount",
          "docs": [
            "User's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "sniperMint",
          "docs": [
            "Burn the entry fee (100% burn)"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "reportTradeOutcome",
      "docs": [
        "Report trade outcome for flash bid (oracle only)"
      ],
      "discriminator": [
        167,
        62,
        32,
        32,
        20,
        133,
        189,
        77
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "flashBid",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "flash_bid.signal",
                "account": "flashBid"
              },
              {
                "kind": "account",
                "path": "flash_bid.bidder",
                "account": "flashBid"
              }
            ]
          }
        },
        {
          "name": "oracle",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "tradePnl",
          "type": "i64"
        }
      ]
    },
    {
      "name": "revealSignal",
      "docs": [
        "Reveal signal contract address (poster only)"
      ],
      "discriminator": [
        224,
        171,
        21,
        85,
        195,
        253,
        227,
        240
      ],
      "accounts": [
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signal.poster",
                "account": "signal"
              },
              {
                "kind": "account",
                "path": "signal.signal_index",
                "account": "signal"
              }
            ]
          }
        },
        {
          "name": "posterStats",
          "docs": [
            "Poster stats to update"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  116,
                  101,
                  114,
                  95,
                  115,
                  116,
                  97,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "poster"
              }
            ]
          }
        },
        {
          "name": "poster",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "contractAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "settleFlashBid",
      "docs": [
        "Settle flash bid based on trade outcome"
      ],
      "discriminator": [
        206,
        20,
        95,
        111,
        204,
        18,
        25,
        203
      ],
      "accounts": [
        {
          "name": "velocityConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  108,
                  111,
                  99,
                  105,
                  116,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "registryConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "flashBid",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  105,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "flash_bid.signal",
                "account": "flashBid"
              },
              {
                "kind": "account",
                "path": "flash_bid.bidder",
                "account": "flashBid"
              }
            ]
          }
        },
        {
          "name": "collateralVault",
          "docs": [
            "Collateral vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "flashBid"
              }
            ]
          }
        },
        {
          "name": "bidVault",
          "docs": [
            "Signal bid vault (to pay the bid from)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  105,
                  100,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "flash_bid.signal",
                "account": "flashBid"
              }
            ]
          }
        },
        {
          "name": "bidderSniper",
          "docs": [
            "Bidder's token account (for collateral return)"
          ],
          "writable": true
        },
        {
          "name": "treasurySniper",
          "docs": [
            "Treasury for liquidated collateral"
          ],
          "writable": true
        },
        {
          "name": "blacklist",
          "docs": [
            "Create/update blacklist if liquidated"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  97,
                  115,
                  104,
                  95,
                  98,
                  108,
                  97,
                  99,
                  107,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "flash_bid.bidder",
                "account": "flashBid"
              }
            ]
          }
        },
        {
          "name": "settler",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "settleMatch",
      "docs": [
        "Settle a match after end time"
      ],
      "discriminator": [
        71,
        124,
        117,
        96,
        191,
        217,
        116,
        24
      ],
      "accounts": [
        {
          "name": "killboxConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  105,
                  108,
                  108,
                  98,
                  111,
                  120,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "matchAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "match_account.creator",
                "account": "match"
              },
              {
                "kind": "account",
                "path": "match_account.match_index",
                "account": "match"
              }
            ]
          }
        },
        {
          "name": "tokenAPriceFeed",
          "docs": [
            "Pyth price feed for token A"
          ]
        },
        {
          "name": "tokenBPriceFeed",
          "docs": [
            "Pyth price feed for token B"
          ]
        },
        {
          "name": "settler",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "docs": [
        "Stake $SNIPER for permanent tier access"
      ],
      "discriminator": [
        206,
        176,
        202,
        18,
        200,
        209,
        179,
        108
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "stakedPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "userSniper",
          "docs": [
            "User's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "stakeVault",
          "docs": [
            "Program's stake vault to hold staked tokens"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "lockDays",
          "type": "u16"
        }
      ]
    },
    {
      "name": "submitReport",
      "docs": [
        "Submit a new rug report"
      ],
      "discriminator": [
        27,
        178,
        64,
        9,
        20,
        46,
        250,
        14
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "targetWallet",
          "docs": [
            "The wallet being reported as a rugger"
          ]
        },
        {
          "name": "rugEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  101,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "targetWallet"
              }
            ]
          }
        },
        {
          "name": "rugReport",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  114,
                  101,
                  112,
                  111,
                  114,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "targetWallet"
              },
              {
                "kind": "account",
                "path": "reporter"
              },
              {
                "kind": "arg",
                "path": "reportIndex"
              }
            ]
          }
        },
        {
          "name": "reporterProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  112,
                  111,
                  114,
                  116,
                  101,
                  114,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "reporter"
              }
            ]
          }
        },
        {
          "name": "reporterSniper",
          "docs": [
            "Reporter's $SNIPER token account"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "reporter"
              }
            ]
          }
        },
        {
          "name": "reporter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "reportIndex",
          "type": "u32"
        },
        {
          "name": "evidenceType",
          "type": {
            "defined": {
              "name": "evidenceType"
            }
          }
        },
        {
          "name": "tokenCa",
          "type": {
            "option": "pubkey"
          }
        },
        {
          "name": "notes",
          "type": "string"
        }
      ]
    },
    {
      "name": "sweepFloor",
      "docs": [
        "Sweep floor - buy multiple listings in one tx (max 10)"
      ],
      "discriminator": [
        167,
        235,
        99,
        1,
        160,
        204,
        123,
        7
      ],
      "accounts": [
        {
          "name": "buyer",
          "writable": true,
          "signer": true
        },
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "buyerParticipant",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  114,
                  97,
                  118,
                  101,
                  121,
                  97,
                  114,
                  100,
                  95,
                  112,
                  97,
                  114,
                  116,
                  105,
                  99,
                  105,
                  112,
                  97,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "buyerSniperAccount",
          "docs": [
            "Buyer's $SNIPER token account"
          ],
          "writable": true
        },
        {
          "name": "sniperMint",
          "docs": [
            "$SNIPER mint for burning"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "numListings",
          "type": "u8"
        }
      ]
    },
    {
      "name": "unstake",
      "docs": [
        "Unstake $SNIPER after lock period"
      ],
      "discriminator": [
        90,
        95,
        107,
        42,
        205,
        124,
        50,
        225
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "stakedPosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "userSniper",
          "docs": [
            "User's $SNIPER token account to receive unstaked tokens"
          ],
          "writable": true
        },
        {
          "name": "stakeVault",
          "docs": [
            "Program's stake vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "updateFees",
      "docs": [
        "Update query fees per tier"
      ],
      "discriminator": [
        225,
        27,
        13,
        6,
        69,
        84,
        172,
        191
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "config"
          ]
        }
      ],
      "args": [
        {
          "name": "gruntFee",
          "type": "u64"
        },
        {
          "name": "operatorFee",
          "type": "u64"
        },
        {
          "name": "batchDiscountBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "updateThresholds",
      "docs": [
        "Update tier thresholds (Grunt/Operator/Warlord)"
      ],
      "discriminator": [
        226,
        118,
        123,
        37,
        77,
        185,
        74,
        74
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "config"
          ]
        }
      ],
      "args": [
        {
          "name": "gruntThreshold",
          "type": "u64"
        },
        {
          "name": "operatorThreshold",
          "type": "u64"
        },
        {
          "name": "warlordThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "validateReport",
      "docs": [
        "Validate another warlord's report"
      ],
      "discriminator": [
        8,
        240,
        150,
        112,
        144,
        120,
        169,
        233
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "rugEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  101,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "rug_entry.wallet",
                "account": "rugEntry"
              }
            ]
          }
        },
        {
          "name": "rugReport",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  117,
                  103,
                  95,
                  114,
                  101,
                  112,
                  111,
                  114,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "rug_report.target_wallet",
                "account": "rugReport"
              },
              {
                "kind": "account",
                "path": "rug_report.reporter",
                "account": "rugReport"
              },
              {
                "kind": "account",
                "path": "rug_report.report_index",
                "account": "rugReport"
              }
            ]
          }
        },
        {
          "name": "originalReporterProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  112,
                  111,
                  114,
                  116,
                  101,
                  114,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "rug_report.reporter",
                "account": "rugReport"
              }
            ]
          }
        },
        {
          "name": "validatorProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  112,
                  111,
                  114,
                  116,
                  101,
                  114,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "validator"
              }
            ]
          }
        },
        {
          "name": "validatorSniper",
          "docs": [
            "Validator's $SNIPER token account"
          ]
        },
        {
          "name": "stakedPosition",
          "docs": [
            "Optional staked position for tier calculation"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  100,
                  95,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "validator"
              }
            ]
          }
        },
        {
          "name": "validator",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "bid",
      "discriminator": [
        143,
        246,
        48,
        245,
        42,
        145,
        180,
        88
      ]
    },
    {
      "name": "deadTokenListing",
      "discriminator": [
        172,
        166,
        12,
        11,
        227,
        181,
        104,
        200
      ]
    },
    {
      "name": "fighterStats",
      "discriminator": [
        99,
        77,
        97,
        223,
        96,
        53,
        194,
        229
      ]
    },
    {
      "name": "flashBid",
      "discriminator": [
        183,
        43,
        234,
        95,
        53,
        136,
        185,
        242
      ]
    },
    {
      "name": "flashBlacklist",
      "discriminator": [
        199,
        184,
        70,
        106,
        244,
        160,
        122,
        218
      ]
    },
    {
      "name": "graveyardConfig",
      "discriminator": [
        50,
        169,
        231,
        73,
        36,
        208,
        160,
        47
      ]
    },
    {
      "name": "graveyardParticipant",
      "discriminator": [
        188,
        246,
        96,
        150,
        224,
        41,
        119,
        39
      ]
    },
    {
      "name": "killBoxConfig",
      "discriminator": [
        136,
        207,
        145,
        198,
        234,
        36,
        94,
        116
      ]
    },
    {
      "name": "match",
      "discriminator": [
        236,
        63,
        169,
        38,
        15,
        56,
        196,
        162
      ]
    },
    {
      "name": "registryConfig",
      "discriminator": [
        23,
        118,
        10,
        246,
        173,
        231,
        243,
        156
      ]
    },
    {
      "name": "reporterProfile",
      "discriminator": [
        0,
        27,
        60,
        101,
        3,
        191,
        150,
        190
      ]
    },
    {
      "name": "rugEntry",
      "discriminator": [
        197,
        18,
        57,
        156,
        135,
        18,
        60,
        194
      ]
    },
    {
      "name": "rugReport",
      "discriminator": [
        87,
        218,
        73,
        192,
        182,
        132,
        167,
        21
      ]
    },
    {
      "name": "signal",
      "discriminator": [
        20,
        6,
        227,
        69,
        183,
        62,
        78,
        246
      ]
    },
    {
      "name": "signalPosterStats",
      "discriminator": [
        228,
        250,
        170,
        197,
        25,
        208,
        113,
        2
      ]
    },
    {
      "name": "stakedPosition",
      "discriminator": [
        223,
        6,
        175,
        193,
        36,
        197,
        26,
        4
      ]
    },
    {
      "name": "velocityConfig",
      "discriminator": [
        159,
        79,
        65,
        245,
        157,
        223,
        158,
        168
      ]
    }
  ],
  "events": [
    {
      "name": "accessChecked",
      "discriminator": [
        210,
        144,
        150,
        23,
        67,
        148,
        152,
        244
      ]
    },
    {
      "name": "auctionFinalized",
      "discriminator": [
        136,
        160,
        117,
        237,
        77,
        211,
        136,
        28
      ]
    },
    {
      "name": "batchQueryRequested",
      "discriminator": [
        83,
        191,
        218,
        197,
        113,
        241,
        242,
        240
      ]
    },
    {
      "name": "bidPlaced",
      "discriminator": [
        135,
        53,
        176,
        83,
        193,
        69,
        108,
        61
      ]
    },
    {
      "name": "bidRefunded",
      "discriminator": [
        197,
        100,
        31,
        186,
        67,
        28,
        46,
        103
      ]
    },
    {
      "name": "feesUpdated",
      "discriminator": [
        65,
        34,
        234,
        59,
        248,
        242,
        101,
        118
      ]
    },
    {
      "name": "flashBidLiquidated",
      "discriminator": [
        241,
        186,
        110,
        244,
        51,
        49,
        195,
        67
      ]
    },
    {
      "name": "flashBidPlaced",
      "discriminator": [
        186,
        224,
        126,
        80,
        83,
        31,
        48,
        94
      ]
    },
    {
      "name": "flashBidSettled",
      "discriminator": [
        122,
        0,
        84,
        144,
        151,
        85,
        20,
        107
      ]
    },
    {
      "name": "killBoxInitialized",
      "discriminator": [
        68,
        179,
        55,
        152,
        96,
        131,
        218,
        167
      ]
    },
    {
      "name": "matchAccepted",
      "discriminator": [
        242,
        28,
        161,
        76,
        199,
        49,
        105,
        137
      ]
    },
    {
      "name": "matchCancelled",
      "discriminator": [
        99,
        86,
        22,
        122,
        82,
        247,
        60,
        113
      ]
    },
    {
      "name": "matchCreated",
      "discriminator": [
        151,
        176,
        11,
        24,
        34,
        225,
        227,
        16
      ]
    },
    {
      "name": "matchExpired",
      "discriminator": [
        39,
        60,
        224,
        231,
        10,
        30,
        50,
        250
      ]
    },
    {
      "name": "matchSettled",
      "discriminator": [
        243,
        201,
        134,
        151,
        193,
        131,
        223,
        150
      ]
    },
    {
      "name": "registryInitialized",
      "discriminator": [
        144,
        138,
        62,
        105,
        58,
        38,
        100,
        177
      ]
    },
    {
      "name": "reportDisputed",
      "discriminator": [
        15,
        188,
        5,
        217,
        135,
        8,
        52,
        233
      ]
    },
    {
      "name": "reportSubmitted",
      "discriminator": [
        30,
        14,
        109,
        53,
        161,
        40,
        129,
        244
      ]
    },
    {
      "name": "reportValidated",
      "discriminator": [
        66,
        14,
        153,
        53,
        248,
        44,
        68,
        35
      ]
    },
    {
      "name": "reporterBanned",
      "discriminator": [
        138,
        35,
        136,
        14,
        37,
        110,
        253,
        238
      ]
    },
    {
      "name": "rugEntryCleared",
      "discriminator": [
        155,
        85,
        48,
        129,
        54,
        116,
        152,
        149
      ]
    },
    {
      "name": "signalPosted",
      "discriminator": [
        172,
        206,
        216,
        199,
        145,
        73,
        179,
        184
      ]
    },
    {
      "name": "signalRevealed",
      "discriminator": [
        63,
        108,
        228,
        79,
        255,
        239,
        253,
        121
      ]
    },
    {
      "name": "signalRevenueClaimed",
      "discriminator": [
        48,
        244,
        97,
        11,
        185,
        11,
        46,
        144
      ]
    },
    {
      "name": "staked",
      "discriminator": [
        11,
        146,
        45,
        205,
        230,
        58,
        213,
        240
      ]
    },
    {
      "name": "thresholdsUpdated",
      "discriminator": [
        166,
        207,
        82,
        100,
        131,
        1,
        29,
        83
      ]
    },
    {
      "name": "tierUpgraded",
      "discriminator": [
        141,
        12,
        195,
        74,
        212,
        102,
        162,
        123
      ]
    },
    {
      "name": "tradeOutcomeReported",
      "discriminator": [
        72,
        82,
        161,
        195,
        192,
        81,
        175,
        225
      ]
    },
    {
      "name": "unstaked",
      "discriminator": [
        27,
        179,
        156,
        215,
        47,
        71,
        195,
        7
      ]
    },
    {
      "name": "velocityInitialized",
      "discriminator": [
        96,
        219,
        188,
        220,
        4,
        6,
        175,
        106
      ]
    },
    {
      "name": "walletQueried",
      "discriminator": [
        114,
        37,
        177,
        245,
        66,
        167,
        86,
        198
      ]
    },
    {
      "name": "winningsClaimed",
      "discriminator": [
        187,
        184,
        29,
        196,
        54,
        117,
        70,
        150
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "insufficientTier",
      "msg": "Insufficient $SNIPER holdings for this tier"
    },
    {
      "code": 6001,
      "name": "notGrunt",
      "msg": "User does not have Grunt tier access"
    },
    {
      "code": 6002,
      "name": "notOperator",
      "msg": "User does not have Operator tier access"
    },
    {
      "code": 6003,
      "name": "notWarlord",
      "msg": "User does not have Warlord tier access"
    },
    {
      "code": 6004,
      "name": "reporterBanned",
      "msg": "Reporter is banned from submitting reports"
    },
    {
      "code": 6005,
      "name": "invalidReportIndex",
      "msg": "Report index does not match expected value"
    },
    {
      "code": 6006,
      "name": "selfValidation",
      "msg": "Cannot validate your own report"
    },
    {
      "code": 6007,
      "name": "alreadyValidated",
      "msg": "Report has already been validated by this user"
    },
    {
      "code": 6008,
      "name": "alreadyDisputed",
      "msg": "Report has already been disputed"
    },
    {
      "code": 6009,
      "name": "noRugEntry",
      "msg": "Wallet has no rug entry to query"
    },
    {
      "code": 6010,
      "name": "stillLocked",
      "msg": "Staked position is still locked"
    },
    {
      "code": 6011,
      "name": "noStakedPosition",
      "msg": "No staked position found"
    },
    {
      "code": 6012,
      "name": "stakeTooLow",
      "msg": "Stake amount too low for any tier"
    },
    {
      "code": 6013,
      "name": "batchTooLarge",
      "msg": "Batch query exceeds maximum size (10)"
    },
    {
      "code": 6014,
      "name": "notesTooLong",
      "msg": "Notes exceed maximum length (256 chars)"
    },
    {
      "code": 6015,
      "name": "reasonTooLong",
      "msg": "Reason exceeds maximum length (128 chars)"
    },
    {
      "code": 6016,
      "name": "unauthorized",
      "msg": "Unauthorized: not the program authority"
    },
    {
      "code": 6017,
      "name": "invalidTokenMint",
      "msg": "Invalid token account - must be $SNIPER"
    },
    {
      "code": 6018,
      "name": "invalidTokenOwner",
      "msg": "Invalid token account owner"
    },
    {
      "code": 6019,
      "name": "invalidTokenAccount",
      "msg": "Invalid token account data"
    },
    {
      "code": 6020,
      "name": "mathOverflow",
      "msg": "Math overflow occurred"
    },
    {
      "code": 6021,
      "name": "rugEntryInactive",
      "msg": "Rug entry is inactive/cleared"
    },
    {
      "code": 6022,
      "name": "betTooLow",
      "msg": "Match bet amount below minimum"
    },
    {
      "code": 6023,
      "name": "betTooHigh",
      "msg": "Match bet amount exceeds maximum"
    },
    {
      "code": 6024,
      "name": "durationTooShort",
      "msg": "Match duration below minimum (5 min)"
    },
    {
      "code": 6025,
      "name": "durationTooLong",
      "msg": "Match duration exceeds maximum (24 hours)"
    },
    {
      "code": 6026,
      "name": "matchNotOpen",
      "msg": "Match is not in Open status"
    },
    {
      "code": 6027,
      "name": "matchNotActive",
      "msg": "Match is not in Active status"
    },
    {
      "code": 6028,
      "name": "matchNotEnded",
      "msg": "Match has not reached end time yet"
    },
    {
      "code": 6029,
      "name": "matchAlreadySettled",
      "msg": "Match has already been settled"
    },
    {
      "code": 6030,
      "name": "selfChallenge",
      "msg": "Cannot accept your own match"
    },
    {
      "code": 6031,
      "name": "alreadyClaimed",
      "msg": "Winnings have already been claimed"
    },
    {
      "code": 6032,
      "name": "notParticipant",
      "msg": "Not a participant in this match"
    },
    {
      "code": 6033,
      "name": "notWinner",
      "msg": "Only winner can claim winnings"
    },
    {
      "code": 6034,
      "name": "notMatchCreator",
      "msg": "Only match creator can cancel"
    },
    {
      "code": 6035,
      "name": "matchNotExpired",
      "msg": "Match has not expired yet (24h timeout)"
    },
    {
      "code": 6036,
      "name": "stalePriceFeed",
      "msg": "Price feed is stale (>60 seconds old)"
    },
    {
      "code": 6037,
      "name": "invalidPriceFeed",
      "msg": "Invalid price feed account"
    },
    {
      "code": 6038,
      "name": "sameToken",
      "msg": "Token A and Token B cannot be the same"
    },
    {
      "code": 6039,
      "name": "bidTooLow",
      "msg": "Signal bid below minimum"
    },
    {
      "code": 6040,
      "name": "bidNotHighEnough",
      "msg": "Bid must exceed current highest bid"
    },
    {
      "code": 6041,
      "name": "auctionEnded",
      "msg": "Auction has already ended"
    },
    {
      "code": 6042,
      "name": "auctionNotEnded",
      "msg": "Auction has not ended yet"
    },
    {
      "code": 6043,
      "name": "auctionAlreadyFinalized",
      "msg": "Auction has already been finalized"
    },
    {
      "code": 6044,
      "name": "signalAlreadyRevealed",
      "msg": "Signal has already been revealed"
    },
    {
      "code": 6045,
      "name": "hashMismatch",
      "msg": "Hash does not match revealed contract address"
    },
    {
      "code": 6046,
      "name": "revenueAlreadyClaimed",
      "msg": "Revenue has already been claimed"
    },
    {
      "code": 6047,
      "name": "signalNotRevealing",
      "msg": "Signal is not in Revealing status"
    },
    {
      "code": 6048,
      "name": "signalNotRevealedYet",
      "msg": "Access denied - signal not yet revealed for your tier"
    },
    {
      "code": 6049,
      "name": "notSignalPoster",
      "msg": "Only signal poster can reveal"
    },
    {
      "code": 6050,
      "name": "signalCancelled",
      "msg": "Signal is cancelled"
    },
    {
      "code": 6051,
      "name": "insufficientCollateral",
      "msg": "Collateral below minimum (20% of bid)"
    },
    {
      "code": 6052,
      "name": "flashBidAlreadySettled",
      "msg": "Flash bid has already been settled"
    },
    {
      "code": 6053,
      "name": "flashBidNotWon",
      "msg": "Flash bid is not in Won status"
    },
    {
      "code": 6054,
      "name": "tradeOutcomeAlreadyReported",
      "msg": "Trade outcome already reported"
    },
    {
      "code": 6055,
      "name": "notOracle",
      "msg": "Not authorized as oracle"
    },
    {
      "code": 6056,
      "name": "flashBidBlacklisted",
      "msg": "Bidder is blacklisted from flash loans"
    },
    {
      "code": 6057,
      "name": "invalidTradeDirection",
      "msg": "Invalid trade direction"
    },
    {
      "code": 6058,
      "name": "notGraveyardParticipant",
      "msg": "Not registered as Graveyard participant"
    },
    {
      "code": 6059,
      "name": "alreadyGraveyardParticipant",
      "msg": "Already registered as Graveyard participant"
    },
    {
      "code": 6060,
      "name": "listingPriceTooLow",
      "msg": "Listing price below minimum"
    },
    {
      "code": 6061,
      "name": "listingNotActive",
      "msg": "Listing is not active"
    },
    {
      "code": 6062,
      "name": "listingExpired",
      "msg": "Listing has expired"
    },
    {
      "code": 6063,
      "name": "notListingSeller",
      "msg": "Not the listing seller"
    },
    {
      "code": 6064,
      "name": "listingNotExpired",
      "msg": "Listing has not expired yet"
    },
    {
      "code": 6065,
      "name": "sweepTooLarge",
      "msg": "Too many listings in sweep (max 10)"
    },
    {
      "code": 6066,
      "name": "zeroTokenAmount",
      "msg": "Token amount must be greater than zero"
    }
  ],
  "types": [
    {
      "name": "accessChecked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "tier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "walletBalance",
            "type": "u64"
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          },
          {
            "name": "effectiveStaked",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "accessReason",
      "docs": [
        "Reason for access grant"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "poster"
          },
          {
            "name": "warlordTier"
          },
          {
            "name": "auctionWinner"
          },
          {
            "name": "operatorDelay"
          },
          {
            "name": "publicReveal"
          }
        ]
      }
    },
    {
      "name": "accessTier",
      "docs": [
        "Access tier levels"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "grunt"
          },
          {
            "name": "operator"
          },
          {
            "name": "warlord"
          }
        ]
      }
    },
    {
      "name": "auctionFinalized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "winner",
            "type": "pubkey"
          },
          {
            "name": "winningBid",
            "type": "u64"
          },
          {
            "name": "bidCount",
            "type": "u16"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "batchQueryRequested",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "querier",
            "type": "pubkey"
          },
          {
            "name": "wallets",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "tier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "feePaid",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bid",
      "docs": [
        "Bid for early signal access",
        "PDA seeds: [\"bid\", signal.key(), bidder]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signal",
            "docs": [
              "Signal this bid is for"
            ],
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "docs": [
              "Bidder's wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "amount",
            "docs": [
              "Bid amount in $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "bidAt",
            "docs": [
              "When bid was placed"
            ],
            "type": "i64"
          },
          {
            "name": "refunded",
            "docs": [
              "Whether bid has been refunded (outbid)"
            ],
            "type": "bool"
          },
          {
            "name": "isWinner",
            "docs": [
              "Whether this bid won the auction"
            ],
            "type": "bool"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "bidPlaced",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "previousHighBid",
            "type": "u64"
          },
          {
            "name": "previousBidder",
            "type": "pubkey"
          },
          {
            "name": "isFlashBid",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bidRefunded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "deadTokenListing",
      "docs": [
        "A listing of dead tokens for sale"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seller",
            "docs": [
              "Seller wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "listingIndex",
            "docs": [
              "Listing index for this seller"
            ],
            "type": "u32"
          },
          {
            "name": "tokenMint",
            "docs": [
              "Token mint being sold"
            ],
            "type": "pubkey"
          },
          {
            "name": "amount",
            "docs": [
              "Amount of tokens listed"
            ],
            "type": "u64"
          },
          {
            "name": "pricePerToken",
            "docs": [
              "Price per token in $SNIPER (scaled 1e9)"
            ],
            "type": "u64"
          },
          {
            "name": "totalPrice",
            "docs": [
              "Total price for entire listing"
            ],
            "type": "u64"
          },
          {
            "name": "status",
            "docs": [
              "Current status"
            ],
            "type": {
              "defined": {
                "name": "listingStatus"
              }
            }
          },
          {
            "name": "listedAt",
            "docs": [
              "When listing was created"
            ],
            "type": "i64"
          },
          {
            "name": "expiresAt",
            "docs": [
              "When listing expires"
            ],
            "type": "i64"
          },
          {
            "name": "soldAt",
            "docs": [
              "When listing was sold (if sold)"
            ],
            "type": "i64"
          },
          {
            "name": "buyer",
            "docs": [
              "Buyer wallet (if sold)"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "docs": [
              "Vault bump for token escrow"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "evidenceType",
      "docs": [
        "Types of evidence for rug reports"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "lpPull"
          },
          {
            "name": "mintAuthority"
          },
          {
            "name": "honeypot"
          },
          {
            "name": "freezeAuthority"
          },
          {
            "name": "teamDump"
          },
          {
            "name": "slowRug"
          },
          {
            "name": "abandoned"
          },
          {
            "name": "other"
          }
        ]
      }
    },
    {
      "name": "feesUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "gruntFee",
            "type": "u64"
          },
          {
            "name": "operatorFee",
            "type": "u64"
          },
          {
            "name": "batchDiscountBps",
            "type": "u16"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "fighterStats",
      "docs": [
        "Fighter stats for leaderboard tracking",
        "PDA seeds: [\"fighter_stats\", wallet]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "Fighter's wallet address"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalMatches",
            "docs": [
              "Total matches participated in"
            ],
            "type": "u32"
          },
          {
            "name": "wins",
            "docs": [
              "Total wins"
            ],
            "type": "u32"
          },
          {
            "name": "losses",
            "docs": [
              "Total losses"
            ],
            "type": "u32"
          },
          {
            "name": "draws",
            "docs": [
              "Total draws"
            ],
            "type": "u32"
          },
          {
            "name": "totalWon",
            "docs": [
              "Total $SNIPER won"
            ],
            "type": "u64"
          },
          {
            "name": "totalLost",
            "docs": [
              "Total $SNIPER lost"
            ],
            "type": "u64"
          },
          {
            "name": "winRateBps",
            "docs": [
              "Win rate in basis points (5000 = 50%)"
            ],
            "type": "u16"
          },
          {
            "name": "currentStreak",
            "docs": [
              "Current win streak"
            ],
            "type": "u16"
          },
          {
            "name": "bestStreak",
            "docs": [
              "Best win streak ever"
            ],
            "type": "u16"
          },
          {
            "name": "coupDeGraceWins",
            "docs": [
              "Coup de Grace wins (domination victories)"
            ],
            "type": "u32"
          },
          {
            "name": "totalCoupDeGraceBonus",
            "docs": [
              "Total Coup de Grace bonus earned"
            ],
            "type": "u64"
          },
          {
            "name": "firstMatchAt",
            "docs": [
              "Timestamp of first match"
            ],
            "type": "i64"
          },
          {
            "name": "lastMatchAt",
            "docs": [
              "Timestamp of last match"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "flashBid",
      "docs": [
        "Flash loan bid - bid with future trade proceeds",
        "PDA seeds: [\"flash_bid\", signal.key(), bidder]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signal",
            "docs": [
              "Signal this flash bid is for"
            ],
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "docs": [
              "Bidder's wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "bidAmount",
            "docs": [
              "Total bid amount (leveraged)"
            ],
            "type": "u64"
          },
          {
            "name": "collateralAmount",
            "docs": [
              "Collateral deposited (20% min)"
            ],
            "type": "u64"
          },
          {
            "name": "tradeToken",
            "docs": [
              "Token they intend to trade"
            ],
            "type": "pubkey"
          },
          {
            "name": "tradeDirection",
            "docs": [
              "Expected trade direction"
            ],
            "type": {
              "defined": {
                "name": "tradeDirection"
              }
            }
          },
          {
            "name": "tradeAmountUsd",
            "docs": [
              "Expected trade size in USD (scaled 1e6)"
            ],
            "type": "u64"
          },
          {
            "name": "interestRateBps",
            "docs": [
              "Interest rate at time of bid (basis points)"
            ],
            "type": "u16"
          },
          {
            "name": "status",
            "docs": [
              "Current flash bid status"
            ],
            "type": {
              "defined": {
                "name": "flashBidStatus"
              }
            }
          },
          {
            "name": "tradePnl",
            "docs": [
              "Trade P&L reported by oracle (scaled 1e6, can be negative)"
            ],
            "type": "i64"
          },
          {
            "name": "bidAt",
            "docs": [
              "When bid was placed"
            ],
            "type": "i64"
          },
          {
            "name": "outcomeReportedAt",
            "docs": [
              "When trade outcome was reported"
            ],
            "type": "i64"
          },
          {
            "name": "settledAt",
            "docs": [
              "When flash bid was settled"
            ],
            "type": "i64"
          },
          {
            "name": "settlementAmount",
            "docs": [
              "Amount deducted (bid + interest) or liquidated"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "flashBidLiquidated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flashBidKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "collateralLost",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "flashBidPlaced",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "bidAmount",
            "type": "u64"
          },
          {
            "name": "collateralAmount",
            "type": "u64"
          },
          {
            "name": "tradeToken",
            "type": "pubkey"
          },
          {
            "name": "tradeDirection",
            "type": {
              "defined": {
                "name": "tradeDirection"
              }
            }
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "flashBidSettled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flashBidKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "flashBidStatus"
              }
            }
          },
          {
            "name": "settlementAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "flashBidStatus",
      "docs": [
        "Flash bid status"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pending"
          },
          {
            "name": "won"
          },
          {
            "name": "tradeExecuted"
          },
          {
            "name": "settled"
          },
          {
            "name": "liquidated"
          }
        ]
      }
    },
    {
      "name": "flashBlacklist",
      "docs": [
        "Flash bid blacklist entry",
        "PDA seeds: [\"flash_blacklist\", wallet]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "Blacklisted wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "expiresAt",
            "docs": [
              "When blacklist expires"
            ],
            "type": "i64"
          },
          {
            "name": "liquidationCount",
            "docs": [
              "Number of liquidations that led to blacklist"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "graveyardConfig",
      "docs": [
        "Global configuration for The Graveyard"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Program authority"
            ],
            "type": "pubkey"
          },
          {
            "name": "sniperMint",
            "docs": [
              "$SNIPER token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "entryFee",
            "docs": [
              "Entry fee to register (100 $SNIPER default)"
            ],
            "type": "u64"
          },
          {
            "name": "burnFeeBps",
            "docs": [
              "Burn fee in basis points (100 = 1%)"
            ],
            "type": "u16"
          },
          {
            "name": "minListingPrice",
            "docs": [
              "Minimum listing price (prevent true zero)"
            ],
            "type": "u64"
          },
          {
            "name": "maxListingsPerUser",
            "docs": [
              "Maximum active listings per user"
            ],
            "type": "u16"
          },
          {
            "name": "listingDurationSecs",
            "docs": [
              "Listing duration in seconds (30 days default)"
            ],
            "type": "u32"
          },
          {
            "name": "totalParticipants",
            "docs": [
              "Total registered participants"
            ],
            "type": "u64"
          },
          {
            "name": "totalListings",
            "docs": [
              "Total listings ever created"
            ],
            "type": "u64"
          },
          {
            "name": "activeListings",
            "docs": [
              "Currently active listings"
            ],
            "type": "u64"
          },
          {
            "name": "totalVolume",
            "docs": [
              "Total volume in $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "totalBurned",
            "docs": [
              "Total $SNIPER burned"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "graveyardParticipant",
      "docs": [
        "Graveyard participant (pays entry fee to access)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "Participant wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "registeredAt",
            "docs": [
              "Registration timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "activeListings",
            "docs": [
              "Current active listing count"
            ],
            "type": "u16"
          },
          {
            "name": "totalListings",
            "docs": [
              "Total listings created"
            ],
            "type": "u32"
          },
          {
            "name": "totalPurchases",
            "docs": [
              "Total purchases made"
            ],
            "type": "u32"
          },
          {
            "name": "totalSales",
            "docs": [
              "Total sales completed"
            ],
            "type": "u32"
          },
          {
            "name": "volumeBought",
            "docs": [
              "Volume bought in $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "volumeSold",
            "docs": [
              "Volume sold in $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "killBoxConfig",
      "docs": [
        "Kill Box global configuration",
        "PDA seeds: [\"killbox_config\"]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Program authority"
            ],
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "docs": [
              "Treasury for fee collection"
            ],
            "type": "pubkey"
          },
          {
            "name": "houseFeeBps",
            "docs": [
              "House fee in basis points (500 = 5%)"
            ],
            "type": "u16"
          },
          {
            "name": "minBetAmount",
            "docs": [
              "Minimum bet amount in $SNIPER base units"
            ],
            "type": "u64"
          },
          {
            "name": "maxBetAmount",
            "docs": [
              "Maximum bet amount in $SNIPER base units"
            ],
            "type": "u64"
          },
          {
            "name": "minDurationSecs",
            "docs": [
              "Minimum match duration in seconds (300 = 5 min)"
            ],
            "type": "u32"
          },
          {
            "name": "maxDurationSecs",
            "docs": [
              "Maximum match duration in seconds (86400 = 24 hours)"
            ],
            "type": "u32"
          },
          {
            "name": "settlementGracePeriod",
            "docs": [
              "Grace period for settlement after match ends (seconds)"
            ],
            "type": "u32"
          },
          {
            "name": "claimTimeout",
            "docs": [
              "Timeout for claiming winnings (seconds)"
            ],
            "type": "u32"
          },
          {
            "name": "coupDeGraceThresholdBps",
            "docs": [
              "Coup de Grace threshold in basis points (1000 = 10%)"
            ],
            "type": "u16"
          },
          {
            "name": "coupDeGraceBonusBps",
            "docs": [
              "Coup de Grace bonus in basis points (100 = 1%)"
            ],
            "type": "u16"
          },
          {
            "name": "totalMatches",
            "docs": [
              "Total matches created"
            ],
            "type": "u64"
          },
          {
            "name": "totalVolume",
            "docs": [
              "Total betting volume"
            ],
            "type": "u64"
          },
          {
            "name": "totalFees",
            "docs": [
              "Total fees collected"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesBurned",
            "docs": [
              "Total fees burned"
            ],
            "type": "u64"
          },
          {
            "name": "initializedAt",
            "docs": [
              "Timestamp of initialization"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "killBoxInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "houseFeeBps",
            "type": "u16"
          },
          {
            "name": "minBetAmount",
            "type": "u64"
          },
          {
            "name": "maxBetAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "listingStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "active"
          },
          {
            "name": "sold"
          },
          {
            "name": "cancelled"
          },
          {
            "name": "expired"
          }
        ]
      }
    },
    {
      "name": "match",
      "docs": [
        "PVP Match for token performance duels",
        "PDA seeds: [\"match\", creator, match_index.to_le_bytes()]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "docs": [
              "Match creator's wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "matchIndex",
            "docs": [
              "Creator's match index (increments per creator)"
            ],
            "type": "u32"
          },
          {
            "name": "challenger",
            "docs": [
              "Challenger's wallet (set when accepted)"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenA",
            "docs": [
              "Token A (creator's chosen token)"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenB",
            "docs": [
              "Token B (challenger's chosen token)"
            ],
            "type": "pubkey"
          },
          {
            "name": "betAmount",
            "docs": [
              "Bet amount per participant"
            ],
            "type": "u64"
          },
          {
            "name": "durationSecs",
            "docs": [
              "Match duration in seconds"
            ],
            "type": "u32"
          },
          {
            "name": "status",
            "docs": [
              "Current match status"
            ],
            "type": {
              "defined": {
                "name": "matchStatus"
              }
            }
          },
          {
            "name": "createdAt",
            "docs": [
              "Timestamp when match was created"
            ],
            "type": "i64"
          },
          {
            "name": "acceptedAt",
            "docs": [
              "Timestamp when match was accepted"
            ],
            "type": "i64"
          },
          {
            "name": "endTime",
            "docs": [
              "Timestamp when match ends"
            ],
            "type": "i64"
          },
          {
            "name": "settledAt",
            "docs": [
              "Timestamp when match was settled"
            ],
            "type": "i64"
          },
          {
            "name": "tokenAStartPrice",
            "docs": [
              "Token A price at match start"
            ],
            "type": "u64"
          },
          {
            "name": "tokenBStartPrice",
            "docs": [
              "Token B price at match start"
            ],
            "type": "u64"
          },
          {
            "name": "tokenAEndPrice",
            "docs": [
              "Token A price at match end"
            ],
            "type": "u64"
          },
          {
            "name": "tokenBEndPrice",
            "docs": [
              "Token B price at match end"
            ],
            "type": "u64"
          },
          {
            "name": "tokenAPctChange",
            "docs": [
              "Token A percentage change (scaled by 100, so 1500 = 15.00%)"
            ],
            "type": "i32"
          },
          {
            "name": "tokenBPctChange",
            "docs": [
              "Token B percentage change (scaled by 100)"
            ],
            "type": "i32"
          },
          {
            "name": "winner",
            "docs": [
              "Match winner"
            ],
            "type": {
              "defined": {
                "name": "matchWinner"
              }
            }
          },
          {
            "name": "creatorClaimed",
            "docs": [
              "Whether creator has claimed"
            ],
            "type": "bool"
          },
          {
            "name": "challengerClaimed",
            "docs": [
              "Whether challenger has claimed"
            ],
            "type": "bool"
          },
          {
            "name": "coupDeGrace",
            "docs": [
              "True if winner won by >10% gap (domination)"
            ],
            "type": "bool"
          },
          {
            "name": "coupDeGraceBonus",
            "docs": [
              "Bonus amount from house fee for domination wins"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "matchAccepted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "challenger",
            "type": "pubkey"
          },
          {
            "name": "tokenA",
            "type": "pubkey"
          },
          {
            "name": "tokenB",
            "type": "pubkey"
          },
          {
            "name": "tokenAStartPrice",
            "type": "u64"
          },
          {
            "name": "tokenBStartPrice",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "matchCancelled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "betReturned",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "matchCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "matchIndex",
            "type": "u32"
          },
          {
            "name": "tokenA",
            "type": "pubkey"
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "durationSecs",
            "type": "u32"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "matchExpired",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "betReturned",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "matchSettled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "winner",
            "type": {
              "defined": {
                "name": "matchWinner"
              }
            }
          },
          {
            "name": "tokenAPctChange",
            "type": "i32"
          },
          {
            "name": "tokenBPctChange",
            "type": "i32"
          },
          {
            "name": "coupDeGrace",
            "type": "bool"
          },
          {
            "name": "coupDeGraceBonus",
            "type": "u64"
          },
          {
            "name": "houseFee",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "matchStatus",
      "docs": [
        "Match status for PVP duels"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "open"
          },
          {
            "name": "active"
          },
          {
            "name": "awaitingSettlement"
          },
          {
            "name": "settled"
          },
          {
            "name": "closed"
          }
        ]
      }
    },
    {
      "name": "matchWinner",
      "docs": [
        "Match winner designation"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "creator"
          },
          {
            "name": "challenger"
          },
          {
            "name": "draw"
          }
        ]
      }
    },
    {
      "name": "registryConfig",
      "docs": [
        "Global registry configuration",
        "PDA seeds: [\"registry_config\"]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Program authority (can update config, ban reporters)"
            ],
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "docs": [
              "Treasury wallet for fee collection (50% of fees)"
            ],
            "type": "pubkey"
          },
          {
            "name": "sniperMint",
            "docs": [
              "$SNIPER token mint address"
            ],
            "type": "pubkey"
          },
          {
            "name": "gruntThreshold",
            "docs": [
              "Grunt tier: 10K $SNIPER = 10_000_000_000 (with 6 decimals)"
            ],
            "type": "u64"
          },
          {
            "name": "operatorThreshold",
            "docs": [
              "Operator tier: 100K $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "warlordThreshold",
            "docs": [
              "Warlord tier: 1M $SNIPER"
            ],
            "type": "u64"
          },
          {
            "name": "gruntSingleFee",
            "docs": [
              "Single query fee for Grunt tier"
            ],
            "type": "u64"
          },
          {
            "name": "operatorSingleFee",
            "docs": [
              "Single query fee for Operator tier"
            ],
            "type": "u64"
          },
          {
            "name": "batchDiscountBps",
            "docs": [
              "Batch discount basis points (e.g., 2000 = 20% off)"
            ],
            "type": "u16"
          },
          {
            "name": "totalQueries",
            "docs": [
              "Total queries processed"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesCollected",
            "docs": [
              "Total fees collected (before burn)"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesBurned",
            "docs": [
              "Total fees burned (50% of collected)"
            ],
            "type": "u64"
          },
          {
            "name": "totalRugEntries",
            "docs": [
              "Total rug entries in registry"
            ],
            "type": "u64"
          },
          {
            "name": "totalReports",
            "docs": [
              "Total reports submitted"
            ],
            "type": "u64"
          },
          {
            "name": "initializedAt",
            "docs": [
              "Timestamp of initialization"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "registryInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "sniperMint",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "reportDisputed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetWallet",
            "type": "pubkey"
          },
          {
            "name": "reporter",
            "type": "pubkey"
          },
          {
            "name": "disputer",
            "type": "pubkey"
          },
          {
            "name": "reason",
            "type": "string"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "reportStatus",
      "docs": [
        "Report status"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pending"
          },
          {
            "name": "validated"
          },
          {
            "name": "disputed"
          },
          {
            "name": "rejected"
          }
        ]
      }
    },
    {
      "name": "reportSubmitted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetWallet",
            "type": "pubkey"
          },
          {
            "name": "reporter",
            "type": "pubkey"
          },
          {
            "name": "evidenceType",
            "type": {
              "defined": {
                "name": "evidenceType"
              }
            }
          },
          {
            "name": "tokenCa",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "riskScore",
            "type": "u8"
          },
          {
            "name": "isNewEntry",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "reportValidated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetWallet",
            "type": "pubkey"
          },
          {
            "name": "reporter",
            "type": "pubkey"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "validationCount",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "reportStatus"
              }
            }
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "reporterBanned",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reporter",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "reason",
            "type": "string"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "reporterProfile",
      "docs": [
        "Profile tracking a reporter's history and credibility",
        "PDA seeds: [\"reporter_profile\", reporter_wallet]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "The reporter's wallet address"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalReports",
            "docs": [
              "Total reports submitted"
            ],
            "type": "u32"
          },
          {
            "name": "validatedReports",
            "docs": [
              "Reports that were validated by others"
            ],
            "type": "u32"
          },
          {
            "name": "disputedReports",
            "docs": [
              "Reports that were disputed"
            ],
            "type": "u32"
          },
          {
            "name": "rejectedReports",
            "docs": [
              "Reports that were rejected"
            ],
            "type": "u32"
          },
          {
            "name": "accuracyScore",
            "docs": [
              "Accuracy score (0-100) = validated / (validated + rejected)"
            ],
            "type": "u8"
          },
          {
            "name": "reportWeight",
            "docs": [
              "Report weight multiplier (100 = 1.0x, 150 = 1.5x)",
              "Higher accuracy = higher weight"
            ],
            "type": "u8"
          },
          {
            "name": "isBanned",
            "docs": [
              "Is this reporter banned?"
            ],
            "type": "bool"
          },
          {
            "name": "banReason",
            "docs": [
              "Ban reason (if banned)"
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          },
          {
            "name": "banReasonLen",
            "docs": [
              "Length of ban reason"
            ],
            "type": "u8"
          },
          {
            "name": "bannedAt",
            "docs": [
              "When the reporter was banned (0 if not banned)"
            ],
            "type": "i64"
          },
          {
            "name": "validationsGiven",
            "docs": [
              "Total validations given to other reports"
            ],
            "type": "u32"
          },
          {
            "name": "firstReportAt",
            "docs": [
              "First report timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "lastReportAt",
            "docs": [
              "Most recent report timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rugEntry",
      "docs": [
        "A wallet's rug history entry",
        "PDA seeds: [\"rug_entry\", wallet_address]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "The wallet address being tracked"
            ],
            "type": "pubkey"
          },
          {
            "name": "rugCount",
            "docs": [
              "Number of confirmed hard rugs (LP pull, honeypot)"
            ],
            "type": "u16"
          },
          {
            "name": "softRugCount",
            "docs": [
              "Number of soft rugs (abandonment, slow rug)"
            ],
            "type": "u16"
          },
          {
            "name": "totalReports",
            "docs": [
              "Total reports filed against this wallet"
            ],
            "type": "u16"
          },
          {
            "name": "validatedReports",
            "docs": [
              "Validated reports (confirmed by multiple warlords)"
            ],
            "type": "u16"
          },
          {
            "name": "disputedReports",
            "docs": [
              "Disputed reports (challenged as false positive)"
            ],
            "type": "u16"
          },
          {
            "name": "riskScore",
            "docs": [
              "Calculated risk score (0-100)"
            ],
            "type": "u8"
          },
          {
            "name": "confidence",
            "docs": [
              "Confidence level (0-100) based on report count"
            ],
            "type": "u8"
          },
          {
            "name": "firstReported",
            "docs": [
              "First time this wallet was reported"
            ],
            "type": "i64"
          },
          {
            "name": "lastRugTimestamp",
            "docs": [
              "Timestamp of most recent confirmed rug"
            ],
            "type": "i64"
          },
          {
            "name": "status",
            "docs": [
              "Entry status"
            ],
            "type": {
              "defined": {
                "name": "rugEntryStatus"
              }
            }
          },
          {
            "name": "lastReporter",
            "docs": [
              "Last reporter who submitted against this wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "rugEntryCleared",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "previousRiskScore",
            "type": "u8"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "rugEntryStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "active"
          },
          {
            "name": "cleared"
          },
          {
            "name": "underReview"
          }
        ]
      }
    },
    {
      "name": "rugReport",
      "docs": [
        "A single rug report submitted by a warlord",
        "PDA seeds: [\"rug_report\", target_wallet, reporter, report_index]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetWallet",
            "docs": [
              "The wallet being reported"
            ],
            "type": "pubkey"
          },
          {
            "name": "reporter",
            "docs": [
              "Who submitted this report"
            ],
            "type": "pubkey"
          },
          {
            "name": "reportIndex",
            "docs": [
              "Report index for this reporter/target combination"
            ],
            "type": "u32"
          },
          {
            "name": "evidenceType",
            "docs": [
              "Type of evidence for the rug"
            ],
            "type": {
              "defined": {
                "name": "evidenceType"
              }
            }
          },
          {
            "name": "tokenCa",
            "docs": [
              "Optional token contract address for context"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "validationCount",
            "docs": [
              "Number of validations from other warlords"
            ],
            "type": "u8"
          },
          {
            "name": "validators",
            "docs": [
              "Wallets that have validated this report"
            ],
            "type": {
              "array": [
                "pubkey",
                5
              ]
            }
          },
          {
            "name": "validatorCount",
            "docs": [
              "Number of validators stored"
            ],
            "type": "u8"
          },
          {
            "name": "disputed",
            "docs": [
              "Has this report been disputed?"
            ],
            "type": "bool"
          },
          {
            "name": "disputeReason",
            "docs": [
              "Dispute reason (if disputed)"
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          },
          {
            "name": "disputeReasonLen",
            "docs": [
              "Length of dispute reason"
            ],
            "type": "u8"
          },
          {
            "name": "disputer",
            "docs": [
              "Who disputed this report"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "status",
            "docs": [
              "Report status"
            ],
            "type": {
              "defined": {
                "name": "reportStatus"
              }
            }
          },
          {
            "name": "submittedAt",
            "docs": [
              "When the report was submitted"
            ],
            "type": "i64"
          },
          {
            "name": "notes",
            "docs": [
              "Short notes from reporter (max 256 chars)"
            ],
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          },
          {
            "name": "notesLen",
            "docs": [
              "Length of notes"
            ],
            "type": "u8"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "signal",
      "docs": [
        "High-velocity signal with auction",
        "PDA seeds: [\"signal\", poster, signal_index.to_le_bytes()]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poster",
            "docs": [
              "Signal poster (Warlord)"
            ],
            "type": "pubkey"
          },
          {
            "name": "signalIndex",
            "docs": [
              "Poster's signal index (increments per poster)"
            ],
            "type": "u32"
          },
          {
            "name": "status",
            "docs": [
              "Current signal status"
            ],
            "type": {
              "defined": {
                "name": "signalStatus"
              }
            }
          },
          {
            "name": "caHash",
            "docs": [
              "SHA-256 hash of contract address (commitment)"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "contractAddress",
            "docs": [
              "Revealed contract address (set after reveal)"
            ],
            "type": "pubkey"
          },
          {
            "name": "signalType",
            "docs": [
              "Signal type classification"
            ],
            "type": {
              "defined": {
                "name": "signalType"
              }
            }
          },
          {
            "name": "confidence",
            "docs": [
              "Confidence score (0-100)"
            ],
            "type": "u8"
          },
          {
            "name": "postedAt",
            "docs": [
              "When signal was posted"
            ],
            "type": "i64"
          },
          {
            "name": "warlordRevealTime",
            "docs": [
              "When warlords can see (posted_at + 0)"
            ],
            "type": "i64"
          },
          {
            "name": "auctionWinnerRevealTime",
            "docs": [
              "When auction winner can see (posted_at + 0, after winning)"
            ],
            "type": "i64"
          },
          {
            "name": "operatorRevealTime",
            "docs": [
              "When operators can see (posted_at + 5s)"
            ],
            "type": "i64"
          },
          {
            "name": "publicRevealTime",
            "docs": [
              "When public can see (posted_at + grunt_delay)"
            ],
            "type": "i64"
          },
          {
            "name": "highestBidder",
            "docs": [
              "Current highest bidder"
            ],
            "type": "pubkey"
          },
          {
            "name": "highestBid",
            "docs": [
              "Current highest bid amount"
            ],
            "type": "u64"
          },
          {
            "name": "auctionEnd",
            "docs": [
              "When auction ends"
            ],
            "type": "i64"
          },
          {
            "name": "bidCount",
            "docs": [
              "Total number of bids"
            ],
            "type": "u16"
          },
          {
            "name": "auctionFinalized",
            "docs": [
              "Whether auction has been finalized"
            ],
            "type": "bool"
          },
          {
            "name": "revenueClaimed",
            "docs": [
              "Whether revenue has been claimed by poster"
            ],
            "type": "bool"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "metadata",
            "docs": [
              "Metadata (signal details, reasoning)"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "signalAccess",
      "docs": [
        "Signal access result"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "hasAccess",
            "type": "bool"
          },
          {
            "name": "canSeeCa",
            "type": "bool"
          },
          {
            "name": "reason",
            "type": {
              "defined": {
                "name": "accessReason"
              }
            }
          }
        ]
      }
    },
    {
      "name": "signalPosted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "poster",
            "type": "pubkey"
          },
          {
            "name": "signalIndex",
            "type": "u32"
          },
          {
            "name": "signalType",
            "type": {
              "defined": {
                "name": "signalType"
              }
            }
          },
          {
            "name": "confidence",
            "type": "u8"
          },
          {
            "name": "auctionEnd",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "signalPosterStats",
      "docs": [
        "Signal poster statistics",
        "PDA seeds: [\"poster_stats\", wallet]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "docs": [
              "Poster's wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalSignals",
            "docs": [
              "Total signals posted"
            ],
            "type": "u32"
          },
          {
            "name": "successfulSignals",
            "docs": [
              "Signals that led to profitable trades"
            ],
            "type": "u32"
          },
          {
            "name": "totalRevenue",
            "docs": [
              "Total revenue earned from auctions"
            ],
            "type": "u64"
          },
          {
            "name": "avgWinningBid",
            "docs": [
              "Average winning bid amount"
            ],
            "type": "u64"
          },
          {
            "name": "reputation",
            "docs": [
              "Reputation score (0-100)"
            ],
            "type": "u8"
          },
          {
            "name": "highAlphaSignals",
            "docs": [
              "Signals with >50% winning bidder profit"
            ],
            "type": "u32"
          },
          {
            "name": "firstSignalAt",
            "docs": [
              "Timestamp of first signal"
            ],
            "type": "i64"
          },
          {
            "name": "lastSignalAt",
            "docs": [
              "Timestamp of last signal"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "signalRevealed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "poster",
            "type": "pubkey"
          },
          {
            "name": "contractAddress",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "signalRevenueClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signalKey",
            "type": "pubkey"
          },
          {
            "name": "poster",
            "type": "pubkey"
          },
          {
            "name": "posterShare",
            "type": "u64"
          },
          {
            "name": "treasuryShare",
            "type": "u64"
          },
          {
            "name": "burnAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "signalStatus",
      "docs": [
        "Signal status"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "auction"
          },
          {
            "name": "revealing"
          },
          {
            "name": "revealed"
          },
          {
            "name": "cancelled"
          }
        ]
      }
    },
    {
      "name": "signalType",
      "docs": [
        "Signal type classification"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "newLaunch"
          },
          {
            "name": "velocitySpike"
          },
          {
            "name": "whaleAlert"
          },
          {
            "name": "smartMoneyMove"
          },
          {
            "name": "rugWarning"
          },
          {
            "name": "other"
          }
        ]
      }
    },
    {
      "name": "staked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "totalStaked",
            "type": "u64"
          },
          {
            "name": "effectiveAmount",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "lockDays",
            "type": "u16"
          },
          {
            "name": "lockUntil",
            "type": "i64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "stakedPosition",
      "docs": [
        "A user's staked $SNIPER position for permanent tier access",
        "PDA seeds: [\"staked_position\", owner]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "docs": [
              "Owner of this staked position"
            ],
            "type": "pubkey"
          },
          {
            "name": "stakedAmount",
            "docs": [
              "Amount of $SNIPER staked (base units)"
            ],
            "type": "u64"
          },
          {
            "name": "tier",
            "docs": [
              "Current tier based on staked amount"
            ],
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "lockUntil",
            "docs": [
              "Lock period end timestamp (0 = no lock)"
            ],
            "type": "i64"
          },
          {
            "name": "lockDays",
            "docs": [
              "Lock period in days (for display)"
            ],
            "type": "u16"
          },
          {
            "name": "createdAt",
            "docs": [
              "When the position was created"
            ],
            "type": "i64"
          },
          {
            "name": "lastModified",
            "docs": [
              "Last time the position was modified"
            ],
            "type": "i64"
          },
          {
            "name": "totalQueries",
            "docs": [
              "Total queries made with this position"
            ],
            "type": "u64"
          },
          {
            "name": "totalFeesPaid",
            "docs": [
              "Total fees paid (only applies to Grunt/Operator)"
            ],
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "thresholdsUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "gruntThreshold",
            "type": "u64"
          },
          {
            "name": "operatorThreshold",
            "type": "u64"
          },
          {
            "name": "warlordThreshold",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "tierUpgraded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "oldTier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "newTier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "effectiveStaked",
            "type": "u64"
          },
          {
            "name": "walletBalance",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "tradeDirection",
      "docs": [
        "Trade direction for flash bids"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "long"
          },
          {
            "name": "short"
          }
        ]
      }
    },
    {
      "name": "tradeOutcomeReported",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flashBidKey",
            "type": "pubkey"
          },
          {
            "name": "bidder",
            "type": "pubkey"
          },
          {
            "name": "tradePnl",
            "type": "i64"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "unstaked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "velocityConfig",
      "docs": [
        "Velocity Auction global configuration",
        "PDA seeds: [\"velocity_config\"]"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Program authority"
            ],
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "docs": [
              "Treasury for fee collection"
            ],
            "type": "pubkey"
          },
          {
            "name": "oracle",
            "docs": [
              "Oracle signer for trade outcome reports (Rico's executor)"
            ],
            "type": "pubkey"
          },
          {
            "name": "operatorDelaySecs",
            "docs": [
              "Operator delay in seconds (5 default)"
            ],
            "type": "u32"
          },
          {
            "name": "gruntDelaySecs",
            "docs": [
              "Grunt/public delay in seconds (30 default)"
            ],
            "type": "u32"
          },
          {
            "name": "minBid",
            "docs": [
              "Minimum bid amount in $SNIPER base units"
            ],
            "type": "u64"
          },
          {
            "name": "auctionDuration",
            "docs": [
              "Auction duration in seconds (5 default for fast signals)"
            ],
            "type": "u32"
          },
          {
            "name": "posterShareBps",
            "docs": [
              "Poster's share in basis points (7000 = 70%)"
            ],
            "type": "u16"
          },
          {
            "name": "treasuryShareBps",
            "docs": [
              "Treasury's share in basis points (1500 = 15%)"
            ],
            "type": "u16"
          },
          {
            "name": "burnShareBps",
            "docs": [
              "Burn share in basis points (1500 = 15%)"
            ],
            "type": "u16"
          },
          {
            "name": "minCollateralRatioBps",
            "docs": [
              "Minimum collateral ratio in basis points (2000 = 20%)"
            ],
            "type": "u16"
          },
          {
            "name": "flashInterestRateBps",
            "docs": [
              "Flash bid interest rate in basis points (1000 = 10%)"
            ],
            "type": "u16"
          },
          {
            "name": "flashBlacklistDuration",
            "docs": [
              "Flash bid blacklist duration in seconds (86400 = 24h)"
            ],
            "type": "u32"
          },
          {
            "name": "totalSignals",
            "docs": [
              "Total signals posted"
            ],
            "type": "u64"
          },
          {
            "name": "totalRevenue",
            "docs": [
              "Total auction revenue"
            ],
            "type": "u64"
          },
          {
            "name": "totalBurned",
            "docs": [
              "Total burned from auctions"
            ],
            "type": "u64"
          },
          {
            "name": "totalFlashBids",
            "docs": [
              "Total flash bids"
            ],
            "type": "u64"
          },
          {
            "name": "totalFlashLiquidations",
            "docs": [
              "Total flash bid liquidations"
            ],
            "type": "u64"
          },
          {
            "name": "initializedAt",
            "docs": [
              "Timestamp of initialization"
            ],
            "type": "i64"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for PDA"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future upgrades"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "velocityInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "oracle",
            "type": "pubkey"
          },
          {
            "name": "auctionDuration",
            "type": "u32"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "walletQueried",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetWallet",
            "type": "pubkey"
          },
          {
            "name": "querier",
            "type": "pubkey"
          },
          {
            "name": "tier",
            "type": {
              "defined": {
                "name": "accessTier"
              }
            }
          },
          {
            "name": "riskScore",
            "type": "u8"
          },
          {
            "name": "confidence",
            "type": "u8"
          },
          {
            "name": "rugCount",
            "type": "u16"
          },
          {
            "name": "softRugCount",
            "type": "u16"
          },
          {
            "name": "feePaid",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "winningsClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "matchKey",
            "type": "pubkey"
          },
          {
            "name": "claimer",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "coupDeGraceBonus",
            "type": "u64"
          },
          {
            "name": "isWinner",
            "type": "bool"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
