"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Crosshair, 
  Target,
  LayoutGrid,
  Rows3,
  X,
  ZoomIn
} from "lucide-react"
import type { Map, Agent, Lineup } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { AbilityIcon } from "@/components/ability-icon"

interface LineupViewerProps {
  selectedMap: Map
  selectedAgent: Agent
  selectedLineup: Lineup
  onBack: () => void
}

type ViewMode = "steps" | "grid"

const stepIcons = [MapPin, Crosshair, Target]
const stepLabels = ["Posicionamento", "Mira", "Resultado"]

// Dynamic step icons based on step number
function getStepIcon(stepNumber: number) {
  const icons = [MapPin, Crosshair, Target, MapPin, Crosshair, Target]
  return icons[(stepNumber - 1) % icons.length]
}

function getStepColor(stepNumber: number) {
  const colors = ["text-cyan-400", "text-yellow-400", "text-green-400"]
  return colors[(stepNumber - 1) % colors.length]
}

export function LineupViewer({ selectedMap, selectedAgent, selectedLineup, onBack }: LineupViewerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [zoomedImage, setZoomedImage] = useState<number | null>(null)
  const steps = selectedLineup.steps

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const StepIcon = getStepIcon(currentStep + 1)

  return (
    <div className="min-h-screen p-6">
      {/* Header with back button and breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
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
              <span className="text-slate-600">/</span>
              <span className="text-primary">{selectedAgent.name}</span>
              <span className="text-slate-600">/</span>
              <span>{selectedLineup.abilityName}</span>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary/50 backdrop-blur-sm border border-slate-800">
            <button
              onClick={() => setViewMode("steps")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === "steps"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Rows3 className="w-4 h-4" />
              <span className="hidden sm:inline">Passos</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Visao Geral</span>
            </button>
          </div>
        </div>

        {/* Lineup title */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground mb-1">
            <AbilityIcon type={selectedLineup.abilityIcon} className="w-6 h-6 text-primary" />
            <span>{selectedLineup.abilityName}</span>
          </div>
          <p className="text-muted-foreground font-mono text-sm">{selectedLineup.targetSite}</p>
        </div>
      </motion.div>

      {/* Grid View Mode */}
      {viewMode === "grid" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = getStepIcon(step.stepNumber)
              const colorClass = getStepColor(step.stepNumber)
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-card/60 backdrop-blur-md"
                >
                  {/* Step header */}
                  <div className={`flex items-center gap-3 p-4 border-b border-slate-800 ${colorClass}`}>
                    <div className="w-8 h-8 rounded-lg bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">
                        {step.title}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        Passo {step.stepNumber}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <button
                    onClick={() => setZoomedImage(index)}
                    className="relative w-full aspect-video bg-gradient-to-br from-secondary/80 to-card flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                    <div className="text-center z-10">
                      <div className={`text-4xl mb-2 ${colorClass}`}>
                        <Icon className="w-10 h-10 mx-auto" />
                      </div>
                      <p className="text-muted-foreground text-xs font-mono">
                        {step.image}
                      </p>
                    </div>
                    
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center text-sm font-bold border border-primary">
                      {step.stepNumber}
                    </div>
                  </button>

                  {/* Description */}
                  <div className="p-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Steps View Mode (Original) */}
      {viewMode === "steps" && (
        <>
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border
                  ${currentStep === index 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-card/60 backdrop-blur-sm text-muted-foreground hover:bg-secondary border-slate-800"
                  }
                `}
              >
                <span className="font-mono text-sm">Passo {step.stepNumber}</span>
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card/60 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden"
              >
                {/* Step header */}
                <div className={`flex items-center gap-3 p-4 border-b border-slate-800 ${getStepColor(currentStep + 1)}`}>
                  <div className="w-10 h-10 rounded-lg bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-slate-700">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {steps[currentStep].title}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      Passo {currentStep + 1} de {steps.length}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <button
                  onClick={() => setZoomedImage(currentStep)}
                  className="w-full aspect-video bg-gradient-to-br from-secondary/80 to-card flex items-center justify-center relative cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                  <div className="text-center z-10">
                    <div className={`text-6xl mb-4 ${getStepColor(currentStep + 1)}`}>
                      <StepIcon className="w-16 h-16 mx-auto" />
                    </div>
                    <p className="text-muted-foreground text-sm font-mono">
                      {steps[currentStep].image}
                    </p>
                  </div>
                  
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Step number overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center text-2xl font-bold border border-primary">
                    {currentStep + 1}
                  </div>
                </button>

                {/* Description */}
                <div className="p-6">
                  <p className="text-foreground leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={goToPrevStep}
                disabled={currentStep === 0}
                className="gap-2 border-slate-800"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>

              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentStep === index ? "bg-primary w-6" : "bg-slate-700 w-1.5"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={goToNextStep}
                disabled={currentStep === steps.length - 1}
                className="gap-2"
              >
                Proximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-card/90 backdrop-blur-md rounded-xl overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = getStepIcon(steps[zoomedImage].stepNumber)
                    return (
                      <div className={`w-8 h-8 rounded-lg bg-secondary flex items-center justify-center ${getStepColor(steps[zoomedImage].stepNumber)}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    )
                  })()}
                  <div>
                    <div className="font-semibold text-foreground">
                      {steps[zoomedImage].title}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      Passo {steps[zoomedImage].stepNumber} de {steps.length}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setZoomedImage(null)}
                  className="w-8 h-8 rounded-lg bg-secondary hover:bg-destructive/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Large image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-card flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                {(() => {
                  const Icon = getStepIcon(steps[zoomedImage].stepNumber)
                  return (
                    <div className="text-center z-10">
                      <div className={`text-8xl mb-4 ${getStepColor(steps[zoomedImage].stepNumber)}`}>
                        <Icon className="w-24 h-24 mx-auto" />
                      </div>
                      <p className="text-muted-foreground font-mono">
                        {steps[zoomedImage].image}
                      </p>
                    </div>
                  )
                })()}
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-foreground leading-relaxed">
                  {steps[zoomedImage].description}
                </p>
              </div>

              {/* Modal navigation */}
              <div className="flex items-center justify-between p-4 border-t border-slate-800">
                <Button
                  variant="outline"
                  onClick={() => setZoomedImage(Math.max(0, zoomedImage - 1))}
                  disabled={zoomedImage === 0}
                  className="gap-2 border-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </Button>
                <div className="flex gap-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setZoomedImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        zoomedImage === index ? "bg-primary w-6" : "bg-slate-700 w-2 hover:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  onClick={() => setZoomedImage(Math.min(steps.length - 1, zoomedImage + 1))}
                  disabled={zoomedImage === steps.length - 1}
                  className="gap-2"
                >
                  Proximo
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
