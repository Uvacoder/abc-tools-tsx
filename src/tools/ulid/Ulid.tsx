'use client'

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs'
import LoadingIcon from '../../icons/LoadingIcon'

const SkeletonLoader = () => (
  <div className="flex items-center justify-center w-full h-full animate-pulse">
    <LoadingIcon className="w-8 h-8 text-primary animate-spin" />
  </div>
)

const UlidGenerator = dynamic(() => import('./UlidGenerator'), {
  ssr: false,
  loading: SkeletonLoader
})
const UlidTimeDecoder = dynamic(() => import('./UlidTimeDecoder'), {
  ssr: false,
  loading: SkeletonLoader
})
const UlidValidator = dynamic(() => import('./UlidValidator'), {
  ssr: false,
  loading: SkeletonLoader
})

export default function Ulid() {
  const tabs = [
    { key: 'generator', label: 'Generator', component: <UlidGenerator /> },
    { key: 'time-decoder', label: 'Time Decoder', component: <UlidTimeDecoder /> },
    { key: 'validator', label: 'Validator', component: <UlidValidator /> }
  ]

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')
  let initTab
  if (!tab || !tabs.find(option => option.key === tab)) {
    initTab = tabs[0].key
  } else {
    initTab = tabs.find(option => option.key === tab)?.key
  }

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <Tabs defaultValue={initTab} className="flex flex-col h-full gap-2">
        <TabsList className="w-fit">
          {tabs.map(tab => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(tab => (
          <TabsContent className="flex-1 min-h-0" key={tab.key} value={tab.key}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
