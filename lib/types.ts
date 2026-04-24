// TypeScript Schema para banco de dados relacional (PostgreSQL/Supabase)

export interface Map {
  id: string
  name: string
  image: string
}

export interface Agent {
  id: string
  name: string
  role: "Duelist" | "Controller" | "Initiator" | "Sentinel"
  icon: string
}

export interface Step {
  id: string
  lineupId: string
  stepNumber: number
  title: string
  description: string
  image: string
}

export interface Lineup {
  id: string
  mapId: string
  agentId: string
  abilityName: string
  abilityIcon: string
  targetSite: string
  difficulty: "Easy" | "Medium" | "Hard"
  side: "attacker" | "defender"
  steps: Step[]
}

// Navigation state type
export type Screen = "landing" | "maps" | "agents" | "lineups" | "viewer"

export interface NavigationState {
  currentScreen: Screen
  selectedMap: Map | null
  selectedAgent: Agent | null
  selectedLineup: Lineup | null
}

/*
SQL Schema para PostgreSQL/Supabase:

CREATE TABLE maps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('Duelist', 'Controller', 'Initiator', 'Sentinel')),
  icon VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE lineups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  map_id UUID NOT NULL REFERENCES maps(id) ON DELETE CASCADE,
  agent_id UUID NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
  ability_name VARCHAR(100) NOT NULL,
  ability_icon VARCHAR(255) NOT NULL,
  target_site VARCHAR(50) NOT NULL,
  difficulty VARCHAR(10) NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  side VARCHAR(10) NOT NULL CHECK (side IN ('attacker', 'defender')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lineup_id UUID NOT NULL REFERENCES lineups(id) ON DELETE CASCADE,
  step_number INTEGER NOT NULL CHECK (step_number >= 1),
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(lineup_id, step_number)
);

CREATE INDEX idx_lineups_map_agent ON lineups(map_id, agent_id);
CREATE INDEX idx_steps_lineup ON steps(lineup_id);
*/
