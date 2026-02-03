# The Trench (Demo)

Public demo repo for the Colosseum hackathon. Core codebase is private.

## Demo

Devnet deployment:
- Program ID: `6fs4qcRYSdR8pd2ZPoAmLpthrqZR94Dhf6J4PLvtqQt1`
- IDL: generated via `anchor build` in the private repo
- TS types: generated via `anchor build` in the private repo

Quickstart (Devnet):
```bash
# In the private repo:
# Install deps
npm install

# Build program + IDL
anchor build

# Run tests against devnet (set [provider] cluster = "devnet" in Anchor.toml)
anchor test --skip-local-validator
```

Notes:
- The full on-chain program + tests live in the private repo.
- This public repo exists only to satisfy demo requirements.
