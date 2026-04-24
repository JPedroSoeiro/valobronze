"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lock } from "lucide-react"
import type { Map, Agent } from "@/lib/types"
import { AGENTS, hasLineupsForMap } from "@/lib/valorant-data"
import { Button } from "@/components/ui/button"
import { RoleIcon } from "@/components/ability-icon"

interface AgentSelectionProps {
  selectedMap: Map
  onSelectAgent: (agent: Agent) => void
  onBack: () => void
}

const roleColors: Record<string, string> = {
  Duelist: "text-red-400",
  Controller: "text-purple-400",
  Initiator: "text-cyan-400",
  Sentinel: "text-yellow-400",
}

export function AgentSelection({ selectedMap, onSelectAgent, onBack }: AgentSelectionProps) {
  return (
    <div className="min-h-screen p-6">
      {/* Header with back button and breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">{selectedMap.name}</span>
            <span>/</span>
            <span>Agentes</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Selecione o Agente
          </h1>
          <p className="text-muted-foreground">
            Agentes com lineups disponíveis para {selectedMap.name}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {AGENTS.map((agent, index) => {
          const hasLineups = hasLineupsForMap(selectedMap.id, agent.id)
          
          return (
            <motion.button
              key={agent.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={hasLineups ? { scale: 1.05 } : undefined}
              whileTap={hasLineups ? { scale: 0.95 } : undefined}
              onClick={() => hasLineups && onSelectAgent(agent)}
              disabled={!hasLineups}
              className={`
                relative p-4 rounded-lg border transition-all duration-300
                ${hasLineups 
                  ? "bg-card/60 backdrop-blur-md border-slate-800 hover:border-primary/50 cursor-pointer" 
                  : "bg-card/20 backdrop-blur-sm border-slate-800/40 cursor-not-allowed grayscale opacity-40"
                }
              `}
            >
              {/* Agent icon */}
              <div className="mb-2">
                <RoleIcon role={agent.role} className="w-10 h-10 mx-auto" />
              </div>
              
              {/* Agent name */}
              <div className="font-semibold text-foreground mb-1">
                {agent.name}
              </div>
              
              {/* Agent role */}
              <div className={`text-xs ${roleColors[agent.role]}`}>
                {agent.role}
              </div>

              {/* Lock icon for unavailable agents */}
              {!hasLineups && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-muted-foreground/50" />
                </div>
              )}

              {/* Available indicator */}
              {hasLineups && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
