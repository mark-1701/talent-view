import React from 'react'
import HumanResourcesLayout from '../pages/HumanResources/components/HumanResourcesLayout'
import HumanResourcesSideBarLinks from '../pages/HumanResources/components/HumanResourcesSideBarLinks'

const HumanResourcesRoute = ({ selectedLink, module }) => {
  return (
    <HumanResourcesLayout
      sideBarLinks={<HumanResourcesSideBarLinks selectedLink={selectedLink} />}
      module={module}
    />
  )
}

export default HumanResourcesRoute