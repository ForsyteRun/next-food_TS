import React from 'react'
import ContentLoader from 'react-content-loader'

const Sceleton = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={280}
        height={480}
        viewBox='0 0 280 480'
        backgroundColor='#f2eeee'
        foregroundColor='#cccccc'>
        <circle cx='140' cy='140' r='120' />
        <rect x='0' y='339' rx='0' ry='0' width='280' height='85' />
        <rect x='19' y='294' rx='0' ry='0' width='250' height='30' />
        <rect x='146' y='437' rx='30' ry='30' width='132' height='40' />
        <rect x='0' y='445' rx='0' ry='0' width='84' height='24' />
      </ContentLoader>
    </div>
  )
}

export default Sceleton
