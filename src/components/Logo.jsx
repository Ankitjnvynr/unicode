"use client"
import React from 'react'

export default function Logo({width=100}) {
  return (
    <div style={{width: `${width}px`}}>
        <img src="/unocord-logo.png" alt="Logo"/>
    </div>
  )
}
