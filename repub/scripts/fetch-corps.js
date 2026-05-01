#!/usr/bin/env node
/**
 * Fetches live corporation data for The Republic alliance from the ESI API
 * and writes it to src/data/corporations.json.
 *
 * Run via: node scripts/fetch-corps.js
 * Runs automatically before each build via the "prebuild" npm script.
 *
 * Live data pulled from ESI: name, ticker, member_count, ceo_id, ceo_name
 * Editorial data maintained in CORP_META below: role, description, recruiting, discordUrl
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, "../src/data/corporations.json");

const ESI = "https://esi.evetech.net/latest";
const ALLIANCE_ID = 99006260;

// All editorial content lives here. Update descriptions, recruiting status,
// and Discord URLs as needed — then run `npm run fetch-corps` or rebuild.
const CORP_META = {
  98694116: {
    role: "Executor & Industry",
    description:
      "The founding corporation of The Republic and seat of its executive authority.\nOperates across industry, manufacturing, and active fleet combat — open to capsuleers of all skill levels and backgrounds.",
    recruiting: true,
    discordUrl: "https://discord.gg/5qmj7ygJRg",
  },
  98756906: {
    role: "Industry & Manufacturing",
    description:
      "A large francophone corporation built around mining and industrial production.\nActive across highsec, lowsec, and wormhole space — all skill levels welcome, francophone pilots only.",
    recruiting: true,
    discordUrl: null,
  },
  98704736: {
    role: "Hauling & Logistics",
    description:
      "The alliance's dedicated logistics arm, specialising in highsec freight at competitive rates.\nKeeps the supply lines of The Republic moving.",
    recruiting: false,
    discordUrl: null,
  },
  98770674: {
    role: "Private Wealth Management",
    description:
      "The official family office of the Kansene and Ghekon families.\nConducts strategic investments across assets, structures, and emerging corporations on behalf of its principals.",
    recruiting: false,
    discordUrl: null,
  },
  98800068: {
    role: "Wholesale Trading",
    description:
      "A trading house operating within the alliance's economic sphere.\nProvides wholesale material exchange services to member corporations and external partners.",
    recruiting: false,
    discordUrl: null,
  },
  98674220: {
    role: "Mentoring & Trading",
    description:
      "A low-tax corporation whose primary mandate is mentorship.\nMembers serve as instructors for newer pilots within the alliance — open to capsuleers with at least six months of experience.",
    recruiting: true,
    discordUrl: null,
  },
  98725317: {
    role: "Covert Operations",
    description:
      "Handles operations that are not discussed in open channels.\nMandate and activities are known only to alliance command.",
    recruiting: false,
    discordUrl: null,
  },
  98711376: {
    role: "Teaching & Training",
    description:
      "The Republic's dedicated academy for new capsuleers.\nProvides structured training and guidance to pilots taking their first steps in New Eden.",
    recruiting: true,
    discordUrl: null,
  },
};

async function esi(path) {
  const res = await fetch(`${ESI}${path}?datasource=tranquility`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "republic-alliance-website/1.0",
    },
  });
  if (!res.ok) throw new Error(`ESI ${path} → ${res.status}`);
  return res.json();
}

async function main() {
  console.log("Fetching alliance corporations…");
  const corpIds = await esi(`/alliances/${ALLIANCE_ID}/corporations/`);
  console.log(`  Found ${corpIds.length} corporations`);

  const corporations = [];

  for (const corpId of corpIds) {
    process.stdout.write(`  Fetching corp ${corpId}… `);
    const corp = await esi(`/corporations/${corpId}/`);
    const char = await esi(`/characters/${corp.ceo_id}/`);
    console.log(`${corp.name} (CEO: ${char.name}, ${corp.member_count} members)`);

    const meta = CORP_META[corpId] ?? {
      role: "Alliance Member",
      description: null,
      recruiting: false,
      discordUrl: null,
    };

    corporations.push({
      id:          corpId,
      name:        corp.name,
      ticker:      corp.ticker,
      role:        meta.role,
      memberCount: corp.member_count,
      ceoId:       corp.ceo_id,
      ceoName:     char.name,
      description: meta.description,
      recruiting:  meta.recruiting,
      discordUrl:  meta.discordUrl,
    });
  }

  // Executor first, then by member count descending
  corporations.sort((a, b) => {
    if (a.id === 98694116) return -1;
    if (b.id === 98694116) return 1;
    return b.memberCount - a.memberCount;
  });

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(corporations, null, 2));
  console.log(`\nWrote ${corporations.length} corporations to src/data/corporations.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
