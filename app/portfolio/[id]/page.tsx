import { Suspense } from 'react'
import ProjectClientContainer from '@/components/ProjectClientContainer'

// Отключаем правило ESLint для этого файла
/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function ProjectPage({ params }: { params: any }) {
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