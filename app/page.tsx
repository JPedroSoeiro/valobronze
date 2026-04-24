"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Map, Agent, Lineup, Screen } from "@/lib/types"
import { LandingPage } from "@/components/landing-page"
import { MapSelection } from "@/components/map-selection"
import { AgentSelection } from "@/components/agent-selection"
import { LineupList } from "@/components/lineup-list"
import { LineupViewer } from "@/components/lineup-viewer"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing")
  const [selectedMap, setSelectedMap] = useState<Map | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [selectedLineup, setSelectedLineup] = useState<Lineup | null>(null)

  const handleStart = () => {
    setCurrentScreen("maps")
  }

  const handleSelectMap = (map: Map) => {
    setSelectedMap(map)
    setCurrentScreen("agents")
  }

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent)
    setCurrentScreen("lineups")
  }

  const handleSelectLineup = (lineup: Lineup) => {
    setSelectedLineup(lineup)
    setCurrentScreen("viewer")
  }

  const handleBackFromAgents = () => {
    setSelectedMap(null)
    setCurrentScreen("maps")
  }

  const handleBackFromLineups = () => {
    setSelectedAgent(null)
    setCurrentScreen("agents")
  }

  const handleBackFromViewer = () => {
    setSelectedLineup(null)
    setCurrentScreen("lineups")
  }

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentScreen === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LandingPage onStart={handleStart} />
          </motion.div>
        )}

        {currentScreen === "maps" && (
          <motion.div
            key="maps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MapSelection onSelectMap={handleSelectMap} />
          </motion.div>
        )}

        {currentScreen === "agents" && selectedMap && (
          <motion.div
            key="agents"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AgentSelection
              selectedMap={selectedMap}
              onSelectAgent={handleSelectAgent}
              onBack={handleBackFromAgents}
            />
          </motion.div>
        )}

        {currentScreen === "lineups" && selectedMap && selectedAgent && (
          <motion.div
            key="lineups"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LineupList
              selectedMap={selectedMap}
              selectedAgent={selectedAgent}
              onSelectLineup={handleSelectLineup}
              onBack={handleBackFromLineups}
            />
          </motion.div>
        )}

        {currentScreen === "viewer" && selectedMap && selectedAgent && selectedLineup && (
          <motion.div
            key="viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LineupViewer
              selectedMap={selectedMap}
              selectedAgent={selectedAgent}
              selectedLineup={selectedLineup}
              onBack={handleBackFromViewer}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
