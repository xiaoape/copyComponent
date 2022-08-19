import React, { useState } from 'react'

const ActiveIcon = ({ normalUrl, activeUrl, trigger, width, height, active = false, onClick }) => {
  const [light, setLight] = useState(active || false)

  let event = {}
  switch (trigger) {
    case 'hover':
      event.onMouseOver = () => {
        setLight(true)
      }
      event.onMouseOut = () => {
        setLight(false)
      }
      break

    case 'click':
      event.onClick = () => {
        setLight(!active)
      }
      break

    default:
      break
  }
  return (
    <div onClick={onClick} {...event}>
      <img
        style={{ display: !light ? 'block' : 'none' }}
        src={normalUrl} width={width} height={height}
      />

      {trigger && (
        <img
          style={{ display: light ? 'block' : 'none' }}
          src={activeUrl} width={width} height={height}
        />
      )}
    </div>
  )
}

export const HoverTwitter = props => <ActiveIcon normalUrl="https://s3-nswap-base.nswap.com/0.3.1/net_normal@2x.png" activeUrl="https://s3-nswap-base.nswap.com/0.3.1/net_active@2x.png" trigger="hover" width={36} height={36} {...props} />
