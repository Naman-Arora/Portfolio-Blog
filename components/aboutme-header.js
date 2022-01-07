//The styling for the import information for the about me posts

import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function AboutMeHeader({ title, coverImage }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={800} width={1200} />
      </div>
    </>
  )
}
