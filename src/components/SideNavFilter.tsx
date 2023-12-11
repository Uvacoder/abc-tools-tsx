'use client'

import { CheckedState } from '@radix-ui/react-checkbox'
import { isEqual } from 'lodash'
import IoFilter from '../icons/IoFilter'
import { SideNavFilter, defaultFilter } from './SideNav'
import { Button } from './ui/Button'
import { Checkbox } from './ui/Checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'

type SideNavFilterProps = {
  filter: SideNavFilter
  setFilter: (value: SideNavFilter) => void
}

export default function SideNavFilter(props: SideNavFilterProps) {
  const { filter, setFilter } = props

  const handleShowOnlyFavoriteChange = (checked: CheckedState) => {
    setFilter({ ...filter, showOnlyFavorites: checked === true })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="relative" variant="ghost" size="icon">
          <IoFilter className="w-4 h-4" />
          {!isEqual(filter, defaultFilter) && (
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-primary"></div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        {/* Show only favorites */}
        <div className="flex space-x-2 items-top">
          <Checkbox
            checked={filter.showOnlyFavorites}
            id="show-only-favorites"
            onCheckedChange={handleShowOnlyFavoriteChange}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="show-only-favorites"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show favorites only
            </label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
