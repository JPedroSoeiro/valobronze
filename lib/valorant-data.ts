import type { Map, Agent, Lineup } from "./types"

export const MAPS: Map[] = [
  { id: "ascent", name: "Ascent", image: "/maps/ascent.jpg" },
  { id: "bind", name: "Bind", image: "/maps/bind.jpg" },
  { id: "haven", name: "Haven", image: "/maps/haven.jpg" },
  { id: "split", name: "Split", image: "/maps/split.jpg" },
  { id: "icebox", name: "Icebox", image: "/maps/icebox.jpg" },
  { id: "breeze", name: "Breeze", image: "/maps/breeze.jpg" },
  { id: "fracture", name: "Fracture", image: "/maps/fracture.jpg" },
  { id: "pearl", name: "Pearl", image: "/maps/pearl.jpg" },
  { id: "lotus", name: "Lotus", image: "/maps/lotus.jpg" },
  { id: "sunset", name: "Sunset", image: "/maps/sunset.jpg" },
  { id: "abyss", name: "Abyss", image: "/maps/abyss.jpg" },
  { id: "corrode", name: "Corrode", image: "/maps/corrode.jpg" },
]

export const AGENTS: Agent[] = [
  // Duelistas
  { id: "jett", name: "Jett", role: "Duelist", icon: "duelist" },
  { id: "phoenix", name: "Phoenix", role: "Duelist", icon: "duelist" },
  { id: "reyna", name: "Reyna", role: "Duelist", icon: "duelist" },
  { id: "raze", name: "Raze", role: "Duelist", icon: "duelist" },
  { id: "yoru", name: "Yoru", role: "Duelist", icon: "duelist" },
  { id: "neon", name: "Neon", role: "Duelist", icon: "duelist" },
  { id: "iso", name: "Iso", role: "Duelist", icon: "duelist" },
  { id: "waylay", name: "Waylay", role: "Duelist", icon: "duelist" },
  // Iniciadores
  { id: "sova", name: "Sova", role: "Initiator", icon: "initiator" },
  { id: "breach", name: "Breach", role: "Initiator", icon: "initiator" },
  { id: "skye", name: "Skye", role: "Initiator", icon: "initiator" },
  { id: "kayo", name: "KAY/O", role: "Initiator", icon: "initiator" },
  { id: "fade", name: "Fade", role: "Initiator", icon: "initiator" },
  { id: "gekko", name: "Gekko", role: "Initiator", icon: "initiator" },
  { id: "tejo", name: "Tejo", role: "Initiator", icon: "initiator" },
  // Controladores
  { id: "brimstone", name: "Brimstone", role: "Controller", icon: "controller" },
  { id: "viper", name: "Viper", role: "Controller", icon: "controller" },
  { id: "omen", name: "Omen", role: "Controller", icon: "controller" },
  { id: "astra", name: "Astra", role: "Controller", icon: "controller" },
  { id: "harbor", name: "Harbor", role: "Controller", icon: "controller" },
  { id: "clove", name: "Clove", role: "Controller", icon: "controller" },
  { id: "miks", name: "Miks", role: "Controller", icon: "controller" },
  // Sentinelas
  { id: "sage", name: "Sage", role: "Sentinel", icon: "sentinel" },
  { id: "cypher", name: "Cypher", role: "Sentinel", icon: "sentinel" },
  { id: "killjoy", name: "Killjoy", role: "Sentinel", icon: "sentinel" },
  { id: "chamber", name: "Chamber", role: "Sentinel", icon: "sentinel" },
  { id: "deadlock", name: "Deadlock", role: "Sentinel", icon: "sentinel" },
  { id: "vyse", name: "Vyse", role: "Sentinel", icon: "sentinel" },
  { id: "veto", name: "Veto", role: "Sentinel", icon: "sentinel" },
]

export const LINEUPS: Lineup[] = [
  // Sova Lineups - Ascent
  {
    id: "sova-ascent-shock-a",
    mapId: "ascent",
    agentId: "sova",
    abilityName: "Shock Bolt",
    abilityIcon: "shock",
    targetSite: "A Site",
    difficulty: "Easy",
    side: "attacker",
    steps: [
      {
        id: "step-1-sova-shock-a",
        lineupId: "sova-ascent-shock-a",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Posicione-se no canto da parede em A Main, proximo a caixa. Alinhe seu corpo com a marca na parede.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-sova-shock-a",
        lineupId: "sova-ascent-shock-a",
        stepNumber: 2,
        title: "Mira",
        description: "Olhe para cima e alinhe a ponta da seta com o canto do telhado. Use 2 barras de forca.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-sova-shock-a",
        lineupId: "sova-ascent-shock-a",
        stepNumber: 3,
        title: "Resultado",
        description: "O Shock Bolt caira diretamente no plant padrao do A Site, causando dano significativo.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  {
    id: "sova-ascent-recon-b",
    mapId: "ascent",
    agentId: "sova",
    abilityName: "Recon Bolt",
    abilityIcon: "recon",
    targetSite: "B Site",
    difficulty: "Medium",
    side: "attacker",
    steps: [
      {
        id: "step-1-sova-recon-b",
        lineupId: "sova-ascent-recon-b",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique no inicio de B Main, encostado na parede da esquerda.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-sova-recon-b",
        lineupId: "sova-ascent-recon-b",
        stepNumber: 2,
        title: "Mira",
        description: "Mire na antena do predio, use 1 bounce e forca maxima.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-sova-recon-b",
        lineupId: "sova-ascent-recon-b",
        stepNumber: 3,
        title: "Resultado",
        description: "O Recon Bolt revela todo o B Site e parte do CT spawn.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Sova - Defender
  {
    id: "sova-ascent-recon-a-def",
    mapId: "ascent",
    agentId: "sova",
    abilityName: "Recon Bolt",
    abilityIcon: "recon",
    targetSite: "A Main",
    difficulty: "Easy",
    side: "defender",
    steps: [
      {
        id: "step-1-sova-def",
        lineupId: "sova-ascent-recon-a-def",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique no A Site, proximo a caixa do generator.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-sova-def",
        lineupId: "sova-ascent-recon-a-def",
        stepNumber: 2,
        title: "Mira",
        description: "Mire no canto superior da entrada do A Main.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-sova-def",
        lineupId: "sova-ascent-recon-a-def",
        stepNumber: 3,
        title: "Resultado",
        description: "Revela qualquer push pelo A Main no inicio do round.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Viper Lineups - Ascent
  {
    id: "viper-ascent-wall-mid",
    mapId: "ascent",
    agentId: "viper",
    abilityName: "Toxic Screen",
    abilityIcon: "toxic",
    targetSite: "Mid",
    difficulty: "Easy",
    side: "attacker",
    steps: [
      {
        id: "step-1-viper-wall",
        lineupId: "viper-ascent-wall-mid",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Posicione-se no spawn atacante, alinhado com a porta.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-viper-wall",
        lineupId: "viper-ascent-wall-mid",
        stepNumber: 2,
        title: "Mira",
        description: "Mire no ponto mais alto do predio central e solte a wall.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-viper-wall",
        lineupId: "viper-ascent-wall-mid",
        stepNumber: 3,
        title: "Resultado",
        description: "A wall corta o mid completamente, permitindo controle seguro.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Brimstone - Bind
  {
    id: "brim-bind-smoke-b",
    mapId: "bind",
    agentId: "brimstone",
    abilityName: "Sky Smoke",
    abilityIcon: "smoke",
    targetSite: "B Site",
    difficulty: "Easy",
    side: "attacker",
    steps: [
      {
        id: "step-1-brim-bind",
        lineupId: "brim-bind-smoke-b",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique em B Long, atras da caixa grande.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-brim-bind",
        lineupId: "brim-bind-smoke-b",
        stepNumber: 2,
        title: "Mira",
        description: "Abra o mapa tatico e posicione as smokes em Hookah e CT.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-brim-bind",
        lineupId: "brim-bind-smoke-b",
        stepNumber: 3,
        title: "Resultado",
        description: "O B Site fica isolado para uma entrada segura.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  {
    id: "brim-bind-molly-a",
    mapId: "bind",
    agentId: "brimstone",
    abilityName: "Incendiary",
    abilityIcon: "molly",
    targetSite: "A Site",
    difficulty: "Medium",
    side: "defender",
    steps: [
      {
        id: "step-1-brim-molly",
        lineupId: "brim-bind-molly-a",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique na entrada do teleporte A, encostado na parede.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-brim-molly",
        lineupId: "brim-bind-molly-a",
        stepNumber: 2,
        title: "Mira",
        description: "Mire no canto do teto do predio e jogue com forca maxima.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-brim-molly",
        lineupId: "brim-bind-molly-a",
        stepNumber: 3,
        title: "Resultado",
        description: "A molly cai no plant padrao, atrasando o defuse.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Killjoy - Haven
  {
    id: "kj-haven-turret-c",
    mapId: "haven",
    agentId: "killjoy",
    abilityName: "Turret",
    abilityIcon: "turret",
    targetSite: "C Site",
    difficulty: "Medium",
    side: "defender",
    steps: [
      {
        id: "step-1-kj-haven",
        lineupId: "kj-haven-turret-c",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Va para o fundo do C Site, atras da caixa.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-kj-haven",
        lineupId: "kj-haven-turret-c",
        stepNumber: 2,
        title: "Mira",
        description: "Coloque a turret voltada para C Long, cobrindo toda a entrada.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-kj-haven",
        lineupId: "kj-haven-turret-c",
        stepNumber: 3,
        title: "Resultado",
        description: "A turret detecta qualquer push pelo C Long instantaneamente.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  {
    id: "kj-haven-nanoswarm-a",
    mapId: "haven",
    agentId: "killjoy",
    abilityName: "Nanoswarm",
    abilityIcon: "swarm",
    targetSite: "A Site",
    difficulty: "Hard",
    side: "defender",
    steps: [
      {
        id: "step-1-kj-nano",
        lineupId: "kj-haven-nanoswarm-a",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique em A Site, proximo ao Heaven.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-kj-nano",
        lineupId: "kj-haven-nanoswarm-a",
        stepNumber: 2,
        title: "Granada 1",
        description: "Coloque a primeira nanoswarm escondida atras da caixa do plant.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-kj-nano",
        lineupId: "kj-haven-nanoswarm-a",
        stepNumber: 3,
        title: "Granada 2",
        description: "Coloque a segunda nanoswarm no canto oposto.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-4-kj-nano",
        lineupId: "kj-haven-nanoswarm-a",
        stepNumber: 4,
        title: "Resultado",
        description: "As duas granadas cobrem todo o plant padrao.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Cypher - Split
  {
    id: "cypher-split-cam-a",
    mapId: "split",
    agentId: "cypher",
    abilityName: "Spycam",
    abilityIcon: "camera",
    targetSite: "A Site",
    difficulty: "Easy",
    side: "defender",
    steps: [
      {
        id: "step-1-cypher-cam",
        lineupId: "cypher-split-cam-a",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique no A Site, olhando para a entrada do A Main.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-cypher-cam",
        lineupId: "cypher-split-cam-a",
        stepNumber: 2,
        title: "Camera",
        description: "Coloque a camera no canto superior da parede, cobrindo A Main e Ramps.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-cypher-cam",
        lineupId: "cypher-split-cam-a",
        stepNumber: 3,
        title: "Resultado",
        description: "Visao completa de qualquer push pelo A Site.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Fade - Lotus
  {
    id: "fade-lotus-haunt-a",
    mapId: "lotus",
    agentId: "fade",
    abilityName: "Haunt",
    abilityIcon: "haunt",
    targetSite: "A Site",
    difficulty: "Medium",
    side: "attacker",
    steps: [
      {
        id: "step-1-fade-haunt",
        lineupId: "fade-lotus-haunt-a",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique no A Main, proximo a entrada.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-fade-haunt",
        lineupId: "fade-lotus-haunt-a",
        stepNumber: 2,
        title: "Mira",
        description: "Mire acima do muro e jogue com forca media.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-fade-haunt",
        lineupId: "fade-lotus-haunt-a",
        stepNumber: 3,
        title: "Resultado",
        description: "O Haunt revela todo o A Site e Tree.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
  // Gekko - Pearl
  {
    id: "gekko-pearl-dizzy-b",
    mapId: "pearl",
    agentId: "gekko",
    abilityName: "Dizzy",
    abilityIcon: "dizzy",
    targetSite: "B Site",
    difficulty: "Easy",
    side: "attacker",
    steps: [
      {
        id: "step-1-gekko-dizzy",
        lineupId: "gekko-pearl-dizzy-b",
        stepNumber: 1,
        title: "Posicionamento",
        description: "Fique em B Main, atras da primeira caixa.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-2-gekko-dizzy",
        lineupId: "gekko-pearl-dizzy-b",
        stepNumber: 2,
        title: "Mira",
        description: "Jogue a Dizzy para cima, mirando no centro do site.",
        image: "/lineups/placeholder.jpg",
      },
      {
        id: "step-3-gekko-dizzy",
        lineupId: "gekko-pearl-dizzy-b",
        stepNumber: 3,
        title: "Resultado",
        description: "Cega os defensores no B Site, facilitando a entrada.",
        image: "/lineups/placeholder.jpg",
      },
    ],
  },
]

// Helper function to get lineups for a specific map and agent
export function getLineupsForMapAndAgent(mapId: string, agentId: string): Lineup[] {
  return LINEUPS.filter((lineup) => lineup.mapId === mapId && lineup.agentId === agentId)
}

// Helper function to get lineups filtered by side
export function getLineupsForMapAndAgentBySide(mapId: string, agentId: string, side: "attacker" | "defender"): Lineup[] {
  return LINEUPS.filter((lineup) => lineup.mapId === mapId && lineup.agentId === agentId && lineup.side === side)
}

// Helper function to check if an agent has lineups for a specific map
export function hasLineupsForMap(mapId: string, agentId: string): boolean {
  return LINEUPS.some((lineup) => lineup.mapId === mapId && lineup.agentId === agentId)
}

// Helper function to get all agents with lineups for a specific map
export function getAgentsWithLineupsForMap(mapId: string): string[] {
  const agentIds = new Set(LINEUPS.filter((lineup) => lineup.mapId === mapId).map((lineup) => lineup.agentId))
  return Array.from(agentIds)
}
