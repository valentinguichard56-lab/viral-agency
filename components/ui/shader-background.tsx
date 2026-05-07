'use client'

import { MeshGradient, DotOrbit } from '@paper-design/shaders-react'

type Variant = 'mesh' | 'dots' | 'combined'

type Props = {
  variant?: Variant
  speed?: number
  colors?: string[]
  dotColors?: string[]
  dotColorBack?: string
  className?: string
}

const DEFAULT_COLORS = ['#0a0a0a', '#141414', '#3a2a10', '#d4a857']

export function ShaderBackground({
  variant = 'mesh',
  speed = 0.35,
  colors = DEFAULT_COLORS,
  dotColors = ['#d4a857'],
  dotColorBack = '#0a0a0a',
  className = '',
}: Props) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {variant === 'mesh' && (
        <MeshGradient
          style={{ width: '100%', height: '100%' }}
          colors={colors}
          speed={speed}
          distortion={0.8}
          swirl={0.6}
          grainMixer={0.15}
          grainOverlay={0.05}
        />
      )}

      {variant === 'dots' && (
        <DotOrbit
          style={{ width: '100%', height: '100%' }}
          colorBack={dotColorBack}
          colors={dotColors}
          speed={speed}
        />
      )}

      {variant === 'combined' && (
        <>
          <MeshGradient
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            colors={colors}
            speed={speed * 0.5}
            distortion={0.8}
            swirl={0.6}
            grainMixer={0.15}
            grainOverlay={0.05}
          />
          <div className="w-full h-full absolute inset-0 opacity-60">
            <DotOrbit
              style={{ width: '100%', height: '100%' }}
              colorBack="transparent"
              colors={dotColors}
              speed={speed * 1.5}
            />
          </div>
        </>
      )}
    </div>
  )
}
