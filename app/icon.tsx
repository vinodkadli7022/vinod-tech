import { ImageResponse } from 'next/og'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#1C1B17', // Match --ink
          color: '#FFFDF8',      // Match --white
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          fontWeight: 700,
          fontFamily: 'sans-serif'
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  )
}
