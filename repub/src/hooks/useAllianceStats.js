import { useEffect, useState } from 'react'

const ESI = 'https://esi.evetech.net/latest'
const ALLIANCE_ID = 99006260

export function useAllianceStats() {
  const [stats, setStats]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const corpIds = await fetch(
          `${ESI}/alliances/${ALLIANCE_ID}/corporations/?datasource=tranquility`,
          { headers: { Accept: 'application/json' } }
        ).then(r => r.json())

        const corps = await Promise.all(
          corpIds.map(id =>
            fetch(`${ESI}/corporations/${id}/?datasource=tranquility`, {
              headers: { Accept: 'application/json' },
            }).then(r => r.json())
          )
        )

        const memberCount = corps.reduce((sum, c) => sum + (c.member_count ?? 0), 0)
        setStats({ memberCount, corpCount: corpIds.length })
      } catch {
        setStats(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { stats, loading }
}
