"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Target, Zap, Shield, Swords, ShieldCheck } from "lucide-react"
import type { Map, Agent, Lineup } from "@/lib/types"
import { getLineupsForMapAndAgent } from "@/lib/valorant-data"
import { Button } from "@/components/ui/button"
import { AbilityIcon, RoleIcon } from "@/components/ability-icon"

interface LineupListProps {
  selectedMap: Map
  selectedAgent: Agent
  onSelectLineup: (lineup: Lineup) => void
  onBack: () => void
}

const difficultyConfig = {
  Easy: { color: "text-green-400 bg-green-400/10 border-green-400/20", icon: Zap },
  Medium: { color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20", icon: Target },
  Hard: { color: "text-red-400 bg-red-400/10 border-red-400/20", icon: Shield },
}

type Side = "attacker" | "defender"

export function LineupList({ selectedMap, selectedAgent, onSelectLineup, onBack }: LineupListProps) {
  const [activeSide, setActiveSide] = useState<Side>("attacker")
  
  const allLineups = getLineupsForMapAndAgent(selectedMap.id, selectedAgent.id)
  const filteredLineups = allLineups.filter(lineup => lineup.side === activeSide)
  
  const attackerCount = allLineups.filter(l => l.side === "attacker").length
  const defenderCount = allLineups.filter(l => l.side === "defender").length

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
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span className="text-primary">{selectedMap.name}</span>
            <span>/</span>
            <span className="text-primary">{selectedAgent.name}</span>
            <span>/</span>
            <span>Lineups</span>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <RoleIcon role={selectedAgent.role} className="w-8 h-8" />
            <h1 className="text-4xl font-bold text-foreground">
              {selectedAgent.name}
            </h1>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            {allLineups.length} lineup{allLineups.length !== 1 ? "s" : ""} em {selectedMap.name}
          </p>
        </div>
      </motion.div>

      {/* Side Tabs */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex bg-card/40 backdrop-blur-sm border border-slate-800 rounded-lg p-1">
          <button
            onClick={() => setActiveSide("attacker")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-medium text-sm transition-all ${
              activeSide === "attacker"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Swords className="w-4 h-4" />
            Attacker
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              activeSide === "attacker" ? "bg-white/20" : "bg-slate-800"
            }`}>
              {attackerCount}
            </span>
          </button>
          <button
            onClick={() => setActiveSide("defender")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-medium text-sm transition-all ${
              activeSide === "defender"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Defender
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              activeSide === "defender" ? "bg-white/20" : "bg-slate-800"
            }`}>
              {defenderCount}
            </span>
          </button>
        </div>
      </div>

      {/* Lineup list */}
      <div className="max-w-2xl mx-auto space-y-3">
        {filteredLineups.map((lineup, index) => {
          const DifficultyIcon = difficultyConfig[lineup.difficulty].icon
          
          return (
            <motion.button
              key={lineup.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelectLineup(lineup)}
              className="w-full p-4 bg-card/60 backdrop-blur-md border border-slate-800 rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Ability icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-slate-700">
                    <AbilityIcon type={lineup.abilityIcon} className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Lineup info */}
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {lineup.abilityName}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {lineup.targetSite}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Difficulty badge */}
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${difficultyConfig[lineup.difficulty].color}`}>
                    <DifficultyIcon className="w-3 h-3" />
                    {lineup.difficulty}
                  </div>
                  
                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {filteredLineups.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">
            Nenhum lineup de {activeSide === "attacker" ? "ataque" : "defesa"} disponivel.
          </p>
        </motion.div>
      )}
    </div>
  )
}
