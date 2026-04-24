"use client"

import { Zap, Radio, FlaskConical, Cloud, Bot, Target, Sword, Shield, Scan, Flame, Camera, Ghost, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AbilityIconProps {
  type: string
  className?: string
}

const abilityIcons: Record<string, LucideIcon> = {
  shock: Zap,
  recon: Radio,
  toxic: FlaskConical,
  smoke: Cloud,
  turret: Bot,
  molly: Flame,
  swarm: Zap,
  camera: Camera,
  haunt: Ghost,
  dizzy: Sparkles,
  default: Target,
}

export function AbilityIcon({ type, className = "w-5 h-5" }: AbilityIconProps) {
  const Icon = abilityIcons[type] || abilityIcons.default
  return <Icon className={className} />
}

// Role icons for agents
const roleIcons: Record<string, LucideIcon> = {
  initiator: Scan,
  duelist: Sword,
  controller: Cloud,
  sentinel: Shield,
}

const roleColors: Record<string, string> = {
  initiator: "text-cyan-400",
  duelist: "text-red-400",
  controller: "text-purple-400",
  sentinel: "text-yellow-400",
}

interface RoleIconProps {
  role: string
  className?: string
  showColor?: boolean
}

export function RoleIcon({ role, className = "w-6 h-6", showColor = true }: RoleIconProps) {
  const normalizedRole = role.toLowerCase()
  const Icon = roleIcons[normalizedRole] || roleIcons.initiator
  const colorClass = showColor ? roleColors[normalizedRole] : ""
  return <Icon className={`${className} ${colorClass}`} />
}
