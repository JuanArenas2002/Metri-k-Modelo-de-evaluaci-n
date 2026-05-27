import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Star,
  Microscope,
  BarChart3,
  Puzzle,
  Target,
  Users,
  Leaf,
  GraduationCap,
  Handshake,
  Globe,
  Building2,
  Megaphone,
  Scale,
  ShieldCheck,
  TrendingUp,
  Globe2,
  GripVertical,
  RotateCcw,
} from 'lucide-react'
import './App.css'
import Edificio from './assets/Edificio.png'
import LogoPng from './assets/metrik.png'

/* ─────────────────────────────────────────────────────────────
   METRI-K · Modelo de evaluación de líneas de investigación
   ───────────────────────────────────────────────────────────── */

/* ========== Iconos (lucide-react) ========== */

const I = {
  star:        <Star strokeWidth={2} />,
  microscope:  <Microscope strokeWidth={1.8} />,
  chart:       <BarChart3 strokeWidth={2} />,
  puzzle:      <Puzzle strokeWidth={1.8} />,
  target:      <Target strokeWidth={1.8} />,
  people:      <Users strokeWidth={1.8} />,
  leaf:        <Leaf strokeWidth={1.8} />,
  cap:         <GraduationCap strokeWidth={1.8} />,
  handshake:   <Handshake strokeWidth={1.8} />,
  globe:       <Globe strokeWidth={1.6} />,
  building:    <Building2 strokeWidth={1.6} />,
  megaphone:   <Megaphone strokeWidth={1.8} />,
  scales:      <Scale strokeWidth={1.8} />,
  shieldCheck: <ShieldCheck strokeWidth={1.8} />,
  impact:      <TrendingUp strokeWidth={1.8} />,
  trendUp:     <TrendingUp strokeWidth={1.8} />,
  globeAlt:    <Globe2 strokeWidth={1.6} />,
  grip:        <GripVertical strokeWidth={1.8} />,
  reset:       <RotateCcw strokeWidth={1.8} />,
}

/* ========== Logo ========== */

function Logo() {
  return (
    <a href="#" className="block shrink-0" aria-label="METRI-K">
      <img
        src={LogoPng}
        alt="METRI-K"
        className="h-16 w-auto object-contain sm:h-20 lg:h-20 xl:h-24"
        draggable="false"
      />
    </a>
  )
}

/* ========== Cinta superior ========== */

function TopSweep() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 z-0 w-full"
      viewBox="0 0 1600 220"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sweep" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e7ebee" />
          <stop offset=".55" stopColor="#dadfe3" />
          <stop offset="1" stopColor="#cfd5da" />
        </linearGradient>
      </defs>
      <path
        d="M0 0 L0 120 C 380 200 760 90 1100 130 C 1330 158 1500 120 1600 80 L1600 0 Z"
        fill="url(#sweep)"
        opacity="0.55"
      />
      <g fill="#a9b1b8" opacity="0.4">
        {Array.from({ length: 80 }).map((_, i) => (
          <circle key={i} cx={20 + i * 19} cy={150 + Math.sin(i * 0.3) * 10} r="1.1" />
        ))}
      </g>
    </svg>
  )
}

/* ========== Header ========== */

function Header() {
  return (
    <header
      className="relative z-10 flex w-full items-start justify-between gap-4 pt-5 sm:pt-6"
      style={{ paddingInline: 'clamp(1rem, 4vw, 5rem)' }}
    >
      <Logo />
      <div className="text-right leading-snug">
        <div className="font-display text-[clamp(11px,1.1vw,16px)] font-semibold text-teal-deep">
          Formamos para la excelencia,
        </div>
        <div className="font-display text-[clamp(11px,1.1vw,16px)] text-eje3">
          transformamos para el país.
        </div>
      </div>
    </header>
  )
}

/* ========== Panel izquierdo ========== */

function LeftPanel() {
  const pillars = [
    { icon: I.shieldCheck, label: 'Enfoque integral y sistémico' },
    { icon: I.impact,      label: 'Impacto académico y social' },
    { icon: I.trendUp,     label: 'Mejora continua y sostenible' },
    { icon: I.globeAlt,    label: 'Proyección con ética e integridad' },
  ]
  return (
    <section className="reveal w-full max-w-[clamp(320px,32vw,560px)]" style={{ animationDelay: '120ms' }}>
      <div className="font-display text-[clamp(15px,1.6vw,20px)] leading-snug text-teal-deep">
        Modelo de evaluación de
      </div>
      <h1 className="font-display mt-0.5 text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.02] tracking-tight text-ink">
        Líneas de
        <br className="hidden sm:inline" />{' '}
        investigación
      </h1>

      <div className="mt-4 inline-flex items-center gap-3 lg:mt-3">
        <span className="h-px w-8 bg-eje3" />
        <span className="font-display text-[10px] tracking-wider-soft text-eje3 sm:text-[11px]">
          NUESTRO ECOSISTEMA INSTITUCIONAL
        </span>
      </div>

      <p className="mt-3 max-w-[420px] text-[12.5px] leading-[1.55] text-ink-soft sm:text-[13.5px] lg:mt-2">
        Un modelo integrado que articula dimensiones clave para impulsar la
        excelencia, la pertinencia y el desarrollo sostenible de nuestra
        institución.
      </p>

      <ul className="mt-4 space-y-2 sm:space-y-2.5 lg:mt-3">
        {pillars.map((p, i) => (
          <li
            key={p.label}
            className="reveal flex items-center gap-3"
            style={{ animationDelay: `${260 + i * 90}ms` }}
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-teal-deep">
              <span className="size-4 [&_svg]:size-full">{p.icon}</span>
            </span>
            <span className="text-[12.5px] text-ink-soft sm:text-[13px]">{p.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ========== Diagrama ========== */

const VB_W = 1200
const VB_H = 720

/** Estado inicial de cada nodo: posición y radio en unidades de viewBox */
const INITIAL_NODES = {
  CORE: { x: 540, y: 380, r: 100, label: 'MODELO DE EVALUACIÓN', kind: 'core', icon: null, sub: null },

  E1:   { x: 700,  y: 130, r: 82, label: 'Eje 1', sub: 'Calidad Académica',         kind: 'eje1' },
  E2:   { x: 260,  y: 510, r: 84, label: 'Eje 2', sub: 'Pertinencia y Coherencia',  kind: 'eje2' },
  E3:   { x: 840,  y: 380, r: 92, label: 'Eje 3', sub: 'Desarrollo Institucional',  kind: 'eje3' },
  DT:   { x: 620,  y: 610, r: 58, label: 'DT',    sub: 'Ética e Integridad',        kind: 'dt'   },

  D3:   { x: 870,  y: 50,  r: 28, label: 'D3',  icon: 'star',       kind: 'eje1' },
  D4:   { x: 935,  y: 165, r: 28, label: 'D4',  icon: 'microscope', kind: 'eje1' },
  D10:  { x: 855,  y: 260, r: 26, label: 'D10', icon: 'chart',      kind: 'eje1' },

  D1:   { x: 295,  y: 360, r: 28, label: 'D1', icon: 'puzzle', kind: 'eje2' },
  D2:   { x: 90,   y: 510, r: 28, label: 'D2', icon: 'target', kind: 'eje2' },
  D5:   { x: 315,  y: 660, r: 28, label: 'D5', icon: 'people', kind: 'eje2' },

  D6:   { x: 1030, y: 195, r: 28, label: 'D6',  icon: 'leaf',      kind: 'eje3' },
  D7:   { x: 1110, y: 290, r: 28, label: 'D7',  icon: 'cap',       kind: 'eje3' },
  D8:   { x: 1135, y: 390, r: 28, label: 'D8',  icon: 'handshake', kind: 'eje3' },
  D11:  { x: 1100, y: 490, r: 28, label: 'D11', icon: 'globe',     kind: 'eje3' },
  D9:   { x: 1000, y: 575, r: 28, label: 'D9',  icon: 'building',  kind: 'eje3' },
  D13:  { x: 820,  y: 615, r: 28, label: 'D13', icon: 'megaphone', kind: 'eje3' },
}

const EDGES = [
  ['CORE', 'E1'], ['CORE', 'E2'], ['CORE', 'E3'], ['CORE', 'DT'],
  ['E1', 'D3'], ['E1', 'D4'], ['E1', 'D10'],
  ['E2', 'D1'], ['E2', 'D2'], ['E2', 'D5'],
  ['E3', 'D6'], ['E3', 'D7'], ['E3', 'D8'], ['E3', 'D11'], ['E3', 'D9'], ['E3', 'D13'],
]

const KIND_COLOR = {
  core: { bg: '#2aa39a', stroke: '#1f8a82', text: '#ffffff', soft: '#d8efed' },
  eje1: { bg: '#98989a', stroke: '#7a7a7c', text: '#ffffff', soft: '#efeff0' },
  eje2: { bg: '#c97a52', stroke: '#a86238', text: '#ffffff', soft: '#f8e7dd' },
  eje3: { bg: '#e0526a', stroke: '#b93f54', text: '#ffffff', soft: '#fbdfe4' },
  dt:   { bg: '#d4b274', stroke: '#b08e4f', text: '#ffffff', soft: '#f6ecd5' },
}

/** Información profesional de cada nodo para el tooltip */
const NODE_INFO = {
  CORE: { title: 'Modelo de Evaluación',         meta: 'Centro del ecosistema institucional' },
  E1:   { title: 'Eje 1 · Calidad Académica',    meta: 'Excelencia, impacto científico y productividad' },
  E2:   { title: 'Eje 2 · Pertinencia y Coherencia', meta: 'Articulación con necesidades sociales' },
  E3:   { title: 'Eje 3 · Desarrollo Institucional', meta: 'Sostenibilidad y proyección global' },
  DT:   { title: 'Dimensión Transversal',        meta: 'Ética e integridad en toda actuación' },
  D1:   { title: 'D1 · Coherencia',              meta: 'Eje 2 · Pertinencia y Coherencia' },
  D2:   { title: 'D2 · Pertinencia',             meta: 'Eje 2 · Pertinencia y Coherencia' },
  D3:   { title: 'D3 · Excelencia',              meta: 'Eje 1 · Calidad Académica' },
  D4:   { title: 'D4 · Impacto Científico',      meta: 'Eje 1 · Calidad Académica' },
  D5:   { title: 'D5 · Impacto Social',          meta: 'Eje 2 · Pertinencia y Coherencia' },
  D6:   { title: 'D6 · Sostenibilidad',          meta: 'Eje 3 · Desarrollo Institucional' },
  D7:   { title: 'D7 · Formación',               meta: 'Eje 3 · Desarrollo Institucional' },
  D8:   { title: 'D8 · Colaboración',            meta: 'Eje 3 · Desarrollo Institucional' },
  D9:   { title: 'D9 · Gobernanza',              meta: 'Eje 3 · Desarrollo Institucional' },
  D10:  { title: 'D10 · Productividad',          meta: 'Eje 1 · Calidad Académica' },
  D11:  { title: 'D11 · Internacionalización',   meta: 'Eje 3 · Desarrollo Institucional' },
  D13:  { title: 'D13 · Visibilidad',            meta: 'Eje 3 · Desarrollo Institucional' },
}

/** Tooltip flotante que sigue al nodo activo */
function NodeTooltip({ node, kind }) {
  if (!node) return null
  const info = NODE_INFO[node.key]
  if (!info) return null
  const c = KIND_COLOR[kind]
  // Posicionar el tooltip por encima del nodo, con conversión a %
  const left = `${(node.x / VB_W) * 100}%`
  const top = `${((node.y - node.r) / VB_H) * 100}%`
  return (
    <div
      className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-[calc(100%+10px)]"
      style={{ left, top }}
    >
      <div
        className="relative whitespace-nowrap rounded-lg bg-white px-3 py-2 shadow-[0_8px_24px_-6px_rgba(20,30,40,0.20),0_2px_4px_rgba(20,30,40,0.06)]"
        style={{ border: `1px solid ${c.stroke}` }}
      >
        <div
          className="font-display text-[12.5px] font-semibold leading-tight"
          style={{ color: c.stroke }}
        >
          {info.title}
        </div>
        <div className="mt-0.5 text-[11px] text-ink-soft">{info.meta}</div>
        {/* Flecha apuntando al nodo */}
        <span
          aria-hidden
          className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-px"
        >
          <svg width="14" height="8" viewBox="0 0 14 8">
            <path d="M0 0 L7 8 L14 0 Z" fill={c.stroke} />
            <path d="M1 0 L7 6.7 L13 0 Z" fill="#ffffff" />
          </svg>
        </span>
      </div>
    </div>
  )
}

const KIND_TO_EJE = { eje1: 'E1', eje2: 'E2', eje3: 'E3', dt: 'DT' }

function Diagram({ activeKind, setActiveKind, activeDim, setActiveDim }) {
  const containerRef = useRef(null)
  const [nodes, setNodes] = useState(INITIAL_NODES)
  const [draggingKey, setDraggingKey] = useState(null)
  const dragState = useRef(null)
  // La animación de líneas SOLO debe ejecutarse al montar. Después, deshabilitarla.
  const [linesAnimated, setLinesAnimated] = useState(false)

  useEffect(() => {
    // Duración de la animación más el delay máximo
    const t = setTimeout(() => setLinesAnimated(true), 1800 + EDGES.length * 60)
    return () => clearTimeout(t)
  }, [])

  const px = (x) => `${(x / VB_W) * 100}%`
  const py = (y) => `${(y / VB_H) * 100}%`

  const resetPositions = useCallback(() => setNodes(INITIAL_NODES), [])

  /** Comienza el arrastre */
  const onPointerDown = useCallback((key, e) => {
    if (!containerRef.current) return
    e.currentTarget.setPointerCapture?.(e.pointerId)
    const rect = containerRef.current.getBoundingClientRect()
    dragState.current = {
      key,
      startClientX: e.clientX,
      startClientY: e.clientY,
      startX: nodes[key].x,
      startY: nodes[key].y,
      rectW: rect.width,
      rectH: rect.height,
      moved: false,
    }
    setDraggingKey(key)
  }, [nodes])

  const onPointerMove = useCallback((e) => {
    const s = dragState.current
    if (!s) return
    const dx = ((e.clientX - s.startClientX) / s.rectW) * VB_W
    const dy = ((e.clientY - s.startClientY) / s.rectH) * VB_H
    if (Math.abs(dx) + Math.abs(dy) > 2) s.moved = true
    setNodes((prev) => {
      const n = prev[s.key]
      const newX = Math.max(n.r + 4, Math.min(VB_W - n.r - 4, s.startX + dx))
      const newY = Math.max(n.r + 4, Math.min(VB_H - n.r - 4, s.startY + dy))
      return { ...prev, [s.key]: { ...n, x: newX, y: newY } }
    })
  }, [])

  const onPointerUp = useCallback((e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId)
    dragState.current = null
    setDraggingKey(null)
  }, [])

  const isDimmed = (key, kind) => {
    if (draggingKey === key) return false
    if (activeDim && activeDim === key) return false
    if (activeDim) return true
    if (!activeKind) return false
    return kind !== activeKind && kind !== 'core'
  }

  const isActive = (key) => activeDim === key

  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ containerType: 'size' }}
    >
      {/* Controles */}
      <div className="mb-2 flex shrink-0 items-center justify-end gap-2 sm:gap-3">
        <span className="hidden items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1.5 text-[11px] text-ink-soft backdrop-blur sm:flex">
          <span className="size-3 [&_svg]:size-full text-muted">{I.grip}</span>
          Arrastra los nodos
        </span>
        <button
          type="button"
          onClick={resetPositions}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] text-ink-soft transition hover:border-teal hover:text-teal-deep sm:text-[12px]"
        >
          <span className="size-3.5 [&_svg]:size-full">{I.reset}</span>
          Reiniciar
        </button>
      </div>

      <div
        ref={containerRef}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="reveal relative mx-auto touch-none select-none"
        style={{
          aspectRatio: `${VB_W} / ${VB_H}`,
          width: `min(100cqw, calc((100cqh - 42px) * ${VB_W} / ${VB_H}))`,
          maxHeight: 'calc(100cqh - 42px)',
          animationDelay: '200ms',
        }}
      >
        {/* Conectores */}
        <svg
          className="pointer-events-none absolute inset-0 size-full"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          {EDGES.map(([a, b], i) => {
            const A = nodes[a]
            const B = nodes[b]
            const dx = B.x - A.x
            const dy = B.y - A.y
            const len = Math.hypot(dx, dy) || 1
            const ux = dx / len, uy = dy / len
            const x1 = A.x + ux * A.r
            const y1 = A.y + uy * A.r
            const x2 = B.x - ux * B.r
            const y2 = B.y - uy * B.r

            const dim =
              (activeKind && B.kind !== activeKind && a !== 'CORE') ||
              (activeKind && a === 'CORE' && !(b === 'E1' || b === 'E2' || b === 'E3' || b === 'DT' ? false : false))

            const color = KIND_COLOR[B.kind].stroke
            return (
              <line
                key={`${a}-${b}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeOpacity={dim ? 0.18 : 0.55}
                strokeWidth={1.5}
                strokeLinecap="round"
                className={linesAnimated ? '' : 'draw-line'}
                style={linesAnimated ? undefined : { animationDelay: `${300 + i * 60}ms` }}
              />
            )
          })}
        </svg>

        {/* Nodos */}
        {Object.entries(nodes).map(([key, n]) => {
          const c = KIND_COLOR[n.kind]
          const size = (n.r * 2 / VB_W) * 100
          const left = px(n.x - n.r)
          const top = py(n.y - n.r)
          const width = `${size}%`

          const dim = isDimmed(key, n.kind)
          const active = isActive(key)
          const isDragging = draggingKey === key

          const isCore = n.kind === 'core'
          const isEje = ['E1', 'E2', 'E3', 'DT'].includes(key)

          const onEnter = () => {
            if (draggingKey) return
            if (isCore) {
              setActiveDim('CORE')
              return
            }
            if (isEje) setActiveKind(n.kind)
            else setActiveDim(key)
          }
          const onLeave = () => {
            if (draggingKey) return
            if (isCore) setActiveDim(null)
            else if (isEje) setActiveKind(null)
            else setActiveDim(null)
          }

          return (
            <div
              key={key}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onPointerDown={(e) => onPointerDown(key, e)}
              className={`node group absolute grid place-items-center rounded-full text-center outline-none ${
                dim ? 'node--dim' : ''
              } ${active ? 'node--active' : ''} ${isCore && !draggingKey ? 'pulse-soft' : ''} ${
                isDragging ? 'cursor-grabbing z-20' : 'cursor-grab'
              }`}
              style={{
                left,
                top,
                width,
                aspectRatio: '1 / 1',
                background: c.bg,
                color: c.text,
                border: `2px solid ${c.stroke}`,
                boxShadow: isDragging
                  ? `0 20px 40px -10px ${c.stroke}66, 0 6px 14px -4px ${c.stroke}55`
                  : isCore
                  ? '0 10px 30px -10px rgba(42,163,154,0.45), 0 4px 10px -4px rgba(42,163,154,0.30)'
                  : '0 4px 12px -4px rgba(20,30,40,0.16)',
                transform: isDragging ? 'scale(1.1)' : undefined,
                transition: isDragging ? 'box-shadow .15s ease' : undefined,
              }}
              aria-label={`${n.label}${n.sub ? ' — ' + n.sub : ''}`}
              role="button"
              tabIndex={0}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[-8px] rounded-full transition-opacity"
                style={{
                  border: `1.5px dashed ${c.stroke}`,
                  opacity: active || (isEje && activeKind === n.kind) || isDragging ? 0.55 : 0,
                }}
              />

              {isCore ? (
                <span className="px-2 text-center font-display text-[clamp(8px,1vw,11px)] font-semibold leading-[1.15] tracking-wide">
                  MODELO DE
                  <br />
                  EVALUACIÓN
                </span>
              ) : isEje ? (
                <span className="px-2 leading-tight">
                  <span className="block font-display text-[clamp(10px,1.25vw,14px)] font-semibold">{n.label}</span>
                  <span className="block font-display text-[clamp(7.5px,0.95vw,10.5px)] font-medium opacity-95">
                    {n.sub}
                  </span>
                </span>
              ) : (
                <span className="flex flex-col items-center justify-center gap-0.5">
                  <span className="size-[55%] [&_svg]:size-full">{I[n.icon]}</span>
                  <span className="font-display text-[clamp(6.5px,0.8vw,8.5px)] font-semibold tracking-wide">
                    {n.label}
                  </span>
                </span>
              )}
            </div>
          )
        })}

        {/* Tooltip flotante */}
        {(() => {
          let key = null
          if (draggingKey) key = draggingKey
          else if (activeDim) key = activeDim
          else if (activeKind) key = KIND_TO_EJE[activeKind]
          if (!key || !nodes[key]) return null
          const n = nodes[key]
          return (
            <NodeTooltip
              node={{ key, x: n.x, y: n.y, r: n.r }}
              kind={n.kind}
            />
          )
        })()}
      </div>
    </div>
  )
}

/* ========== Tarjetas leyenda ========== */

function LegendCard({ tag, title, kind, items, activeKind, setActiveKind, activeDim, setActiveDim, icon }) {
  const c = KIND_COLOR[kind]
  const isThisActive = activeKind === kind
  return (
    <article
      onMouseEnter={() => setActiveKind(kind)}
      onMouseLeave={() => setActiveKind(null)}
      className="legend-card card-shadow group relative flex h-full flex-col rounded-[12px] border bg-white p-3 sm:p-3.5 lg:p-3"
      style={{
        borderColor: isThisActive ? c.stroke : '#e6e9ec',
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div
            className="font-display text-[10px] font-semibold tracking-wider-soft sm:text-[10.5px]"
            style={{ color: c.stroke }}
          >
            {tag}
          </div>
          <div className="mt-1 h-px w-6" style={{ background: c.stroke }} />
          <h3 className="font-display mt-1.5 text-[13px] font-semibold leading-tight text-ink sm:text-[14px]">
            {title}
          </h3>
        </div>
        <span
          className="grid size-8 shrink-0 place-items-center rounded-full"
          style={{ background: c.soft, color: c.stroke }}
        >
          <span className="size-4 [&_svg]:size-full">{icon}</span>
        </span>
      </div>

      <ul className={`mt-2.5 grid gap-y-1 text-[11.5px] text-ink-soft sm:gap-y-1 sm:text-[12px] ${
        items.length > 3 ? 'grid-cols-2 gap-x-2 sm:gap-x-3' : 'grid-cols-1'
      }`}>
        {items.map((it) => {
          const isActive = activeDim === it.key
          return (
            <li
              key={it.key}
              onMouseEnter={(e) => { e.stopPropagation(); setActiveDim(it.key) }}
              onMouseLeave={(e) => { e.stopPropagation(); setActiveDim(null) }}
              className="flex cursor-default items-center gap-2 rounded-md px-1.5 py-0.5 transition-colors"
              style={{
                background: isActive ? c.soft : 'transparent',
                color: isActive ? c.stroke : undefined,
              }}
            >
              <span className="size-1.5 shrink-0 rounded-full" style={{ background: c.stroke }} />
              <span className="font-display text-[11px] font-semibold sm:text-[11.5px]" style={{ color: c.stroke }}>
                {it.key}
              </span>
              <span className="truncate">{it.label}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

/* ========== Franja inferior ========== */

function BottomStrip() {
  const labels = [
    'Excelencia académica',
    'Impacto social',
    'Desarrollo sostenible',
    'Ética e integridad',
  ]
  return (
    <div
      className="relative z-10 mt-4 w-full pb-3 lg:mt-2 lg:pb-2"
      style={{ paddingInline: 'clamp(1rem, 4vw, 5rem)' }}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <span className="hidden h-px flex-1 bg-line sm:block" />
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[clamp(10px,0.9vw,12.5px)] text-muted sm:gap-x-8 lg:gap-x-10">
          {labels.map((l) => (
            <li key={l} className="flex items-center gap-2 sm:gap-3">
              <span className="size-1.5 rounded-full bg-teal" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
        <span className="hidden h-px flex-1 bg-line sm:block" />
      </div>
    </div>
  )
}

/* ========== App ========== */

export default function App() {
  const [activeKind, setActiveKind] = useState(null)
  const [activeDim, setActiveDim] = useState(null)

  const cards = useMemo(
    () => [
      {
        tag: 'EJE 1',
        title: 'Calidad Académica',
        kind: 'eje1',
        icon: I.shieldCheck,
        items: [
          { key: 'D3',  label: 'Excelencia' },
          { key: 'D4',  label: 'Impacto Científico' },
          { key: 'D10', label: 'Productividad' },
        ],
      },
      {
        tag: 'EJE 2',
        title: 'Pertinencia y Coherencia',
        kind: 'eje2',
        icon: I.target,
        items: [
          { key: 'D1', label: 'Coherencia' },
          { key: 'D2', label: 'Pertinencia' },
          { key: 'D5', label: 'Impacto Social' },
        ],
      },
      {
        tag: 'EJE 3',
        title: 'Desarrollo Institucional',
        kind: 'eje3',
        icon: I.building,
        items: [
          { key: 'D6',  label: 'Sostenibilidad' },
          { key: 'D11', label: 'Internacionaliz.' },
          { key: 'D7',  label: 'Formación' },
          { key: 'D9',  label: 'Gobernanza' },
          { key: 'D8',  label: 'Colaboración' },
          { key: 'D13', label: 'Visibilidad' },
        ],
      },
      {
        tag: 'DIMENSIÓN TRANSVERSAL',
        title: 'Ética e Integridad',
        kind: 'dt',
        icon: I.scales,
        items: [{ key: 'D12', label: 'Ética e Integridad' }],
      },
    ],
    []
  )

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <TopSweep />

      {/* Edificio decorativo */}
      <img
        src={Edificio}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-0 opacity-90"
        style={{ width: 'clamp(180px, 16vw, 360px)' }}
      />

      <Header />

      <main
        className="relative z-10 grid w-full grid-cols-12 gap-[clamp(0.75rem,2vw,2.5rem)] pt-3 lg:flex-1 lg:min-h-0 lg:pt-2"
        style={{ paddingInline: 'clamp(1rem, 4vw, 5rem)' }}
      >
        <div className="col-span-12 flex items-start md:col-span-5 lg:col-span-3 lg:items-center">
          <LeftPanel />
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-9 lg:min-h-0">
          <Diagram
            activeKind={activeKind}
            setActiveKind={setActiveKind}
            activeDim={activeDim}
            setActiveDim={setActiveDim}
          />
        </div>
      </main>

      <section
        className="relative z-10 mt-6 w-full lg:mt-3"
        style={{ paddingInline: 'clamp(1rem, 4vw, 5rem)' }}
      >
        <div className="grid grid-cols-1 gap-[clamp(0.5rem,1vw,1rem)] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.tag}
              className="reveal h-full"
              style={{ animationDelay: `${500 + i * 80}ms` }}
            >
              <LegendCard
                {...c}
                activeKind={activeKind}
                setActiveKind={setActiveKind}
                activeDim={activeDim}
                setActiveDim={setActiveDim}
              />
            </div>
          ))}
        </div>
      </section>

      <BottomStrip />
    </div>
  )
}
