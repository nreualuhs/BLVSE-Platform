// pages/ToolDetailPage.tsx
import { useParams } from 'react-router-dom'

export default function ToolDetailPage() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Tool Detail Page</h2>
      <p>Tool ID: {id}</p>
      {/* You can fetch full tool details based on ID here */}
    </div>
  )
}
