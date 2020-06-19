import { useStaticQuery, graphql } from 'gatsby'

export const useContentfulImagesQuery = () => {
  const { allContentfulImage } = useStaticQuery(
    graphql`
      query ImagesQuery {
        allContentfulImage {
          edges {
            node {
              id
              imageCaption {
                imageCaption
              }
              imageCredits {
                imageCredits
              }
              photo {
                contentful_id
                title
                fluid(quality: 100, maxWidth: 1200) {
                  ...GatsbyContentfulFluid
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulImage
}
