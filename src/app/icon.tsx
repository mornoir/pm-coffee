import { ImageResponse } from 'next/og'

export const runtime = 'edge'
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
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090B', // Corresponds to dark background
          borderRadius: 6
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F2F2F2" // Corresponds to dark foreground
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: '80%',
            height: '80%'
          }}
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
