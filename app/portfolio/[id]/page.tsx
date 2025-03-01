import { Suspense } from 'react'
import ProjectClientContainer from '@/components/ProjectClientContainer'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
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