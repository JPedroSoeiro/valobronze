"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import type { Map } from "@/lib/types"
import { MAPS } from "@/lib/valorant-data"

interface MapSelectionProps {
  onSelectMap: (map: Map) => void
}

export function MapSelection({ onSelectMap }: MapSelectionProps) {
  return (
    <div className="min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Selecione o Mapa
        </h1>
        <p className="text-muted-foreground">
          Escolha o mapa para ver os lineups disponíveis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {MAPS.map((map, index) => (
          <motion.button
            key={map.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectMap(map)}
            className="group relative overflow-hidden rounded-lg bg-card/60 backdrop-blur-md border border-slate-800 h-48 cursor-pointer"
          >
            {/* Background gradient fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card" />
            
            {/* Map image overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{ 
                backgroundImage: `url(${map.image})`,
              }}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-end p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  {map.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                Selecionar
              </span>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 rounded-lg transition-colors duration-300" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
