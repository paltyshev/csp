import { Suspense } from 'react'
import ProjectClientContainer from '@/components/ProjectClientContainer'

<<<<<<< HEAD
export default async function ProjectPage({ params }: { params: any }) {
=======
interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
>>>>>>> 945d3fd0ea86772d6b7ffa40a01286e755180fda
  // Обработка параметров в серверном компоненте
  // В Next.js 15 нужно ждать params перед доступом к свойствам
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectClientContainer projectId={projectId} />
    </Suspense>
  )
}