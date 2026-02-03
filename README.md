# The Trench (Demo)

Public demo repo for the Colosseum hackathon. Core codebase is private.

## Demo

Devnet deployment:
- Program ID: `6fs4qcRYSdR8pd2ZPoAmLpthrqZR94Dhf6J4PLvtqQt1`
- IDL: `idl.json`
- TS types: `the_trench.ts`

## OpenClaw Skill

Install:
```bash
clawhub install BAGWATCHER/the-trench
```

Skill page:
- https://www.clawhub.ai/BAGWATCHER/the-trench

Example usage (TypeScript):
```ts
import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from "./idl.json";

const programId = new PublicKey("6fs4qcRYSdR8pd2ZPoAmLpthrqZR94Dhf6J4PLvtqQt1");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const provider = AnchorProvider.env();
const program = new Program(idl as any, programId, provider);

// Example call
// await program.methods.listDeadToken(...).accounts({ ... }).rpc();
```

Notes:
- This repo is intentionally minimal.
- Full program source stays private.
