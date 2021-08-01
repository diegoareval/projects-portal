import React from 'react'
import { SkeletonWrapper } from "@riyazurrazak/react-skeleton";
type SkeletonProps = {
    loading: boolean,
    children: React.ReactNode
}
const Skeleton = ({loading, children}: SkeletonProps) => {
    return (
        <SkeletonWrapper
        className="skeleton_wrapper"
        isLoading={loading}
        height="20px"
        width="60%"
      >
       {children}
      </SkeletonWrapper>
    )
}

export default Skeleton
