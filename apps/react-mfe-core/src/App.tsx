import React from 'react'

// @ts-ignore
const MfeAlt = React.lazy(() => import('reactMfeAlt/App'))

export default function App(): JSX.Element {
  return (
    <React.Suspense fallback={null}>
      <MfeAlt />
    </React.Suspense>
  )
}