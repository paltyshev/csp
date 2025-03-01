import { Suspense } from 'react'
import ProjectClientContainer from '@/components/ProjectClientContainer'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Обработка параметров в серверном компоненте
  // Используем await для доступа к params в соответствии с рекомендациями Next.js
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectClientContainer projectId={projectId} />
    </Suspense>
  )
}